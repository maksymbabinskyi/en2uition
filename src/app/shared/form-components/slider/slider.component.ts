import { Component, ElementRef, HostListener, Input, Renderer2, ViewChild, OnInit } from '@angular/core';
import { QuestionControlComponent } from '../question-control-component.decorator';
import { FormControlComponentBase } from '../form-control-component-base';
import { Util } from '../../util/util';

@Component({
  selector: 'e2-slider',
  template: `
    <div class="-ol-row-input -ol-row-input_m_b_sm -ol-row-input-mb" [class.-ol-row-input_last]="control['last']">
      <div class="b-questionary__form-line">
        <div class="b-questionary__form-line-inner">
          <div class="b-questionary__form-line-item">
            <label for="questionary-2-1" class="b-form-controller-line__text-2">{{getLabel(label, stage)}}</label>
          </div>
          <div class="b-questionary__form-line-item">
            <div class="b-questionary__form-input-sm">
              <div class="-ol-input-wrap">
                <input readonly [value]="getValue()" #input class="-ol-input -ol-input_style_2 -ol-input_number" type="text">
                <button class="-ol-input-number-arrow-up" (click)="update('inc')"></button>
                <button class="-ol-input-number-arrow-down" (click)="update('dec')"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="-ol-input-subtext -ol-input-subtext_first _text_center_mb" *ngIf="hint">{{hint}}</p>
  `,
  styles: [':host {display: block; width: 100%;}']
})
@QuestionControlComponent({
  type: 'Slider',
  inputMappingFn: ((questionDescription, controlConfiguration, index) => {
    return {
      limit: controlConfiguration.max,
      label: questionDescription.control && questionDescription.control[index] && questionDescription.control[index].label
    };
  }),
  answerFormatFn: (questionDescription, answer, stage) => {
    answer = answer.length > 0 ? answer : [answer];

    return answer.map((a, index) => {
      return {label: FormControlComponentBase.getLabel(questionDescription.control[index].label, stage), value: a || answer};
    });
  },
  getStatus: value => Util.getStatus(value)
})
export class SliderComponent extends FormControlComponentBase {

  @Input()
  label: string | { mePast?: string, me?: string, partnerPast?: string, partner?: string };

  @Input()
  hint: string;

  @Input()
  limit: number;

  @ViewChild('input')
  input: ElementRef;

  private focusRemoverTimeout;

  getLabel = FormControlComponentBase.getLabel;

  constructor(private renderer: Renderer2) {
    super();
  }

  @HostListener('wheel', ['$event'])
  private handleScroll = (event) => {
    event.preventDefault();

    const direction = event.deltaY < 0 ? 'inc' : 'dec';
    this.update(direction);
  };

  getValue() {
    return this.control.value === null ? '-' : this.control.value;
  }

  update(order: 'inc' | 'dec') {
    let value = (this.control.value === null ? -1 : this.control.value) + (order === 'inc' ? 1 : -1);

    if (value === -2) {
      value = this.limit;
    } else if (value === -1 || value > this.limit) {
      value = null;
    }

    this.animate();
    this.control.setValue(value);
  }

  private animate() {
    if (this.focusRemoverTimeout) {
      clearTimeout(this.focusRemoverTimeout);
    } else {
      this.renderer.addClass(this.input.nativeElement, 'focus');
    }

    this.focusRemoverTimeout = setTimeout(() => {
      this.renderer.removeClass(this.input.nativeElement, 'focus');
      this.focusRemoverTimeout = null;
    }, 500);
  }
}
