import { Component, Input, OnInit } from '@angular/core';
import { Styles } from '../../interfaces';

@Component({
  selector: 'signal-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {
  @Input() shadow: string = '0';
  @Input() rounded: string = '';
  @Input() space: string = "1";
  @Input() variant: string = "1";
  @Input() backgroundColor: string = "neutral-0";
  @Input() fontColor: string = "secondary-7";
  @Input() borderColor: string = "transparent";
  @Input() borderSize: string = "white";
  @Input() styles?: Styles | any;
  @Input() height?: string = 'auto';
  constructor() { }

  ngOnInit(): void {
  }

  getCardClass(): { [key: string]: boolean } {
    return {
      [`card-variant-${this.variant}`]: true,
      [`box-shadow-${this.shadow}`]: true,
      [`border-radius-${this.rounded}`]: this.rounded !== '' ? true : false,
      [`card-space-${this.space}`]: true,
      [`card-height-${this.height}`]: true,
      [`signal-bg-color-${this.backgroundColor}`]: true,
      [`signal-text-color-${this.fontColor}`]: true,
      [`signal-border-size-${this.borderSize}`]: true,
      [`signal-border-color-${this.borderColor}`]: true,
      [`signal-spacing-pl-auto`]: true,
    };
  }

}
