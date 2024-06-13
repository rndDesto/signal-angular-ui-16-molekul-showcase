import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'signal-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit {
  @Input() open:boolean = false
  @Input() size:string = '3';
  @Input() rounded:string = '3';
  @Input() overlay:string = '1';
  @Input() space:string = '1';
  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  handleClose(){
    this.onClose.emit()
  }


  // indices: number[] = Array.from({ length: 1000 }, (_, index) => index + 1);
  getSizeModal(): { [key: string]: boolean } {
    return {
      [`size-${this.size}`]: true,
      [`space-${this.space}`]: true,
      [`modal-rounded-${this.rounded}`]: true,
    };
  }
  getOverlayModal(): { [key: string]: boolean } {
    return {
      [`overlay-${this.overlay}`]: true,
    };
  }




}
