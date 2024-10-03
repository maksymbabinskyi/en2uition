import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { noUiSlider, wNumb } from '../../../../vendor';

const SLIDER_OPTIONS = {
  start: [0],
  connect: [true, false],
  step: 1,
  range: {
    'min': [1],
    'max': [60]
  },
  ariaFormat: wNumb({
    decimals: 0
  }),
  format: wNumb({
    decimals: 0
  })
};

@Component({
  selector: 'e2-level-question-slider',
  template: `
    <div class="b-questionary__state-slider-wrapper-item b-questionary__state-slider-wrapper-item_stretch">
      <div class="noUi-progress" #slider></div>
    </div>
    <div class="b-questionary__state-slider-wrapper-item">
      <p class="b-questionary__state-total-text" *ngIf="questionNumber != 60">60</p>
    </div>
  `,
  host: {
    class: 'b-questionary__state-slider-wrapper'
  }
})
export class LevelQuestionSliderComponent implements OnInit, OnChanges {

  @Input()
  questionNumber;

  @Output()
  questionNumberChanged = new EventEmitter();

  @ViewChild('slider')
  slider: ElementRef;

  constructor() {
  }

  ngOnInit() {
    const slider = noUiSlider.create(this.slider.nativeElement, SLIDER_OPTIONS);

    slider.on('change', () => this.valueUpdated());
  }

  ngOnChanges(): void {
    if (!this.questionNumber) {
      return;
    }

    setTimeout(() => {
      this.slider.nativeElement.noUiSlider.set(this.questionNumber);
    });
  }

  private valueUpdated() {
    this.questionNumberChanged.emit(this.slider.nativeElement.noUiSlider.get());
  }

}
