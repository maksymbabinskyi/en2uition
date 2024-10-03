import { Component, Input, OnInit } from '@angular/core';
import { FormControlOption } from '../form-control-option';
import { FormControl } from '@angular/forms';

import { v4 as uuid } from 'uuid';

@Component({
  selector: 'e2-checkbox-option',
  template: `
    <div class="b-form-controller-line">
      <div class="b-form-controller-line__item">
        <div class="-ol-checkbox">
          <input type="checkbox" [id]="id" [checked]="isChecked()" (change)="onChange($event.target.checked)" class="-ol-checkbox__input">
          <div class="-ol-checkbox__trigger"></div>
        </div>
      </div>
      <div
        class="b-form-controller-line__item b-form-controller-line__item_text b-form-controller-line__item_last">
        <label [attr.for]="id" class="b-form-controller-line__text-2">{{option.label}}</label>
      </div>
    </div>
  `,
  styles: [':host {display: block;}'],
})
export class CheckboxOptionComponent implements OnInit {

  @Input()
  option: FormControlOption;

  @Input()
  control: FormControl;

  id = uuid();

  constructor() {
  }

  ngOnInit() {
  }

  isChecked() {
    return this.control.value && this.control.value.indexOf(this.option.value) > -1;
  }

  onChange(checked: boolean) {
    const values = this.control.value ? [...this.control.value] : [];

    if (checked) {
      values.push(this.option.value);
    } else {
      values.splice(values.indexOf(this.option.value), 1);
    }

    this.control.setValue(values.length > 0 ? values : null);
  }
}
