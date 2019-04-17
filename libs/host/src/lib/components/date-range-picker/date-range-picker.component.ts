import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  FormControl,
  Validator,
  ValidationErrors,
  AbstractControl
} from '@angular/forms';


export interface IDateRange { startDate: Date; endDate: Date; }

@Component({
  selector: 'bigcorp-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateRangePickerComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DateRangePickerComponent),
      multi: true,
    }]
})
export class DateRangePickerComponent implements OnInit, ControlValueAccessor, Validator {
  private _validators = [
    { title: 'required', validator: () => this.isComplete },
    { title: 'invalidRange', validator: ()=> this.isComplete && this.isValidRange },
  ];

  private _range: IDateRange;
  @Input()
    get range(): IDateRange { return this._range; }
    set range(value: IDateRange) { this._range = value; this.update(); }
  @Output() rangeChange: EventEmitter<IDateRange> = new EventEmitter();

  onChange: (o: any) => void = () => {};
  onTouched: (o: any) => void = () => {};

  writeValue(model: IDateRange): void {
    if (!model) return;
    this.range = model;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {

  }



  validate(control: AbstractControl): ValidationErrors {
    const result: any = { };
    this._validators
      .filter(v => !v.validator())
      .forEach(v => result[v.title] = { valid: false })
      ;
    console.warn('---', result)
    return (this.isValid) ? null : result;
  }

  registerOnValidatorChange?(fn: () => void): void {

  }

  get isValid(): boolean {
    return this.isComplete && this.isValidRange;
  }

  get isComplete(): boolean {
    return !!this.range && !!this.range.startDate && !!this.range.endDate;
  }

  get isValidRange(): boolean  {
    return new Date(this.range.endDate) > new Date(this.range.startDate);
  }

  constructor() { }

  private update() {
    this.notify();
  }

  notify() {
    this.onChange(this.range);
    this.onTouched(this.range);

  }

  ngOnInit() {

  }


}
