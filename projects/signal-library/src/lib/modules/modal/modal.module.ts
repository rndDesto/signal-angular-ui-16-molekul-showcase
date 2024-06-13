import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalTypographyModule } from '../typography/typography.module';
import { ModalComponent } from '../../components';

@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    SignalTypographyModule
  ],
  exports:[ModalComponent]
})
export class SignalModalModule { }
