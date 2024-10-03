import { Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

export class FormControlComponentBase {
  @Input()
  control: AbstractControl;

  @Input()
  stage: string;

  static getLabel(label: any, stage: string) {
    if (typeof label === 'object') {
      return label[stage];
    }

    return label;
  }
}
