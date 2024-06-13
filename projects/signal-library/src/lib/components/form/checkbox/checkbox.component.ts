import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'signal-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class SignalCheckboxComponent implements OnInit {
  @Input() isChecked: boolean = false;
  @Input() isDisabled?: boolean = false;
  @Input() weight?: string = 'regular';
  @Input() label: string = '';
  @Input() activeThumbIcon: string = 'ico_checkbox';
  @Input() inactiveThumbIcon: string = 'ico_checkbox_inactive';
  @Input() activeColorIcon: string = 'info-5';
  @Input() inactiveColorIcon: string = 'neutral-4';
  @Output() onClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    this.isDisabled = this.isDisabled || false;
  }

  handleClick() {
    if (!this.isDisabled) {
      this.toggleChecked();
    }
  }

  toggleChecked() {
    this.isChecked = !this.isChecked;
    this.onClick.emit(this.isChecked);
  }

  getIcon() {
    return this.isChecked ? this.activeThumbIcon: this.inactiveThumbIcon;
  }

  getIconColor() {
    if (this.isDisabled && this.isChecked) {
      return this.inactiveColorIcon;
    } else if (this.isChecked) {
      return this.activeColorIcon;
    } else {
      return this.inactiveColorIcon;
    }
  }

  getBodyColor() {
    return this.isDisabled ? 'neutral-4' : 'secondary-7';
  }
}