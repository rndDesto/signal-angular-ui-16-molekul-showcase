import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalTypographyModule } from '../typography/typography.module';
import { StepperComponent } from '../../components/stepper/stepper.component';
import { SignalIconModule } from '../icon/icon.module';

@NgModule({
  declarations: [StepperComponent],
  imports: [
    CommonModule,
    SignalTypographyModule,
    SignalIconModule
  ],
  exports:[StepperComponent]
})
export class SignalStepperModule { }
