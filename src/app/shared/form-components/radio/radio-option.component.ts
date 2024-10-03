import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormControlOption } from '../form-control-option';

import { v4 as uuid } from 'uuid';

@Component({
  selector: 'e2-radio-option',
  template: `
    <div class="b-form-controller-line">
      <div class="b-form-controller-line__item">
        <div class="-ol-radio">
          <input type="radio" [id]="id" [name]="id" [checked]="control.value === option.value" (click)="check()" class="-ol-radio__input">
          <div class="-ol-radio__trigger"></div>
        </div>
      </div>
      <div
        class="b-form-controller-line__item b-form-controller-line__item_text b-form-controller-line__item_last">
        <label [attr.for]="id" class="b-form-controller-line__text-2">{{option.label}}</label>
      </div>
    </div>
  `
})
export class RadioOptionComponent implements OnInit {

  @Input()
  option: FormControlOption;

  @Input()
  control: FormControl;

  id = uuid();

  constructor() {
  }

  ngOnInit() {
  }

  check() {
    if (this.control.value === this.option.value) {
      this.control.reset();
    } else {
      this.control.patchValue(this.option.value);
    }
  }
}
