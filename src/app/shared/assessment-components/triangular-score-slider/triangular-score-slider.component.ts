import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { noUiSlider, wNumb } from '../../../vendor';
import { AppService } from '../../../app.service';

export interface TriangularScore {
  I: string;
  C: string;
  P: string;
}

const SLIDER_OPTIONS = {
  connect: [true, false],
  step: 1,
  padding: [1, 0],
  direction: 'rtl',
  range: {
    'min': -1,
    'max': 5
  },
  ariaFormat: wNumb({
    decimals: 0
  }),
  format: wNumb({
    decimals: 0
  })
};

@Component({
  selector: 'e2-triangular-score-slider',
  template: `
    <div class="b-options-triangle__slider">
      <div class="b-options-triangle__label">
        <div class="b-options-triangle__label-value" [class.b-options-triangle__label-value_low]="getHighOrLow(intimacySlider) === 'LOW'">{{getHighOrLow(intimacySlider)}}</div>
        <div class="b-options-triangle__label-name b-options-triangle__label-name_last">Intimacy</div>
      </div>
      <div class="b-options-triangle__label">
        <div class="b-options-triangle__label-name">Commitment</div>
        <div class="b-options-triangle__label-value b-options-triangle__label-value_last" [class.b-options-triangle__label-value_low]="getHighOrLow(commitmentSlider) === 'LOW'">{{getHighOrLow(commitmentSlider)}}</div>
      </div>
      <div class="b-options-triangle__label">
        <div class="b-options-triangle__label-name">Passion</div>
        <div class="b-options-triangle__label-value b-options-triangle__label-value_last" [class.b-options-triangle__label-value_low]="getHighOrLow(passionSlider) === 'LOW'">{{getHighOrLow(passionSlider)}}</div>
      </div>

      <div class="b-options-triangle__circle">
        <div class="e2-slider e2-slider--triangle-slider" #intimacySlider [attr.disabled]="disabled || undefined"></div>
        <div class="e2-slider e2-slider--triangle-slider" #commitmentSlider [attr.disabled]="disabled || undefined"></div>
        <div class="e2-slider e2-slider--triangle-slider" #passionSlider [attr.disabled]="disabled || undefined"></div>
        <img src="assets/images/Diagramm.png" alt="" class="w-100">
      </div>
    </div>
  `,
  host: {class: 'e2-triangle_slider'},
  styleUrls: ['./triangular-score-slider.component.scss']
})
export class TriangularScoreSliderComponent implements AfterViewInit {

  @Input()
  disabled = false;

  @Input()
  intimacyValue = 5;

  @Input()
  commitmentValue = 5;

  @Input()
  passionValue = 5;

  @Output()
  update = new EventEmitter<TriangularScore>();

  @ViewChild('intimacySlider')
  intimacySlider;

  @ViewChild('commitmentSlider')
  commitmentSlider;

  @ViewChild('passionSlider')
  passionSlider;

  constructor(private appService: AppService, private cdr: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    if (this.appService.isBrowser()) {
      this.init();
    }
  }

  private init() {
    const intimacyUiSlider = noUiSlider.create(this.intimacySlider.nativeElement, {
      ...SLIDER_OPTIONS,
      orientation: 'vertical',
      start: [this.intimacyValue]
    });
    const commitmentUiSlider = noUiSlider.create(this.commitmentSlider.nativeElement, {
      ...SLIDER_OPTIONS,
      start: [this.commitmentValue]
    });
    const passionUiSlider = noUiSlider.create(this.passionSlider.nativeElement, {
      ...SLIDER_OPTIONS,
      direction: 'ltr',
      start: [this.passionValue]
    });

    const sliders = [intimacyUiSlider, commitmentUiSlider, passionUiSlider];

    sliders.forEach(slider => slider.on('update', () => this.valueUpdated()));

    setTimeout(() => {
      this.valueUpdated();
    });
  }

  private valueUpdated() {
    this.cdr.detectChanges();

    this.update.emit({
      I: this.map('I', this.intimacySlider.nativeElement.noUiSlider),
      C: this.map('C', this.commitmentSlider.nativeElement.noUiSlider),
      P: this.map('P', this.passionSlider.nativeElement.noUiSlider)
    });
  }

  private map(type: 'I' | 'C' | 'P', uiSlider) {
    return `${type}${uiSlider.get() < 3 ? 'L' : 'H'}`;
  }

  getHighOrLow(slider: any) {
    if (!slider.noUiSlider) {
      return;
    }

    return slider.noUiSlider.get() < 3 ? 'LOW' : 'HIGH';
  }
}
