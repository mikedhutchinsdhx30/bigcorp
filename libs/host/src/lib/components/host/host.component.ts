import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';
import { IDateRange } from '../date-range-picker/date-range-picker.component';

@Component({
  selector: 'bigcorp-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.less']
})
export class HostComponent implements OnInit {
  model: IDateRange;
  otherModel: IDateRange;
  public myForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.model = { startDate: new Date('04/14/1973'), endDate: new Date('04/14/2019') }
    this.otherModel = { startDate: new Date('04/14/1973'), endDate: new Date('04/14/2019') }
    this.myForm = this.fb.group({
      otherModel: [ {startDate: new Date('04/14/1973'), endDate: new Date('04/15/2019')}]
    })
  }

  ngOnInit() {
  }


}
