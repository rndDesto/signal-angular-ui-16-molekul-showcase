import { Component, Input, OnInit } from '@angular/core';
import { colorType, poppinsType } from '../interface';


@Component({
  selector: 'signal-title',
  templateUrl: './title.component.html'
})
export class SignalTitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() color?: colorType = 'primary'; 
  @Input() weight?: poppinsType = 'bold'; 
  @Input() alignment?: poppinsType = 'left'; 
  @Input() class?: string = '';
  @Input() styles?: any = null; 
  @Input() decoration?: string = 'none'; 


  titleClass(): { [key: string]: boolean } {
    return {
      [`signal-text-color-${this.color}`]: true,
      [`text-align-${this.alignment}`]: true,
      [`font-poppins-${this.weight}`]: true,
      [`text-decoration-${this.decoration}`]: true,
      [`${this.class}`]:true
    };
  }

}
