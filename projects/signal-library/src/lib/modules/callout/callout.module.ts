import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalTypographyModule } from '../typography/typography.module';
import { CalloutComponent } from '../../components/callout/callout.component';
import { SignalIconModule } from '../icon/icon.module';

@NgModule({
  declarations: [CalloutComponent],
  imports: [
    CommonModule,
    SignalTypographyModule,
    SignalIconModule
  ],
  exports:[CalloutComponent]
})
export class SignalCalloutModule { }
