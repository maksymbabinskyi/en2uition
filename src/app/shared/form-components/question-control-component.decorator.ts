import { Question } from '../api/question';
import { AbstractControl, FormArray, FormControl } from '@angular/forms';
import { QuestionDescription } from '../../registered/questionnaire/questionnaire';
import 'reflect-metadata';

export const QUESTION_CONTROL_COMPONENT_METADATA_KEY = 'QUESTION_CONTROL_COMPONENT';

export interface QuestionControlComponentConfiguration {
  type: string;
  inputMappingFn?: (questionDescription: QuestionDescription, controlConfiguration?: any, index?: number) => { [key: string]: any };
  controlCreatorFn?: (question: Question) => AbstractControl;
  answerFormatFn: (questionDescription: QuestionDescription, answer: any, stage?: string) => { label?: string, value: string }[];
  getStatus: (value: any) => number;
}

export function QuestionControlComponent(config: QuestionControlComponentConfiguration): ClassDecorator {
  return (target) => {
    Reflect.defineMetadata(QUESTION_CONTROL_COMPONENT_METADATA_KEY, {
      ...config,
      controlCreatorFn: config.controlCreatorFn || (question => {
        const controls: any[] = question.optional.controls || [{}];

        return controls.length > 1 ? new FormArray(controls.map(() => new FormControl())) : new FormControl();
      })
    }, target);
  };
}
