export interface Question {
  id: string;
  questionNumber: number;
  optional: {
    mode: string;
    subquestion?: boolean;
    definition?: boolean;
    controls?: [{
      type: string;
      [param: string]: any;
    }];
  };
  label: string;
  questionType: {
    typeName: string;
  };
}
