import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { KeysPipe } from '../../../pipes/keys';
import { Styles } from '../../../interfaces';


export class OtpConfig {
  allowKeyCodes?: string[];
  allowNumbersOnly?: boolean;
  inputClass?: string;
  disableAutoFocus?: boolean;
}


@Component({
  selector: 'signal-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class SignalOtpComponent implements OnInit, AfterViewInit, OnChanges  {
  @Input() config: OtpConfig = {
    allowNumbersOnly: false,
    disableAutoFocus: false
  };
  @Input() placeholder?: string = '';
  @Input() otpLength: number = 4;
  @Input() isDisabled: boolean = false;
  @Input() isPassword: boolean = false;
  @Input() variant?: string = '1';
  @Input() color?: string = 'neutral-3';
  @Input() radius?: string = '2';
  @Input() styles?: Styles;

  @Output() onInputChange = new EventEmitter<string>();
  otpForm!: FormGroup;
  inputControls: FormControl[] = new Array(this.otpLength);
  componentKey =
    Math.random()
      .toString(36)
      .substring(2) + new Date().getTime().toString(36);
  inputType!: string;
  constructor(private keysPipe: KeysPipe) {}

  ngOnInit() {
    this.getOtpForm();
    this.inputType = this.getInputType();
  }
  ngAfterViewInit(): void {
    if (!this.config.disableAutoFocus) {
      const containerItem = document.getElementById(`c_${this.componentKey}`);
      if (containerItem) {
        containerItem.addEventListener('paste', (evt) => this.handlePaste(evt));
        const ele: any = containerItem.getElementsByClassName('otp-input')[0];
        if (ele && ele.focus) {
          ele.focus();
        }
      }
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isPassword']) {
      this.inputType = this.getInputType();
    }
    if (changes['otpLength']) {
      this.getOtpForm();
    }

    if (changes['isDisabled']) {
      if (this.isDisabled) {
        this.otpForm.disable();
      } else {
        this.otpForm.enable();
      }
    }
  }
  
  private getOtpForm():void {
    this.otpForm = new FormGroup({});
    for (let index = 0; index < this.otpLength; index++) {
      const control = new FormControl({ value: '', disabled: this.isDisabled });
      this.otpForm.addControl(this.getControlName(index), control);
    }
  }

  private getControlName(idx: number) {
    return `ctrl_${idx}`;
  }

  ifLeftArrow(event: KeyboardEvent) {
    return this.ifKeyCode(event, 37);
  }


  ifRightArrow(event: KeyboardEvent) {
    return this.ifKeyCode(event, 39);
  }

  ifBackspaceOrDelete(event: KeyboardEvent) {
    return (
      event.key === 'Backspace' ||
      event.key === 'Delete' ||
      this.ifKeyCode(event, 8) ||
      this.ifKeyCode(event, 46)
    );
  }

  ifKeyCode(event:any, targetCode:any) {
    const key = event.keyCode || event.charCode;
    return key == targetCode ? true : false;
  }
  onKeyDown($event: any): void {
    var isSpace = this.ifKeyCode($event, 32)
    if (isSpace) { // prevent space
        return;
    }
  }

  onKeyUp($event:any, inputIdx:number) {
    const nextInputId = this.appendKey(`otp_${inputIdx + 1}`);
    const prevInputId = this.appendKey(`otp_${inputIdx - 1}`);
    if (this.ifRightArrow($event)) {
      this.setSelected(nextInputId);
      return;
    }
    if (this.ifLeftArrow($event)) {
      this.setSelected(prevInputId);
      return;
    }
    const isBackspace = this.ifBackspaceOrDelete($event);
    if (isBackspace && !$event.target.value) {
      this.setSelected(prevInputId);
      this.rebuildValue();
      return;
    }
    if (!$event.target.value) {
      return;
    }
    if (this.ifValidEntry($event)) {
      this.setSelected(nextInputId);
    }
    this.rebuildValue();
  }

  appendKey(id: string) {
    return `${id}_${this.componentKey}`;
  }

  setSelected(eleId: string) {
    this.focusTo(eleId);
    const ele: any = document.getElementById(eleId);
    if (ele && ele.setSelectionRange) {
      setTimeout(() => {
        ele.setSelectionRange(0, 1);
      }, 0);
    }
  }

  ifValidEntry(event: any) {
    const inp = String.fromCharCode(event.keyCode);
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    return (
      isMobile ||
      /[a-zA-Z0-9-_]/.test(inp) ||
      (this.config.allowKeyCodes &&
        this.config.allowKeyCodes.includes(event.keyCode)) ||
      (event.keyCode >= 96 && event.keyCode <= 105)
    );
  }

  focusTo(eleId:any) {
    const ele: any = document.getElementById(eleId);
    if (ele) {
      ele.focus();
    }
  }

  setValue(value: any) {
    if (this.config.allowNumbersOnly && isNaN(value)) {
        return;
    }
    this.otpForm.reset();
    if (!value) {
        this.rebuildValue();
        return;
    }
    value = value.toString().replace(/\s/g, ''); // remove whitespace
    Array.from(value).forEach((c, idx) => {
        const control = this.otpForm.get(this.getControlName(idx));
        if (control) {
            control.setValue(c);
        }
    });
    if (!this.config.disableAutoFocus) {
        const containerItem = document.getElementById(`c_${this.componentKey}`);
        if (containerItem) {
            const indexOfElementToFocus = value.length < this.otpLength ? value.length : (this.otpLength - 1);
            const elements = containerItem.getElementsByClassName('otp-input');
            const ele: any = elements[indexOfElementToFocus];
            if (ele && ele.focus) {
                ele.focus();
            }
        }
    }
    this.rebuildValue();
}

  rebuildValue() {
    let val = '';
    this.keysPipe.transform(this.otpForm.controls).forEach(k => {
      if (this.otpForm.controls[k].value) {
        val += this.otpForm.controls[k].value;
      }
    });
    this.onInputChange.emit(val);
  }
  getInputType():string{
    return this.isPassword 
      ? 'password' 
      : this.config.allowNumbersOnly 
        ? 'tel'
        : 'text';
  }
  handlePaste(e: any) {
    let clipboardData = e.clipboardData || (window as any)['clipboardData'];
    if (clipboardData) {
      var pastedData = clipboardData.getData('text');
    }
    e.stopPropagation();
    e.preventDefault();
    if (!pastedData) {
      return;
    }
    this.setValue(pastedData);
  }

  getFormControl(control: any): FormControl {
  if (control instanceof FormControl) {
    return control;
  } else {
    throw new Error('Expected FormControl but received something else');
  }
}

getInputClass(): { [key: string]: boolean } {
  return {
    [`signal-input-variant-${this.variant}`]: true,
    [`signal-border-color-${this.color}`]: true,
    [`border-radius-${this.radius}`]: true,
  };
}


}
