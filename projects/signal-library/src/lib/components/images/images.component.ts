import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'signal-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ImagesComponent implements OnInit {
  @Input() image: string = 'https://via.placeholder.com/150';
  @Input() width: string = '100%';
  @Input() height: string = '100%';
  @Input() alt: string = 'placeholder';
  @Input() fit: string = 'contain | cover ';
  @Input() rounded: string = '';
  @Input() roundedSize: string = 'lg';
  @Input() styles?: any = null;

  constructor() { }

  ngOnInit(): void {
  }

  getImagesClass(): { [key: string]: boolean } {
    return {
      [`image-fit-${this.fit}`]: true,
      [`border-radius-${this.rounded}-${this.roundedSize}`]: true,
    };
  }

  mergeStyles(): { [key: string]: string } {
    let mergedStyles: { [key: string]: string } = {
      'width': this.width,
      'height': this.height,
    };


    if (this.styles) {
      mergedStyles = { ...mergedStyles, ...this.styles };
    }

    return mergedStyles;
  }

}
