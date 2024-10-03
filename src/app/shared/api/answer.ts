export interface Answer {
  id: string;
  status: boolean;
  questionId: number;
  answer: {
    mePast: any;
    me: any;
    partnerPast: any;
    partner: any;
  };
}
