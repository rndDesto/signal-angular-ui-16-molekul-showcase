import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipsComponent } from '../../components';
import { SignalIconModule } from '../icon/icon.module';
import { SignalTypographyModule } from '../typography/typography.module';

@NgModule({
  declarations: [ChipsComponent],
  imports: [
    CommonModule,
    SignalIconModule,
    SignalTypographyModule
  ],
  exports:[ChipsComponent]
})
export class SignalChipsModule { }
