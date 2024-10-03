import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControlComponentBase } from '../form-control-component-base';
import { QuestionControlComponent } from '../question-control-component.decorator';
import { Util } from '../../util/util';

@Component({
  selector: 'e2-yesno',
  template: `
    <div class="-ol-row-input -ol-row-input_m_b_xl" [class.-ol-row-input_last]="control.last" *ngIf="label">
      <div class="b-questionary__form-line">
        <div class="b-questionary__form-line-inner b-questionary__form-line-inner_space_lg_mb">
          <div class="b-questionary__form-line-item b-questionary__form-line-item_text">
            <p class="b-form-controller-line__text-2">{{getLabel(label, stage)}}</p>
          </div>
          <div class="b-questionary__form-line-item">
            <div class="b-questionary__form-options">
              <div class="b-questionary__form-options-inner">
                <div class="b-questionary__form-option" [class.b-questionary__form-option_active]="selected">
                  <button class="b-questionary__form-option-inner" (click)="yesnoChanged(true)">
                    <span class="b-questionary__form-option-text">Yes</span>
                  </button>
                </div>
                <div class="b-questionary__form-option" [class.b-questionary__form-option_active]="!selected">
                  <button class="b-questionary__form-option-inner" (click)="yesnoChanged(false)">
                    <span class="b-questionary__form-option-text">No</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div *ngIf="!label">
      <e2-radio class="d-flex justify-content-center align-items-center" [options]="YESNO_OPTIONS" [control]="control"
                (onChange)="yesnoChanged($event)"></e2-radio>
    </div>
  `,
})
@QuestionControlComponent({
  type: 'YesNo',
  inputMappingFn: ((questionDescription, controlConfiguration, index) => {
    return {
      label: questionDescription.control && questionDescription.control[index] && questionDescription.control[index].label
    };
  }),
  answerFormatFn: (questionDescription, answer, stage) => {
    answer = answer.length > 0 ? answer : [answer];

    return answer.map((a, index) => {
      return {label: questionDescription.control && FormControlComponentBase.getLabel(questionDescription.control[index].label, stage), value: a ? 'yes' : 'no'};
    });
  },
  getStatus: value => Util.getStatus(value)
})

export class YesnoComponent extends FormControlComponentBase implements OnInit {

  @Input()
  label: string;

  @Output()
  onChange = new EventEmitter<any>();

  YESNO_OPTIONS = [{label: 'Yes', value: 1}, {label: 'No', value: 0}];

  selected;

  getLabel = FormControlComponentBase.getLabel;

  constructor() {
    super();
  }

  ngOnInit() {
  }

  yesnoChanged(value) {
    this.selected = value;
    this.onChange.next(value);
  }
}
