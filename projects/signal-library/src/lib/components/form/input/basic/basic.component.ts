import { Component, EventEmitter, Input, OnInit, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SectionLeftAndRight } from '../interface';
import { NumSeparatorPipe } from 'projects/signal-library/src/lib/pipes';

@Component({
  selector: 'signal-input-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SignalInputBasicComponent),
      multi: true,
    },
  ],
})
export class SignalInputBasicComponent implements OnInit, ControlValueAccessor   {
  // private _value: any;
  value: any;
  
  @Input() typeInput: string = 'text' || 'password';
  @Input() label?: string = '';
  @Input() required?: boolean=false;
  @Input() leftSection?: SectionLeftAndRight;
  @Input() rightSection?: SectionLeftAndRight;
  @Input() supportText?: string | null= null;
  @Input() controls: any = null;
  @Input() placeholder?: string = '';
  @Input() variant?: string = '1';
  @Input() color?: string = 'neutral-3';
  @Input() labelWeight?: string = 'regular';
  @Input() labelColor?: string = 'secondary-7';
  @Input() space?: string = '1';
  @Input() radius?: string = '0';


  @Output() blur: EventEmitter<null> = new EventEmitter();
  @Output() keyup: EventEmitter<null> = new EventEmitter();
  @Output() focus: EventEmitter<null> = new EventEmitter();

  disabled?: boolean = false;

  constructor(
  ) { }

  ngOnInit(): void {

  }

  getInputClass(): { [key: string]: boolean } {
    return {
      [`signal-basic-input`]: true,
      [`signal-input-variant-${this.variant}`]: true,
      [`signal-border-color-${this.color}`]: true,
      [`signal-input-space-${this.space}`]: true,
      [`border-radius-${this.radius}`]: true,
    };
  }

  getSupportClass(): { [key: string]: boolean } {
    return {
      [`signal-text-color-${this.color}`]: true,
    };
  }
  getInputWrapperClass(): { [key: string]: boolean } {
    return {
      [`right-isactive`]: !!this.rightSection,
      [`left-isactive`]: !!this.leftSection,
      [`right-label`]: this.rightSection?.type === 'label',
      [`right-text`]: this.rightSection?.type === 'text',
      [`right-icon`]: this.rightSection?.type === 'icon',
      [`left-label`]: this.leftSection?.type === 'label',
      [`left-text`]: this.leftSection?.type === 'text',
      [`left-icon`]: this.leftSection?.type === 'icon',
    };
  }


  onChange: (_: any) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: any): void {
    this.value = value ?? null;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  keyPress(e:any) {
    if (e.keyCode === 13) {
      return this.blur.emit();
    }
  }

  keyUp(e:any) {
    this.keyup.emit(e);
  }

  onBlur(e:any) {
    this.blur.emit(e);
  }

  onFocus() {
    this.focus.emit();
  }

}
