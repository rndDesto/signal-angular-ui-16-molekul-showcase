import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild, OnInit } from '@angular/core';

type markstype = { 
  value: number; 
  label: string; 
}
@Component({
  selector: 'signal-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.css']
})
export class SignalRangeComponent implements OnInit{
  @Input() color: string = 'info-5';
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() lowerVal: number = 0;
  @Input() higherVal: number = 100;
  @Input() mark?: markstype[];

  @Input() label?: string = '';
  @Input() required?: boolean=false;
  @Input() labelWeight?: string = 'regular';
  @Input() labelColor?: string = 'secondary-7';

  // @Input() mark?: markstype[] = [
  //   { value: 20, label: '20%' },
  //   { value: 50, label: '50%' },
  //   { value: 80, label: '80%' },
  // ];

  @Output() onChange = new EventEmitter<{ min: number, max: number }>();
  @Output() clickLeftThumb = new EventEmitter<void>();
  @Output() clickRightThumb = new EventEmitter<void>();

  @ViewChild('rangeTrack') rangeTrack!: ElementRef;
  @ViewChild('leftThumb') leftThumb!: ElementRef;
  @ViewChild('rightThumb') rightThumb!: ElementRef;

  errorMsg: string = '';

  private activeThumb: string | null = null;
  private isDragging = false;

  rangeValue: number = 0;
  nilaiBawah: number = 0;
  nilaiAtas: number = 0;


  ngOnInit(): void {
    this.lowerVal = this.lowerVal || this.calculatePercentage(this.min); 
    this.higherVal = this.higherVal || this.calculatePercentage(this.max);  
    this.nilaiBawah = this.min;
    this.nilaiAtas = this.max;
    this.rangeValue = this.max - this.min;

    if(this.lowerVal !== 0 || this.higherVal !== 100){
      this.onChange.emit({ min: this.valueOfBottom(this.lowerVal), max: this.valueOfUpper(this.higherVal) });
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      const sliderRect = this.rangeTrack.nativeElement.getBoundingClientRect();
      const sliderWidth = sliderRect.width;
      let newPercentage = ((event.clientX - sliderRect.left) / sliderWidth) * 100;
      newPercentage = Math.min(100, Math.max(0, newPercentage));
  
      if (this.activeThumb === 'left') {
        this.lowerVal = Math.min(newPercentage, this.higherVal);

      } else {
        this.higherVal = Math.max(newPercentage, this.lowerVal);
      }
  
      this.onChange.emit({ min: this.valueOfBottom(this.lowerVal), max: this.valueOfUpper(this.higherVal) });
    }
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    this.isDragging = false;
  }

  startDragging(event: MouseEvent, thumb: string): void {
    event.preventDefault();
    this.activeThumb = thumb;
    this.isDragging = true;
  }

  onLeftThumbClick() {
    this.clickLeftThumb.emit();
  }

  onRightThumbClick() {
    this.clickRightThumb.emit();
  }

  getBarClasses(): { [key: string]: boolean } {
    return {
      [`signal-bg-color-${this.color}`]: true,
    };
  }

  calculatePercentage(value: number): number {
    const normalizedValue = (value - this.min) / (this.max - this.min) * 100;
    return normalizedValue;
  }
  
  valueOfBottom(persentase:number) {
      var nilai = this.nilaiBawah + this.rangeValue * (persentase / 100);
      return nilai;
  }
  valueOfUpper(persentase:number) {
    var nilai = this.nilaiAtas - this.rangeValue * ((100 - persentase) / 100);
    return nilai;
}

}
