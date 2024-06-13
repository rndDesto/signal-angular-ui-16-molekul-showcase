import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalloutHighlightComponent } from '../../components';
import { SignalIconModule } from '../icon/icon.module';
import { SignalImagesModule } from '../images/images.module';


@NgModule({
  declarations: [CalloutHighlightComponent],
  imports: [
    CommonModule,
    SignalIconModule,
    SignalImagesModule
  ],
  exports:[CalloutHighlightComponent]
})
export class SignalCalloutHighlightModule { }
