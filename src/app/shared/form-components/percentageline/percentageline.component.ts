import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { noUiSlider, wNumb } from '../../../vendor';
import { QuestionControlComponent } from '../question-control-component.decorator';
import { FormControlComponentBase } from '../form-control-component-base';
import { AbstractControl, FormArray } from '@angular/forms';
import { AppService } from '../../../app.service';

const SLIDER_OPTIONS = {
  start: [0],
  connect: [true, false],
  step: 10,
  range: {
    'min': [0],
    'max': [100]
  },
  pips: {
    mode: 'count',
    values: 2,
    density: 10,
    format: wNumb({
      suffix: '%'
    })
  },
  ariaFormat: wNumb({
    decimals: 0,
    postfix: ' %'
  }),
  format: wNumb({
    decimals: 0
  })
};

@Component({
  selector: 'e2-percentageline',
  template: `
    <div class="e2-form_field">
      <div *ngIf="label">{{label}}</div>
      <div class="b-questionary__form b-questionary__form_style_2">
        <div class="-ol-row-input">
          <div class="noUi-steps" [class._c_primary]="stage.startsWith('me')" [class._c_primary_2]="stage.startsWith('partner')" #slider [attr.disabled]="disabled || undefined"></div>
        </div>
      </div>
    </div>
  `,
  styles: [':host {display: block; width: 100%} [disabled=true] {opacity: 0.5}']
})
@QuestionControlComponent({
  type: 'PercentageLine',
  inputMappingFn: ((questionDescription, controlConfiguration, index) => {
    return {
      label: questionDescription.control && questionDescription.control[index] && questionDescription.control[index].label,
      disabled: controlConfiguration.disabled,
      oppositeTo: controlConfiguration.oppositeTo
    };
  }),
  answerFormatFn: (questionDescription, answer, stage) => {
    answer = answer.length > 0 ? answer : [answer];

    return answer.map((a, index) => {
      return {label: FormControlComponentBase.getLabel(questionDescription.control && questionDescription.control[index].label, stage), value: `${a * 10}%`};
    });
  },
  getStatus: () => 1
})
export class PercentagelineComponent extends FormControlComponentBase implements OnInit {

  @Input()
  label: string;

  @Input()
  disabled = false;

  @Input()
  oppositeTo: number;

  @ViewChild('slider')
  slider: ElementRef;

  constructor(private appService: AppService) {
    super();
  }

  ngOnInit() {
    if (this.appService.isBrowser()) {
      this.init();
    }
  }

  init() {
    const slider = noUiSlider.create(this.slider.nativeElement, SLIDER_OPTIONS);

    this.checkOpposite();

    this.slider.nativeElement.noUiSlider.set(this.control.value * 10);

    if (!this.control.value) {
      this.control.valueChanges.subscribe(value => {
        this.slider.nativeElement.noUiSlider.set(value * 10);
      });
    }

    slider.on('change', () => this.valueUpdated());
  }

  private checkOpposite() {
    if (this.oppositeTo == null) {
      return;
    }

    setTimeout(() => {
      if (!this.control.value) {
        this.control.patchValue(10);
      }
    });

    const oppositeControl: AbstractControl = (this.control.parent as FormArray).at(this.oppositeTo);

    oppositeControl.valueChanges.subscribe(oppositeValue => {
      this.control.patchValue(10 - oppositeValue);
    });
  }

  private valueUpdated() {
    this.control.patchValue(this.slider.nativeElement.noUiSlider.get() / 10);
  }
}
