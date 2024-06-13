import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'signal-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class SignalProgressBarComponent implements OnInit {

  @Input() color: string = 'info-5';
  @Input() value: number = 0;
  @Input() size: number = 1;

  @Input() label?: string = '';
  @Input() required?: boolean=false;
  @Input() labelWeight?: string = 'regular';
  @Input() labelColor?: string = 'secondary-7';

  constructor() { }

  ngOnInit(): void {
  }

  
  getBarClasses(): { [key: string]: boolean } {
    return {
      [`signal-bg-color-${this.color}`]: true,
    };
  }

  getProgressClasses(): { [key: string]: boolean } {
    return {
      [`progressbar-size-${this.size}`]: true,
    };
  }

}
