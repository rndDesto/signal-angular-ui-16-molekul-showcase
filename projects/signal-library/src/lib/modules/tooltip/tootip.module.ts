import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalTooltipComponent } from '../../components';

@NgModule({
  declarations: [SignalTooltipComponent],
  imports: [
    CommonModule,
  ],
  exports:[SignalTooltipComponent]
})
export class SignalTooltipModule { }
