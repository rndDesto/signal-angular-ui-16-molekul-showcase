import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalTypographyModule } from '../typography/typography.module';
import { SignalInputBasicComponent, SelectBasicComponent, SignalCheckboxComponent, SignalRadioComponent, SignalSwitchComponent,  SignalRangeComponent, SignalTextareaComponent, SignalOtpComponent, SignalProgressBarComponent, SignalSelectcomboComponent, SignalUploadComponent } from '../../components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignalIconModule } from '../icon/icon.module';
import { SignalLabelModule } from '../label/label.module';
import { NumSeparatorPipe } from '../../pipes';
import { KeysPipe } from '../../pipes/keys';

@NgModule({
  declarations: [
    SignalInputBasicComponent,
    SelectBasicComponent,
    SignalCheckboxComponent, 
    SignalRadioComponent, 
    SignalSwitchComponent,
    SignalRangeComponent,
    SignalTextareaComponent,
    SignalOtpComponent,
    SignalProgressBarComponent,
    SignalSelectcomboComponent,
    SignalUploadComponent
  ],
  imports: [
    CommonModule,
    SignalTypographyModule,
    FormsModule,
    ReactiveFormsModule,
    SignalIconModule,
    SignalLabelModule,
    NumSeparatorPipe
  ],
  exports:[
    SignalInputBasicComponent,
    SelectBasicComponent,
    FormsModule,
    SignalCheckboxComponent,
    SignalRadioComponent,
    SignalSwitchComponent,
    SignalRangeComponent,
    SignalTextareaComponent,
    ReactiveFormsModule,
    SignalOtpComponent,
    SignalProgressBarComponent,
    SignalSelectcomboComponent,
    SignalUploadComponent,
    SignalIconModule
  ],
  providers:[KeysPipe]
})
export class SignalFormModule { }
