import { Component, EventEmitter, Input, OnInit, Output, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'signal-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SignalTextareaComponent),
      multi: true,
    },
  ],
})
export class SignalTextareaComponent implements OnInit {
  value: any;
  disabled?: boolean = false;
  characterCount: number = 0;

  @Input() label?: string = '';
  @Input() required?: boolean=false;
  @Input() placeholder?: string = '';
  @Input() variant?: string = '1';
  @Input() color?: string = 'neutral-3';
  @Input() labelWeight?: string = 'regular';
  @Input() labelColor?: string = 'secondary-7';
  @Input() space?: string = '1';
  @Input() radius?: string = '0';
  @Input() supportText?: string | null= null;
  @Input() controls: any = null;
  @Input() minRows?: number;
  @Input() maxRows?: number;
  @Input() maxChar?: number;

  @Output() blur: EventEmitter<null> = new EventEmitter();
  @Output() keyup: EventEmitter<null> = new EventEmitter();
  @Output() focus: EventEmitter<null> = new EventEmitter();
  @Output() onClear: EventEmitter<void> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  getRows(): number {
    if (this.value) {
      const lines = this.value.split('\n').length;
      return Math.min(Math.max(lines, this.minRows || 1), this.maxRows || Infinity);
    } else {
      return this.minRows || 1;
    }
  }


  getInputClass(): { [key: string]: boolean } {
    return {
      [`signal-textarea`]: true,
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
  
  onChange(value: any): void {
    this.value = value;
    this.characterCount = this.value ? this.value.length : 0;
    this.onChange(value); // Memanggil fungsi onChange yang terdaftar
  }
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

  handleClearText(e?:any) {
    this.onClear.emit(e);
    this.value = '';
  }




}
