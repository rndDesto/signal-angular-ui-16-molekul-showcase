import { Component, Input, OnInit } from '@angular/core';
import { colorType, poppinsType } from '../interface';
import { Styles } from '../../../interfaces';
type sizeType = '1' | '2' | '3' | string;

@Component({
  selector: 'signal-body',
  templateUrl: './body.component.html'
})
export class SignalBodyComponent implements OnInit {
  @Input() size?: sizeType = '2';
  @Input() color?: colorType = 'primary'; 
  @Input() weight?: poppinsType = 'regular'; 
  @Input() alignment?: string = 'left';
  @Input() styles?: Styles | any = null;
  @Input() variant?: string = '1'; 
  @Input() decoration?: string = 'none'; 
  @Input() ellipsis: boolean = false; 
  

  constructor() { }

  ngOnInit(): void {
  }


  bodyClass(): { [key: string]: boolean } {
    return {
      [`signal-text-color-${this.color}`]: true,
      [`size-${this.size}`]: true,
      [`text-align-${this.alignment}`]: true,
      [`font-poppins-${this.weight}`]: true,
      [`variant-${this.variant}`]: true,
      [`text-decoration-${this.decoration}`]: true,
      ['text-ellipsis']: this.ellipsis,
    };
  }

}
