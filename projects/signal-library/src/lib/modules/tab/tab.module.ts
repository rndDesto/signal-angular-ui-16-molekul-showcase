import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalTabComponent, SignalTabcontentComponent } from '../../components';
import { SignalTypographyModule } from '../typography/typography.module';


@NgModule({
  declarations: [SignalTabComponent,SignalTabcontentComponent],
  imports: [
    CommonModule,
    SignalTypographyModule
  ],
  exports:[SignalTabComponent, SignalTabcontentComponent],

})
export class SignalTabModule { }
