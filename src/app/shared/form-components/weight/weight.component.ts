import { Component, OnInit } from '@angular/core';
import { FormControlComponentBase } from '../form-control-component-base';
import { FormControlOption } from '../form-control-option';
import { QuestionControlComponent } from '../question-control-component.decorator';
import { FormControl, FormGroup } from '@angular/forms';
import { Util } from '../../util/util';

@Component({
  selector: 'e2-weight',
  template: `
    <div class="b-questionary__form-in-row b-questionary__form-in-row_center b-questionary__form-in-row_space_horiz_xs">
      <div class="b-questionary__form-in-row-item">
        <e2-typein [control]="control.get('typein')"></e2-typein>
      </div>
      <div class="b-questionary__form-in-row-item">
        <e2-dropdown [options]="dropdownOptions" [control]="control.get('dropdown')"></e2-dropdown>
      </div>
    </div>
  `
})
@QuestionControlComponent({
  type: 'Weight',
  controlCreatorFn: (question => {
    return new FormGroup({
      typein: new FormControl(),
      dropdown: new FormControl(0)
    });
  }),
  answerFormatFn: (questionDescription, answer) => {
    return [{value: `${answer.typein} ${answer.dropdown ? 'lbs' : 'kg'}`}];
  },
  getStatus: value => Util.getStatus(value.typein)
})
export class WeightComponent extends FormControlComponentBase implements OnInit {

  dropdownOptions: FormControlOption[] = [
    {label: 'kg', value: 0},
    {label: 'lbs', value: 1}
  ];

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
