import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalTypographyModule } from '../typography/typography.module';
import { PaginationComponent } from '../../components';
import { SignalIconModule } from '../icon/icon.module';

@NgModule({
  declarations: [PaginationComponent],
  imports: [
    CommonModule,
    SignalTypographyModule,
    SignalIconModule
  ],
  exports:[PaginationComponent]
})
export class SignalPaginationModule { }
