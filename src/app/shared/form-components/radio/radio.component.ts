import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { QuestionControlComponent } from '../question-control-component.decorator';
import { FormControlComponentBase } from '../form-control-component-base';
import { FormControlOption } from '../form-control-option';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Util } from '../../util/util';

@Component({
  selector: 'e2-radio',
  template: `
    <ng-container *ngIf="columns === 2">
      <div class="b-questionary__form-row" *ngFor="let num of numbers;let i = index;">
        <div class="b-questionary__form-col">
          <e2-radio-option class="-ol-row-input -ol-row-input_m_b_sm _block" [class.-ol-row-input_last]="i === numbers.length - 1 || options[num * 2].label === 'Yes'" [class.b-questionary__form-in-row-item]="(options[num * 2].label === 'Yes' && options[num * 2].value === 1) || (options[num * 2].label === 'No' && options[num * 2].value === 0)" [option]="options[num * 2]" [control]="control"></e2-radio-option>
        </div>
        <div class="b-questionary__form-col">
          <e2-radio-option class="-ol-row-input -ol-row-input_m_b_sm _block" *ngIf="options[num * 2 + 1]" [class.-ol-row-input_last]="i === numbers.length - 1 || options[num * 2 + 1].label === 'No'" [class.b-questionary__form-in-row-item]="(options[num * 2 + 1].label === 'Yes' && options[num * 2 + 1].value === 1) || (options[num * 2 + 1].label === 'No' && options[num * 2 + 1].value === 0)" [option]="options[num * 2 + 1]" [control]="control"></e2-radio-option>
        </div>
      </div>
    </ng-container>
    <ng-container *ngIf="columns !== 2">
      <e2-radio-option class="-ol-row-input -ol-row-input_m_b_sm _block" [class.-ol-row-input_last]="i === options.length - 1 || option.label === 'Yes' || option.label === 'No'" [class.b-questionary__form-in-row-item]="(option.label === 'Yes' && option.value === 1) || (option.label === 'No' && option.value === 0)" [option]="option" [control]="control" *ngFor="let option of options;let i = index;"></e2-radio-option>
    </ng-container>
  `,
  host: {class: 'b-questionary__form-inner'}
})
@QuestionControlComponent({
  type: 'Radio',
  inputMappingFn: (questionDescription => {
    return {
      options: questionDescription.control.options.map((option, value) => {
        return {label: option, value};
      }),
      columns: questionDescription.control.columns
    };
  }),
  answerFormatFn: (questionDescription, answer) => {
    return [{value: questionDescription.control.options[answer]}];
  },
  getStatus: value => Util.getStatus(value)
})
export class RadioComponent extends FormControlComponentBase implements OnInit, OnDestroy {

  @Input()
  options: FormControlOption[];

  @Input() columns: number;

  @Output()
  onChange = new EventEmitter<any>();
  numbers = [];

  private unsubscribe$ = new Subject();

  constructor() {
    super();
  }

  ngOnInit() {
    for (let i = 0 ; i < this.options.length / 2 ; i ++) {
      this.numbers.push(i);
    }
    this.control.valueChanges.pipe(takeUntil(this.unsubscribe$)).subscribe(value => this.onChange.emit(value));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
