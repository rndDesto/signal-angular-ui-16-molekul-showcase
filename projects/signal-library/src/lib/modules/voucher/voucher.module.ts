import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalVoucherComponent } from '../../components';
import { SignalIconModule } from '../icon/icon.module';
import { SignalTypographyModule } from '../typography/typography.module';

@NgModule({
  declarations: [SignalVoucherComponent],
  imports: [
    CommonModule,
    SignalIconModule,
    SignalTypographyModule
  ],
  exports:[SignalVoucherComponent]
})
export class SignalVoucherModule { }
