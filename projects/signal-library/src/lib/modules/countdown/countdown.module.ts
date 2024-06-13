import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalCountdownComponent } from '../../components';
import { SignalTypographyModule } from '../typography/typography.module';

@NgModule({
  declarations: [SignalCountdownComponent],
  imports: [
    CommonModule,
    SignalTypographyModule
  ],
  exports:[SignalCountdownComponent]
})
export class SignalCountdownModule { }
