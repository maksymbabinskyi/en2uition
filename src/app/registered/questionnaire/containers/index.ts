import { LevelComponent } from './level/level.component';
import { QuestionComponent } from './question/question.component';
import { AnswersComponent } from './answers/answers.component';

export const containers: any[] = [LevelComponent, QuestionComponent, AnswersComponent];
export const entryComponents: any[] = [QuestionComponent];

export * from './level/level.component';
export * from './question/question.component';
export * from './answers/answers.component';
