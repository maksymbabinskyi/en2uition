import { Component, ComponentRef, Input, OnChanges, SimpleChanges, ViewContainerRef } from '@angular/core';
import { Question } from '../../../../shared/api/question';
import { FormGroup } from '@angular/forms';
import { FormComponentsService } from '../../../../shared/form-components/form-components.service';
import { QuestionStage } from '../../containers';
import { FormControlComponentBase } from '../../../../shared/form-components/form-control-component-base';

@Component({
  selector: 'e2-question-stage',
  template: ``,
  styleUrls: ['./question-stage.component.scss']
})
export class QuestionStageComponent implements OnChanges {

  @Input()
  question: Question;

  @Input()
  stage: QuestionStage;

  @Input()
  formGroup: FormGroup;

  private componentRefs: ComponentRef<FormControlComponentBase>[];

  constructor(private viewContainerRef: ViewContainerRef,
              private formComponentsService: FormComponentsService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.question && this.formGroup && this.stage) {
      this.viewContainerRef.clear();

      this.componentRefs = this.formComponentsService.createQuestionControlComponent(
        this.question,
        this.formGroup.get(this.stage),
        this.viewContainerRef);

      this.componentRefs.forEach(componentRef => componentRef.instance.stage = this.stage);
    }
  }

}
