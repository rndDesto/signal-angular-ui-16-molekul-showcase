import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "signal-radio",
  templateUrl: "./radio.component.html",
  styleUrls: ["./radio.component.css"],
})
export class SignalRadioComponent implements OnInit {
  @Input() isChecked: boolean = false;
  @Input() label: string = "";
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();
  @Input() activeThumbIcon: string = 'ico_radio_button';
  @Input() inactiveThumbIcon: string = 'ico_radio_button_inactive';
  @Input() activeColorIcon: string = 'info-5';
  @Input() inactiveColorIcon: string = 'neutral-4';
  @Input() isDisabled?: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleSelected() {
    this.onClick.emit();
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
}
