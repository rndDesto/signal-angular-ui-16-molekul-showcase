import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'signal-snackbar',
  templateUrl: './snackbar.component.html'
})
export class SnackbarComponent implements OnInit {

  constructor() {}


  ngOnInit(): void {
  }

  @Input() open:boolean = true
  @Input() sticky:boolean = true
  @Input() position?:string = 'top-start'
  @Input() color?:string = 'primary'




  getSnackbarWrapper(): { [key: string]: boolean } {
    return {
      [`signal-overlay`]: this.sticky,
    };
  }

  getStickyPos(): { [key: string]: boolean } {
    return {
      [`overlay-wrapper ${this.position}`]: true,
    };
  }

  getColor(): { [key: string]: boolean } {
    return {
      [`snackbar-color-${this.color}`]: true,
    };
  }

  getWidth(): { [key: string]: boolean } {
    return {
      ['overlay-container']:true,
      [`signal-snackbar-width`]: this.sticky,
    };
  }

}
