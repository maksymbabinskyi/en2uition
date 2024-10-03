import { Component, OnInit } from '@angular/core';
import { QuestionControlComponent } from '../question-control-component.decorator';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { FormControlOption } from '../form-control-option';
import { FormControlComponentBase } from '../form-control-component-base';
import { Util } from '../../util/util';

@Component({
  selector: 'e2-height',
  template: `
  <div class="b-questionary__form-in-row b-questionary__form-in-row_center b-questionary__form-in-row_space_horiz_xs">
    <div class="b-questionary__form-in-row-item">
      <e2-typein [control]="control.get('typein.0')"></e2-typein>
    </div>
    <div class="b-questionary__form-in-row-item">
      <e2-typein [control]="control.get('typein.1')"></e2-typein>
    </div>
    <div class="b-questionary__form-in-row-item">
      <e2-dropdown [options]="dropdownOptions" [control]="control.get('dropdown')" (change)="setDropdown($event)"></e2-dropdown>
    </div>
  </div>
  `
})
@QuestionControlComponent({
  type: 'Height',
  controlCreatorFn: (question => {
    return new FormGroup({
      typein: new FormArray([new FormControl(), new FormControl()]),
      dropdown: new FormControl(0)
    });
  }),
  answerFormatFn: (questionDescription, answer) => {
    let value;

    if (answer.typein[0] && answer.typein[1]) {
      value = answer.dropdown ? `${answer.typein[0]} ft ${answer.typein[1]} in` : `${answer.typein[0]}${answer.typein[1]} cm`;
    }

    return [{value}];
  },
  getStatus: value => Util.getStatus(value.typein[0] || value.typein[1])
})
export class HeightComponent extends FormControlComponentBase implements OnInit {

  dropdownOptions: FormControlOption[] = [
    {label: 'm, cm', value: 0},
    {label: 'ft, in', value: 1}
  ];

  value = 0;

  constructor() {
    super();
  }

  ngOnInit() {
  }

  setDropdown(value) {
    if (typeof value === 'number') {
      this.value = value;
    }
  }
}
