import { Component, ElementRef, Input, ViewChild, AfterViewInit, HostListener } from '@angular/core';

type PositionConfig = {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}

@Component({
  selector: 'signal-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class SignalTooltipComponent implements AfterViewInit {
  @ViewChild('tooltipTrigger') tooltipTrigger!: ElementRef;
  @ViewChild('tooltipContent') tooltipContent!: ElementRef; // Add reference to tooltip content element
  @Input() position: string = 'right';
  @Input() arrow: string = '';
  @Input() positionConfig?: PositionConfig | null = null;

  constructor(
    private eRef: ElementRef
  ) { }

  posL: number = 0;
  posB: number = 0;
  tooltipShow: boolean = false;

  ngAfterViewInit(): void {
    this.measureContent();
  }

  measureContent(): void {
    const triggerWidth = this.tooltipTrigger.nativeElement.firstElementChild.offsetWidth;
    const triggerHeight = this.tooltipTrigger.nativeElement.firstElementChild.offsetHeight;

    this.posL = triggerWidth;
    this.posL = triggerHeight;
  }

  getTooltipPosition(): { [key: string]: boolean } {
    return {
      [`position-${this.position}`]: true,
      [`arrow-${this.arrow}`]: true,
    };
  }

  hideTooltip() {
    console.log('hideTooltip');
    this.tooltipShow = false;
  }

  showTooltips() {
    this.tooltipShow = true;
  }

  @HostListener('document:click', ['$event'])
  clickout(event: MouseEvent) {
    if (!this.eRef.nativeElement.contains(event.target as Node)) {
      // this.showTooltip = false;
      // this.showClicked = false;
this.hideTooltip();
      console.log('sss')
    }
  }
}
