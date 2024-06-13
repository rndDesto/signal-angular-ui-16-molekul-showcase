import { Component, Input, OnInit } from '@angular/core';
import { Styles } from '../../interfaces';

@Component({
  selector: 'signal-listwithline',
  templateUrl: './listwithline.component.html',
  styleUrls: ['./listwithline.component.scss']
})
export class SignalListwithlineComponent implements OnInit {
  @Input() line: string = 'solid';
  @Input() iconColor: string = 'secondary-7';
  @Input() icon: string = 'ico_logo-shape';
  @Input() bg: string = 'neutral-0';
  @Input() lineColor: string = 'neutral-3';
  @Input() styles?: Styles;

  constructor() { }

  ngOnInit(): void {
  }

  getBgColor(): { [key: string]: any } {
    return {
      [`signal-bg-color-${this.bg}`]: true,
    };
  }

  getLineVariant(): { [key: string]: any } {
    return {
      [`line-${this.line}`]: true,
      [`signal-bis-${this.lineColor}`]: true,
    };
  }

  getIconColor(): { [key: string]: any } {
    return {
      [`signal-bg-color-${this.bg}`]: true,
    };
  }

}
