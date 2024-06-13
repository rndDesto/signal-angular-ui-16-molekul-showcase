import { Component, Input } from '@angular/core';
import { colorType, tselBatikType } from '../interface';

type sizeType = '1' | '2' | '3' | '4'  | '5' | '6' | string;

@Component({
  selector: 'signal-heading',
  templateUrl: './heading.component.html'
})
export class SignalHeadingComponent{

  @Input() color?: colorType = 'primary'; 
  @Input() size?: sizeType = '1';
  @Input() class?: string = '';
  @Input() weight?: tselBatikType = 'bold'; 
  @Input() alignment?: string = 'left';
  @Input() styles?: any = null;
  @Input() variant?: string = '1'; 
  @Input() ellipsis: boolean = false; 
  

  headingClass(): { [key: string]: boolean } {
    return {
      [`signal-text-color-${this.color}`]: true,
      [`size-${this.size}`]: true,
      [`text-align-${this.alignment}`]: true,
      [`font-telkomsel-batik-${this.weight}`]: true,
      [`variant-${this.variant}`]: true,
      ['text-ellipsis']: this.ellipsis,
    };
  }

}
