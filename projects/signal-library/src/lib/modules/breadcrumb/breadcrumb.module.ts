import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../../components';
import { SignalTypographyModule } from '../typography/typography.module';

@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [
    CommonModule,
    SignalTypographyModule
  ],
  exports:[BreadcrumbComponent]
})
export class SignalBreadcrumbModule { }
