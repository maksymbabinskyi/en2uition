import { Component, Input, OnInit } from '@angular/core';
import { QuestionControlComponent } from '../question-control-component.decorator';
import { FormControlComponentBase } from '../form-control-component-base';
import { Util } from '../../util/util';

@Component({
  selector: 'e2-typein',
  template: `
    <div class="b-questionary__form-inner b-questionary__form-inner_center_tb">
      <div class="b-questionary__form-input">
        <div class="-ol-input-wrap d-flex justify-content-center flex-column align-items-center">
          <label for="" class="e2-h6 px-0 e2-text_center e2-md-text_left pb-3 pb-lg-0 my-3" *ngIf="label">{{label}}</label>
          <input class="-ol-input" type="number" [formControl]="control" max="100">
        </div>
      </div>
      <p class="-ol-input-subtext d-flex justify-content-center" *ngIf="hint">* {{hint}}</p>
    </div>
  `,
  styles: [':host {width: 100%}']
})
@QuestionControlComponent({
  type: 'TypeIn',
  inputMappingFn: ((questionDescription, controlConfiguration, index) => {
    return {
      hint: questionDescription.control && questionDescription.control.hint,
      label: questionDescription.control && questionDescription.control[index] && questionDescription.control[index].label
    };
  }),
  answerFormatFn: (questionDescription, answer, stage) => {
    answer = answer.length > 0 ? answer : [answer];

    return answer.map((a, index) => {
      return {label: FormControlComponentBase.getLabel(questionDescription.control && questionDescription.control[index] && questionDescription.control[index].label, stage), value: a || answer};
    });
  },
  getStatus: value => Util.getStatus(value)
})
export class TypeinComponent extends FormControlComponentBase implements OnInit {

  @Input()
  label: string;

  @Input()
  hint: string;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
