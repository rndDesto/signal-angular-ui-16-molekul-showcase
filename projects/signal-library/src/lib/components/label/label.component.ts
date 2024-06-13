import { Component, Input, OnInit } from '@angular/core';
import { Styles } from '../../interfaces';

@Component({
  selector: 'signal-label',
  templateUrl: './label.component.html'
})
export class LabelComponent implements OnInit {
  @Input() color: string = 'primary-5';
  @Input() rounded: string = '1';
  @Input() variant: string = '1';
  @Input() styles?: Styles | any;
  @Input() roundedSize?: any = 'lg';
  @Input() borderColor: string = 'primary-5';
  @Input() borderSize: string = '0';

  constructor() { }

  ngOnInit(): void {
  }

  getlabelClassName(): { [key: string]: boolean } {
    return {
      [`signal-bg-color-${this.color}`]: true,
      [`label-variant-${this.variant}`]: true,
      [`border-radius-${this.rounded}-${this.roundedSize}`]: true,
      [`signal-border-color-${this.borderColor}`]: true,
      [`signal-border-size-${this.borderSize}`]: true
    };
  }

}
