import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalTypographyModule } from '../typography/typography.module';
import { SignalIconModule } from '../icon/icon.module';
import { SnackbarComponent } from '../../components';

@NgModule({
  declarations: [SnackbarComponent],
  imports: [
    CommonModule,
    SignalTypographyModule,
    SignalIconModule
  ],
  exports:[SnackbarComponent]
})
export class SignalSnackbarModule { }
