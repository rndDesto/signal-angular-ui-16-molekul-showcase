import { Component, EventEmitter, Input, OnInit, Output, forwardRef } from '@angular/core';
import { SelecType } from '../interface';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'signal-select-basic',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectBasicComponent),
      multi: true,
    },
  ],
})
export class SelectBasicComponent implements OnInit, ControlValueAccessor {
  value: any;
  @Input() options: SelecType[] = [];
  @Input() label?: string = '';
  @Input() required?: boolean=false;
  @Input() variant?: string='1';
  @Input() placeholder?: string='';
  @Input() supportText?: string | null= null;
  @Input() color?: string = 'default';
  @Output() blur: EventEmitter<null> = new EventEmitter();
  @Output() keyup: EventEmitter<null> = new EventEmitter();
  @Output() focus: EventEmitter<null> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  getSelectClass(): { [key: string]: boolean } {
    return {
      [`signal-select-variant-${this.variant}`]: true,
    };
  }

  getSupportClass(): { [key: string]: boolean } {
    return {
      [`signal-supporttext-${this.color}`]: true,
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
    console.log('bulr')
  }

  onFocus() {
    this.focus.emit();
  }


}
