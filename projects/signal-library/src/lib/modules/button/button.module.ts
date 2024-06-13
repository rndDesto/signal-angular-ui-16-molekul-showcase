import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../components';
import { SignalIconModule } from '../icon/icon.module';



@NgModule({
  declarations: [
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    SignalIconModule
  ],
  exports:[
    ButtonComponent
  ]
})
export class SignalButtonModule { }
