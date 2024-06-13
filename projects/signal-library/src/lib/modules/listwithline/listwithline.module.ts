import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalListwithlineComponent } from '../../components';
import { SignalIconModule } from '../icon/icon.module';

@NgModule({
  declarations: [SignalListwithlineComponent],
  imports: [
    CommonModule,
    SignalIconModule
  ],
  exports:[SignalListwithlineComponent]
})
export class SignalListwithlineModule { }
