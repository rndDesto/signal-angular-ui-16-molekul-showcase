import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Styles } from '../../interfaces';

@Component({
  selector: 'signal-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent implements OnInit {
  @Input() disabled: boolean = false;
  @Input() full:boolean = false;
  @Input() color: string = 'primary';
  @Input() size: string = 'medium';
  @Input() justify: string = 'center';
  @Input() variant: string = '1';
  @Input() styles?: Styles | any;
  @Input() m?: string | number;
  @Input() mx?: string | number;
  @Input() my?: string | number;
  @Input() mt?: string | number;
  @Input() mr?: string | number;
  @Input() mb?: string | number;
  @Input() ml?: string | number;
  @Input() p?: string | number;
  @Input() px?: string | number;
  @Input() py?: string | number;
  @Input() pt?: string | number;
  @Input() pr?: string | number;
  @Input() pb?: string | number;
  @Input() pl?: string | number;

  @Output() onClick: EventEmitter<any> = new EventEmitter();


  constructor() {}

  ngOnInit(): void {
  }

  getButtonClasses(): { [key: string]: boolean } {
    return {
      [`color-${this.color}`]: true,
      [`signal-bg-color-${this.color}`]: true,
      [`size-${this.size}`]: true,
      [`full`]: this.full,
      [`disabled`]: this.disabled,
      [`button-varian-${this.variant}`]: true
    };
  }

  getButtonJustify(): { [key: string]: boolean } {
    return {
      [`justify-${this.justify}`]: true    
    };
  }

  getInlineStyles(): { [key: string]: string } {
    const styles: { [key: string]: string } = this.styles?.root || {};

    if (this.p !== undefined) styles['padding'] = `var(--signal-spacing-p-${this.p})`;
    if (this.py !== undefined) {
      styles['paddingTop'] = `var(--signal-spacing-py-${this.py})`;
      styles['paddingBottom'] = `var(--signal-spacing-py-${this.py})`;
    }
    if (this.px !== undefined) {
      styles['paddingLeft'] = `var(--signal-spacing-py-${this.px})`;
      styles['paddingRight'] = `var(--signal-spacing-py-${this.px})`;
    }
    if (this.pt !== undefined) styles['paddingTop'] = `var(--signal-spacing-pt-${this.pt})`;
    if (this.pr !== undefined) styles['paddingRight'] = `var(--signal-spacing-pr-${this.pr})`;
    if (this.pb !== undefined) styles['paddingBottom'] = `var(--signal-spacing-pb-${this.pb})`;
    if (this.pl !== undefined) styles['paddingLeft'] = `var(--signal-spacing-pl-${this.pl})`;

    if (this.m !== undefined) styles['padding'] = `var(--signal-spacing-m-${this.m})`;
    if (this.my !== undefined) {
      styles['marginTop'] = `var(--signal-spacing-my-${this.my})`;
      styles['marginBottom'] = `var(--signal-spacing-my-${this.my})`;
    }
    if (this.mx !== undefined) {
      styles['marginLeft'] = `var(--signal-spacing-my-${this.mx})`;
      styles['marginRight'] = `var(--signal-spacing-my-${this.mx})`;
    }
    if (this.mt !== undefined) styles['marginTop'] = `var(--signal-spacing-mt-${this.mt})`;
    if (this.mr !== undefined) styles['marginRight'] = `var(--signal-spacing-mr-${this.mr})`;
    if (this.mb !== undefined) styles['marginBottom'] = `var(--signal-spacing-mb-${this.mb})`;
    if (this.ml !== undefined) styles['marginLeft'] = `var(--signal-spacing-ml-${this.ml})`;

    return styles;
  }

  onButtonClick(event: Event) {
    if (!this.disabled) {
      this.onClick.emit(event);
    }
  }

}
