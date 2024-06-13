import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'signal-callout-highlight',
  templateUrl: './callout-highlight.component.html',
  styleUrls: ['./callout-highlight.component.css']
})
export class CalloutHighlightComponent implements OnInit {
  @Input() color: string = '';
  @Input() rounded: string = '1';
  @Input() images: string = '';


  constructor() { }

  ngOnInit(): void {
  }

  getCalloutClasses(): { [key: string]: boolean } {
    return {
      [`signal-callout-highlight-root`]: true,
      [`signal-bg-color-${this.color}`]: true,
      [`border-radius-${this.rounded}-sm`]: true,
    };
  }

}
