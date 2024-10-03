import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { noUiSlider, wNumb } from '../../../vendor';
import { AppService } from '../../../app.service';

const SLIDER_OPTIONS = {
  connect: [false, true],
  step: 1,
  range: {
    'min': 0,
    'max': 5
  },
  pips: {
    mode: 'steps',
    values: 6,
    density: 100
  },
  ariaFormat: wNumb({
    decimals: 0
  }),
  format: wNumb({
    decimals: 0
  })
};

@Component({
  selector: 'e2-relationship-score-slider',
  template: `
    <div class="e2-slider e2-slider--score-slider" [ngClass]="'e2-slider_' + direction" #slider [attr.readonly]="readonly">
      <div class="e2-slider_value" (click)="reset()">{{value}}</div>
      <div class="e2-slider_text">{{status}}</div>
    </div>
  `,
  styles: [':host {display: block; position: relative;}']
})
export class RelationshipScoreSliderComponent implements OnInit {

  @Input()
  direction = 'ltr';

  @Input()
  set disabled(disabled) {
    if (disabled) {
      this.renderer.setAttribute(this.slider.nativeElement, 'disabled', 'true');
    } else {
      this.renderer.removeAttribute(this.slider.nativeElement, 'disabled');
    }
  }

  @Input()
  readonly: boolean;

  @Input()
  value = 0;

  @Output()
  update = new EventEmitter<{ status: string }>();

  @ViewChild('slider')
  slider: ElementRef;

  status = '';

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2,
              private changeDetectorRef: ChangeDetectorRef,
              private appService: AppService) {
  }

  ngOnInit() {
    if (this.appService.isBrowser()) {
      this.init();
    }
  }

  reset() {
    this.slider.nativeElement.noUiSlider.set(0);
  }

  private init() {
    noUiSlider
      .create(this.slider.nativeElement, {
        ...SLIDER_OPTIONS,
        direction: this.direction,
        start: [this.value]
      })
      .on('update', (values, handle) => {
        this.value = values[handle];

        if (this.value < 3) {
          this.status = 'low';
        } else {
          this.status = 'high';
        }

        this.changeDetectorRef.markForCheck();
        this.update.emit({status: this.status});
      });
  }
}
