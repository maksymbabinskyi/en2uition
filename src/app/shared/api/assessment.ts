export interface Assessment {
  areas: {
    label: string;
    assessment: number;
  }[]
}

export interface LevelAssessment extends Assessment {
  level: number;
  topics: Assessment[]
}

export interface RelationshipAssessment {
  levels: LevelAssessment[];
}
