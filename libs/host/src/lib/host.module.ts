import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DateRangePickerComponent } from './components/date-range-picker/date-range-picker.component';
import { HostComponent } from './components/host/host.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatModule } from '../../../mat/src/lib/mat.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatModule,
    ReactiveFormsModule,
    RouterModule.forChild([
       {path: '', pathMatch: 'full', component: HostComponent}
    ])
  ],
  declarations: [DateRangePickerComponent, HostComponent],
  exports: [DateRangePickerComponent, HostComponent]
})
export class HostModule {}
