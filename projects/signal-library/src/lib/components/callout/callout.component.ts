import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'signal-callout',
  templateUrl: './callout.component.html'
})
export class CalloutComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {

    if (!this.onClose.observers.length) {
      this.renderOnclose = false;
    }
  }

  @Input() color: string = 'info';
  @Input() alignItem: string = 'start';
  @Input() open: boolean = false;
  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();
  @Input() styles?: any = null;

  renderOnclose:boolean=true

  getCalloutClasses(): { [key: string]: boolean } {
    return {
      [`callout-bg-${this.color}`]: true,
      [`align-item-${this.alignItem}`]: true,
    };
  }

  handleClose() {
    this.onClose.emit();
  }

  handleColorIcon(c:string){
    if(c ==='valid'){
      return 'success'
    }
    else{
      return c
    }
  }
}
