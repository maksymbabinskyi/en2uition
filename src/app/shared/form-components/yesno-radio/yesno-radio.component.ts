import { Component, OnInit } from '@angular/core';
import { QuestionControlComponent } from '../question-control-component.decorator';
import { FormControlComponentBase } from '../form-control-component-base';
import { FormControl, FormGroup } from '@angular/forms';
import { FormControlOption } from '../form-control-option';

@Component({
  selector: 'e2-yesno-radio',
  template: `
    <div class="b-questionary__form-inner b-questionary__form-inner_center_mb">
      <e2-radio class="d-flex justify-content-center align-items-center" [options]="YESNO_OPTIONS" [control]="control.get('yesno')"
        (onChange)="yesnoChanged($event)"></e2-radio>

      <div class="e2-form_field mt-5" *ngIf="options.length > 0">
        <p class="e2-fw_semibold e2-text_uppercase pb-2 e2-text_center" *ngIf="label">{{label[stage]}}</p>
        <e2-radio [options]="options" [control]="control.get('radio')" [columns]="columns"></e2-radio>
      </div>
    </div>
  `
})
@QuestionControlComponent({
  type: 'YesNo_Radio',
  inputMappingFn: (questionDescription => {
    return {
      yesOptions: questionDescription.control.yes.options.map((option, value) => {
        return {label: option, value};
      }),
      noOptions: questionDescription.control.no.options.map((option, value) => {
        return {label: option, value};
      }),
      yesLabel: questionDescription.control.yes.label,
      noLabel: questionDescription.control.no.label,
      columns: questionDescription.control.columns
    };
  }),
  controlCreatorFn: (question => {
    return new FormGroup({
      yesno: new FormControl(),
      radio: new FormControl()
    });
  }),
  answerFormatFn: (questionDescription, answer) => {
    let value;

    if (answer.yesno) {
      value = questionDescription.control.yes.options[answer.radio];
    }

    return [{value}];
  },
  getStatus: value => {
    if (value.yesno === 0) {
      return 1;
    }

    if (value.yesno === 1) {
      if (value.radio != null) {
        return 1;
      } else {
        return 0;
      }
    }

    return -1;
  }
})
export class YesnoRadioComponent extends FormControlComponentBase implements OnInit {

  yesOptions: FormControlOption[];
  noOptions: FormControlOption[];
  yesLabel: { me: string, partner: string };
  noLabel: { me: string, partner: string };

  options: FormControlOption[];
  label: { me: string, partner: string };
  YESNO_OPTIONS = [{label: 'Yes', value: 1}, {label: 'No', value: 0}];

  constructor() {
    super();
  }

  ngOnInit() {
    this.yesnoChanged(this.control.get('yesno').value);
  }

  yesnoChanged(yes: boolean) {
    if (yes) {
      this.options = this.yesOptions;
      this.label = this.yesLabel;
    } else {
      this.options = this.noOptions;
      this.label = this.noLabel;
    }
  }
}
