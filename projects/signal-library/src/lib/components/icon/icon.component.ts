import { Component, Input, OnInit } from '@angular/core';
import { Styles } from '../../interfaces';


@Component({
  selector: 'signal-icon',
  templateUrl: './icon.component.html'
})
export class IconComponent implements OnInit {

  constructor() {}
  ngOnInit() { }


  @Input() color:string | undefined='primary-5';
  @Input() fontIcon:string='';
  @Input() size:string='3';
  @Input() styles?: Styles | any;

  iconClass(): { [key: string]: boolean } {
    return {
      [`size-${this.size}`]: true,
    };
  }

  iconColor(): { [key: string]: boolean } {
    return {
      [`signal-text-color-${this.color}`]: true,
      [`signal-icon-body`]: true,
    };
  }

}
