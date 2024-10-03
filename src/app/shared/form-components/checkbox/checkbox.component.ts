import { Component, Input, OnInit } from '@angular/core';
import { FormControlComponentBase } from '../form-control-component-base';
import { FormControlOption } from '../form-control-option';
import { QuestionControlComponent } from '../question-control-component.decorator';
import { Util } from '../../util/util';

@Component({
  selector: 'e2-checkbox',
  template: `
    <ng-container *ngIf="columns === 2">
      <div class="b-questionary__form-row" *ngFor="let num of numbers;let i = index;">
        <div class="b-questionary__form-col">
          <e2-checkbox-option class="-ol-row-input -ol-row-input_m_b_sm" [class.-ol-row-input_last]="i === numbers.length - 1" [option]="options[num * 2]" [control]="control"></e2-checkbox-option>
        </div>
        <div class="b-questionary__form-col">
          <e2-checkbox-option class="-ol-row-input -ol-row-input_m_b_sm" [class.-ol-row-input_last]="i === numbers.length - 1" *ngIf="options[num * 2 + 1]" [option]="options[num * 2 + 1]" [control]="control"></e2-checkbox-option>
        </div>
      </div>
    </ng-container>
    <ng-container *ngIf="columns !== 2">
      <e2-checkbox-option class="-ol-row-input -ol-row-input_m_b_sm _block" [class.-ol-row-input_last]="i === options.length - 1 || option.label === 'Yes' || option.label === 'No'" [class.b-questionary__form-in-row-item]="(option.label === 'Yes' && option.value === 1) || (option.label === 'No' && option.value === 0)" [option]="option" [control]="control" *ngFor="let option of options;let i = index;"></e2-checkbox-option>
    </ng-container>
  `
})
@QuestionControlComponent({
  type: 'CheckBox',
  inputMappingFn: (questionDescription => {
    return {
      options: questionDescription.control.options.map((option, value) => {
        return {label: option, value};
      }),
      columns: questionDescription.control.columns
    };
  }),
  answerFormatFn: (questionDescription, answer) => {
    return [{value: answer.map(value => questionDescription.control.options[value]).join(', ')}];
  },
  getStatus: value => Util.getStatus(value)
})
export class CheckboxComponent extends FormControlComponentBase implements OnInit {

  @Input()
  options: FormControlOption[];
  numbers = [];

  constructor() {
    super();
  }

  ngOnInit() {
    for (let i = 0 ; i < this.options.length / 2 ; i ++) {
      this.numbers.push(i);
    }
  }

}
