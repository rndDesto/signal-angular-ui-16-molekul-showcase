import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'signal-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SignalSwitchComponent implements OnInit {

  @Input() checked = false;
  @Output() checkedChange = new EventEmitter<boolean>();
  @Input() labelPosition: 'left' | 'right' | string = 'left';
  @Input() label?:string = '';
  @Input() disabled?:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }


  toggleSwitch(event: any): void {
    this.checked = event.target.checked;
    this.checkedChange.emit(this.checked);
  }

}
