import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { QUESTION_CONTROL_COMPONENT_METADATA_KEY, QuestionControlComponentConfiguration } from './question-control-component.decorator';
import { FormControlComponentBase } from './form-control-component-base';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Question } from '../api/question';
import { QUESTION_DESCRIPTIONS } from '../../registered/questionnaire/questionnaire';

import { formComponents } from './';

@Injectable({
  providedIn: 'root'
})
export class FormComponentsService {

  constructor(private cfr: ComponentFactoryResolver, private fb: FormBuilder) {
  }

  createQuestionControlComponent(question: Question, control: AbstractControl, container: ViewContainerRef): ComponentRef<FormControlComponentBase>[] {
    const Component = this.getComponentByType(question.questionType.typeName);
    const componentRefs = [];

    const controlConfigurations: any[] = question.optional.controls || [{}];
    controlConfigurations.forEach((controlConfiguration, index) => {
      const factory: ComponentFactory<FormControlComponentBase> = this.cfr.resolveComponentFactory(Component);
      const componentRef: ComponentRef<FormControlComponentBase> = container.createComponent(factory);
      componentRefs.push(componentRef);

      componentRef.instance.control = controlConfigurations.length === 1 ? control : (control as FormArray).at(index);
      componentRef.instance.control['last'] = index === controlConfigurations.length - 1;

      this.mapInputs(question, componentRef, controlConfiguration, index);
    });

    return componentRefs;
  }

  createFormGroup(question: Question): FormGroup {
    const Component = this.getComponentByType(question.questionType.typeName);

    const formGroup = this.fb.group({
      me: this.createControl(question, Component),
    });

    if (question.optional.subquestion) {
      formGroup.addControl('mePast', this.createControl(question, Component));
    }

    if (question.optional.mode === 'D') {
      if (question.optional.subquestion) {
        formGroup.addControl('partnerPast', this.createControl(question, Component));
      }
      formGroup.addControl('partner', this.createControl(question, Component));
    }

    return formGroup;
  }

  getQuestionControlComponentMetadata(typeName: string): QuestionControlComponentConfiguration {
    return Reflect.getMetadata(QUESTION_CONTROL_COMPONENT_METADATA_KEY, this.getComponentByType(typeName));
  }

  private mapInputs(question: Question, componentRef: ComponentRef<any>, controlConfiguration, index: number) {
    const Component = this.getComponentByType(question.questionType.typeName);
    const questionFormControlConfiguration: QuestionControlComponentConfiguration = Reflect.getMetadata(QUESTION_CONTROL_COMPONENT_METADATA_KEY, Component);

    if (!questionFormControlConfiguration.inputMappingFn) {
      return;
    }

    const inputs = questionFormControlConfiguration.inputMappingFn(QUESTION_DESCRIPTIONS[question.label], controlConfiguration, index);

    for (const inputKey in inputs) {
      componentRef.instance[inputKey] = inputs[inputKey];
    }
  }

  private createControl(question: Question, Component): AbstractControl {
    const questionFormControlConfiguration: QuestionControlComponentConfiguration = Reflect.getMetadata(QUESTION_CONTROL_COMPONENT_METADATA_KEY, Component);

    return questionFormControlConfiguration.controlCreatorFn(question);
  }

  private getComponentByType(typeName: string) {
    return formComponents.find(c => {
      const questionFormControlConfiguration: QuestionControlComponentConfiguration = Reflect.getMetadata(QUESTION_CONTROL_COMPONENT_METADATA_KEY, c);
      return questionFormControlConfiguration && questionFormControlConfiguration.type === typeName;
    });
  }
}
