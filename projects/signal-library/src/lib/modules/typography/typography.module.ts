import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalBodyComponent, SignalHeadingComponent, SignalTitleComponent } from '../../components/typography';

@NgModule({
  declarations: [SignalHeadingComponent,SignalBodyComponent,SignalTitleComponent],
  imports: [
    CommonModule
  ],
  exports:[SignalHeadingComponent,SignalBodyComponent,SignalTitleComponent]
})
export class SignalTypographyModule { }
