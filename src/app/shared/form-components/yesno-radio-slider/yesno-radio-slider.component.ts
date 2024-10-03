import { Component, OnInit } from '@angular/core';
import { QuestionControlComponent } from '../question-control-component.decorator';
import { FormControl, FormGroup } from '@angular/forms';
import { FormControlOption } from '../form-control-option';
import { FormControlComponentBase } from '../form-control-component-base';

@Component({
  selector: 'e2-yesno-radio-slider',
  template: `
    <e2-yesno [control]="control.get('yesno')" (onChange)="yesnoChanged($event)"></e2-yesno>

    <e2-radio [options]="options" [control]="control.get('radio')"></e2-radio>

    <e2-slider class="mt-4" [label]="label" [limit]="5" [control]="control.get('slider')" *ngIf="slider"></e2-slider>
  `
})
@QuestionControlComponent({
  type: 'YesNo_Radio_Slider',
  inputMappingFn: (questionDescription => {
    return {
      yesOptions: questionDescription.control.yes.options.map((option, value) => {
        return {label: option, value};
      }),
      noOptions: questionDescription.control.no.options.map((option, value) => {
        return {label: option, value};
      }),
      yesSlider: questionDescription.control.yes.slider,
      noSlider: questionDescription.control.no.slider,
      yesLabel: questionDescription.control.yes.label
    };
  }),
  controlCreatorFn: (question => {
    return new FormGroup({
      yesno: new FormControl(),
      radio: new FormControl(),
      slider: new FormControl()
    });
  }),
  answerFormatFn: (questionDescription, answer) => {
    let value;

    if (answer.yesno) {
      value = `${questionDescription.control.yes.options[answer.radio]} and I rate it ${answer.slider}`;
    }

    return [{value}];
  },
  getStatus: value => {
    if (value.yesno === 0) {
      return 1;
    }

    if (value.yesno === 1) {
      if (value.radio != null && value.slider != null) {
        return 1;
      } else {
        return 0;
      }
    }

    return -1;
  }
})
export class YesnoRadioSliderComponent extends FormControlComponentBase implements OnInit {

  yesOptions: FormControlOption[];
  noOptions: FormControlOption[];

  yesSlider: boolean;
  noSlider: boolean;

  yesLabel: string;

  options: FormControlOption[];
  slider: boolean;
  label: string;

  constructor() {
    super();
  }

  ngOnInit() {
    this.yesnoChanged(this.control.get('yesno').value);
  }

  yesnoChanged(yes: boolean) {
    if (yes) {
      this.options = this.yesOptions;
      this.slider = this.yesSlider;
      this.label = this.yesLabel;
    } else {
      this.options = this.noOptions;
      this.slider = this.noSlider;
    }
  }
}
