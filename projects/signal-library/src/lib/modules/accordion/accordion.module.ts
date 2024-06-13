import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from '../../components';
import { SignalTypographyModule } from '../typography/typography.module';
import { SignalIconModule } from '../icon/icon.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AccordionComponent],
  imports: [
    CommonModule,
    SignalTypographyModule,
    SignalIconModule,
    BrowserAnimationsModule
  ],
  exports:[AccordionComponent]
})
export class SignalAccordionModule { }
