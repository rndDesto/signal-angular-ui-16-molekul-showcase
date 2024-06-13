import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesComponent } from '../../components';

@NgModule({
  declarations: [ImagesComponent],
  imports: [
    CommonModule,
  ],
  exports:[ImagesComponent]
})
export class SignalImagesModule { }
