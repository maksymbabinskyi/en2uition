import { Level } from './level';
import { Image } from './image';

export interface Relationship {
  id: string;
  userId: string;
  partnerName: string;
  image: Image;
  aging: number;
  created: Date;
  current: boolean;
  levelsCompleted: number;
  answeredQuestions: number;
  unAnsweredQuestions: number;
  relationshipAdvice: number;
  levels: Level[];
}
