import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { VoucherDataType } from '../../interfaces/voucher.interface';

@Component({
  selector: 'signal-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.css']
})
export class SignalVoucherComponent implements OnInit {

  @Input() backgroundColor:string = 'info-1'
  @Input() borderSize:string = '1'
  @Input() disabled:boolean = false
  @Input() isSelected:boolean = false
  @Input() data:VoucherDataType = {
    isSelected: false,
    isDisabled: false,
    remainingTime: '0',
    priceDiscount: '0',
    priceMinimum: '0'
  }
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  getVoucherClass(): { [key: string]: boolean } {
    return {
      [`signal-bg-color-info-1`]: this.data.isSelected,
      [`signal-voucher-isSelected`]: this.data.isSelected,
    };
  }

  getVoucherClassDisable(): { [key: string]: boolean } {
    return {
      [`signal-bg-color-secondary-2`]: true,
      [`signal-voucher-disabled`]: true,
    };
  }

  handleSelectedVoucher(event:Event) {
    this.data.isSelected = !this.data.isSelected;
    this.onClick.emit(this.data);
    // this.data.isSelected = !this.data.isSelected;
    console.log("handleSelectedVoucher cmp")
  }
}
