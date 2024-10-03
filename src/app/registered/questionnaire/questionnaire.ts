export interface QuestionDescription {
  title?: {
    mePast?: string,
    me: string,
    partnerPast?: string,
    partner?: string,
  },
  label?: {
    mePast?: string,
    me: string,
    partnerPast?: string,
    partner?: string,
  };
  definition?: { title: string, description: string }[]
  control?: { [key: string]: any }
}

export const TOPIC_DESCRIPTIONS: { [key: string]: string } = {
  l1q1t: `<span class="b-questionary__content-text_major">Did the relationship start with faworable initial conditions?</span>
          <span class="b-questionary__content-text_italic">(such as differences in age, sexual orientation, marital status, education, career, financial status, accommodation, geographical location)</span>`,
  l1q16t: `<span class="b-questionary__content-text_major">Was the relationship obstructed by differences in beliefs</span>
          <span class="b-questionary__content-text_italic">(such as political, religious, family beliefs), <span class="e2-fw_semibold">or by bad habits,</span></span>
          <span class="b-questionary__content-text_italic">(such as shopping, video game addictions) <span class="e2-fw_semibold">or physical and</span></span>
           <p class="e2-fw_semibold">emotional conditions or disabilities?</p>`,
  l1q31t: `<p class="pt-4"><span class="e2-fw_semibold pt-4">First impressions on physical, sexual, social compatibilities?</span> <i class="e2-color_text-primary">(such as first impression on physical appearance, early sexual encounters, acceptance by friends and family and making the relationship official)</i></p>`,
  l1q46t: `<p class="pt-4"><span class="e2-fw_semibold pt-4">Did the first 4 months provide a strong foundation for the relationship?</span> <i class="e2-color_text-primary">(such as communication, sexual intercourse, sharing thoughts and secrets, meeting friends and family, early disagreements and fights)</i></p>`
};

export const QUESTION_DESCRIPTIONS: { [key: string]: QuestionDescription } = {
  l1q1: {
    label: {
      mePast: 'my age was',
      me: 'my age is',
      partnerPast: 'my partner’s age was',
      partner: 'my partner’s age is',
    },
    control: {
      hint: 'enter a whole number of years'
    }
  },
  l1q2: {
    label: {
      mePast: 'my gender was',
      me: 'my gender is',
      partnerPast: 'my partner’s was',
      partner: 'my partner’s is'
    },
    control: {
      options: [
        'female',
        'male',
        'male to female transgender',
        'female to male transgender'
      ]
    }
  },
  l1q3: {
    label: {
      mePast: 'my sexual orientation was',
      me: 'my sexual orientation is',
      partnerPast: 'my partner’s sexual orientation was',
      partner: 'my partner’s sexual orientation is'
    },
    control: {
      options: [
        'straight',
        'gay',
        'bisexual',
        'not sure'
      ]
    }
  },
  l1q4: {
    label: {
      mePast: 'the relationship type I was pursuing',
      me: 'the relationship type I am pursuing',
      partnerPast: 'the relationship type my partner was pursuing',
      partner: 'the relationship type my partner is pursuing'
    },
    definition: [
      {
        title: 'Strictly monogamous',
        description: 'The couple is strictly (physically and emotionally) exclusive to each other, one-on-one (non-sexual) activities with a flirt are not allowed'
      },
      {
        title: 'Modern monogamous',
        description: 'No physical intimacy (but some emotional intimacy) with other people is allowed, one-on-one (non-sexual) activities with a flirt are allowed'
      },
      {
        title: 'Progressive monogamous',
        description: 'Modern monogamous but also accepting the possibility (as long as they don’t know for sure) that their partner may have sex with other people'
      },
      {
        title: 'Partnered but non-monogamous',
        description: 'Partnered but having sex with other people is allowed'
      },
      {
        title: 'Polyamorous',
        description: 'Partnered but having multiple relationships with other people is allowed'
      },
      {
        title: 'Swinging',
        description: 'Partnered but also getting sexually involved as a couple with other couples (from same room sex to full partner swap)'
      },
      {
        title: 'Progressive swinging',
        description: 'Swinging but also being intimately involved with other swinging couples in non-sexual activities outside the bedroom'
      }
    ],
    control: {
      options: [
        'strictly monogamous',
        'modern monogamous',
        'progressive monogamous',
        'partnered but non-monogamous',
        'polyamorous',
        'swinging',
        'progressive swinging'
      ]
    }
  },
  l1q5: {
    label: {
      mePast: 'my marital status was',
      me: 'my marital status is',
      partnerPast: 'my partner’s marital status was',
      partner: 'my partner’s marital status is'
    },
    control: {
      options: [
        'never married',
        'widowed not remarried',
        'widowed remarried',
        'divorced (single)',
        'married (separated)',
        'married/exclusive (monogamous)',
        'married/open (non-monogamous)'
      ]
    }
  },
  l1q6: {
    label: {
      mePast: 'my marital status was',
      me: 'my marital status is',
      partnerPast: 'my partner’s marital status was',
      partner: 'my partner’s marital status is'
    },
    control: {
      yes: {
        label: {
          me: 'my dating status was',
          partner: 'my partner’s dating status was'
        },
        options: [
          'participated in an existing (monogamous) relationship',
          'participated in an existing open (non-monogamous) relationship',
          'single but dating (no sex) other people',
          'single but dating (having sex with) other people',
        ]
      },
      no: {
        options: []
      }
    }
  },
  l1q7: {
    label: {
      mePast: 'my education level was',
      me: 'my education level is',
      partnerPast: 'my partner’s education level was',
      partner: 'my partner’s education level is'
    },
    control: {
      options: [
        'middle school',
        'high-school',
        'some college',
        'associates',
        'bachelors',
        'master',
        'doctorate'
      ]
    }
  },
  l1q8: {
    label: {
      mePast: 'my career stage was',
      me: 'my career stage is',
      partnerPast: 'my partner’s career stage was',
      partner: 'my partner’s career stage is'
    },
    control: {
      options: [
        'full-time student',
        'part-time student',
        'full-time employed',
        'part-time employed',
        'non-student and unemployed',
        'stay at home with children',
        'retired'
      ]
    }
  },
  l1q9: {
    label: {
      mePast: 'my annual salary was',
      me: 'my annual salary is',
      partnerPast: 'my partner’s annual salary was',
      partner: 'my partner’s annual salary is'
    },
    control: {
      options: [
        '$0',
        '$21.000 - $40.000',
        '$41.000 - $60.000',
        '$61.000 - $80.000',
        '$81.000 - $100.000',
        '$101.000 - $120.000',
        '$121.000 - $141.000',
        '$141.000 - $160.000',
        '$161.000 - $180.000',
        '$181.000 - $200.000',
        '$201.000 - $220.000',
        '$221.000 - $250.000',
        '$250.000 - more',
      ],
      columns: 2
    }
  },
  l1q10: {
    label: {
      mePast: 'I owned a car',
      me: 'I own a car',
      partnerPast: 'my partner owned a car',
      partner: 'my partner owns a car'
    },
    control: {
      yes: {
        options: [
          '$1.000 - $10.000',
          '$11.000 - $20.000',
          '$21.000 - $30.000',
          '$31.000 - $40.000',
          '$41.000 - $50.000',
          '$51.000 - $60.000',
          '$61.000 - $70.000',
          '$71.000 - $80.000',
          '$81.000 - $90.000',
          '$91.000 - $100.000',
          '$101.000 - $120.000',
          '$121.000 - $150.000',
          '$150.000 - more',
        ]
      },
      no: {
        options: []
      },
      columns: 2
    }
  },
  l1q11: {
    label: {
      mePast: 'I owned a house',
      me: 'I own a house',
      partnerPast: 'my partner owned a house',
      partner: 'my partner owns a house'
    },
    control: {
      yes: {
        options: [
          '$1.000 - $40.000',
          '$41.000 - $80.000',
          '$81.000 - $120.000',
          '$121.000 - $160.000',
          '$161.000 - $200.000',
          '$201.000 - $250.000',
          '$251.000 - $300.000',
          '$301.000 - $350.000',
          '$351.000 - $400.000',
          '$401.000 - $450.000',
          '$451.000 - $500.000',
          '$501.000 - $600.000',
          '$601.000 - $700.000',
          '$701.000 - $800.000',
          '$801.000 - $900.000',
          '$901.000 - $990.000',
          '$990.000 - more',
        ]
      },
      no: {
        options: []
      },
      columns: 2
    }
  },
  l1q12: {
    label: {
      mePast: 'I had a bankruptcy on my credit report',
      me: 'I have a bankruptcy on my credit report',
      partnerPast: 'my partner had a bankruptcy on his/her credit report',
      partner: 'my partner has a bankruptcy on his/her credit report'
    }
  },
  l1q13: {
    label: {
      mePast: 'my accommodation status was',
      me: 'my accommodation status is',
      partnerPast: 'my partner’s accommodation status was',
      partner: 'my partner’s accommodation status is'
    },
    control: {
      options: [
        'living alone',
        'living with roomates/flatmates',
        'living with my father/mother',
        'living with my in-laws',
        'living with my spouse',
        'living with my gf or bf',
        'living with my children or dependents'
      ]
    }
  },
  l1q14: {
    label: {
      mePast: 'my partner and I lived in (geographical distance)',
      me: 'my partner and I live in (geographical distance)'
    },
    control: {
      options: [
        'the same city',
        'the same city but one (or both) travels a lot',
        'different cities but in the same state or county',
        'different states/counties but same continent',
        'different continents'
      ]
    }
  },
  l1q15: {
    label: {
      mePast: 'I was strongly and actively involved',
      me: 'I am strongly and actively involved',
      partnerPast: 'my partner was strongly and actively involved',
      partner: 'my partner is strongly and actively involved'
    },
    control: {
      0: {
        label: 'in religion (pray or go to church)'
      },
      1: {
        label: 'in politics (vote or participate)'
      }
    }
  },
  l1q16: {
    label: {
      mePast: 'my partner and I had the same religious beliefs',
      me: 'my partner and I have the same religious beliefs',
    }
  },
  l1q17: {
    label: {
      mePast: 'my partner and I had the same political beliefs',
      me: 'my partner and I have the same political beliefs',
    }
  },
  l1q18: {
    label: {
      mePast: 'my career versus family balance was',
      me: 'my career versus family balance is',
      partnerPast: 'my partner’s career versus family balance was',
      partner: 'my partner’s career versus family balance is'
    },
    control: {
      0: {
        label: 'career oriented'
      },
      1: {
        label: 'family oriented'
      }
    }
  },
  l1q19: {
    label: {
      mePast: 'some habits I enjoyed were',
      me: 'some habits I enjoyed are',
      partnerPast: 'some habits my partner enjoyed were',
      partner: 'some habits my partner enjoyed are'
    },
    control: {
      0: {
        label: 'smoking cigarettes and/or marijuana'
      },
      1: {
        label: 'drinking alcoholic beverages'
      },
      2: {
        label: 'other (e.g. chewing tobacco)'
      }
    }
  },
  l1q20: {
    label: {
      mePast: 'some other habits I enjoyed were',
      me: 'some other habits I enjoyed are',
      partnerPast: 'some other habits my partner enjoyed were',
      partner: 'some other habits my partner enjoyed are'
    },
    control: {
      0: {
        label: 'recreational drugs (e.g. ecstasy)'
      },
      1: {
        label: 'doing cocaine'
      },
      2: {
        label: 'other (e.g. heroin)'
      }
    }
  },
  l1q21: {
    label: {
      mePast: 'some activities I enjoyed were',
      me: 'some activities I enjoyed are',
      partnerPast: 'some activities my partner enjoyed were',
      partner: 'some activities my partner enjoyed are'
    },
    control: {
      0: {
        label: 'shopping'
      },
      1: {
        label: 'video games'
      },
      2: {
        label: 'other (e.g. watching tv)'
      }
    }
  },
  l1q22: {
    label: {
      mePast: 'some other activities I enjoyed were',
      me: 'some other activities I enjoyed are',
      partnerPast: 'some other activities my partner enjoyed were',
      partner: 'some other activities my partner enjoyed are'
    },
    control: {
      0: {
        label: 'gambling'
      },
      1: {
        label: 'prostitution'
      },
      2: {
        label: 'other  (e.g. strip clubs)'
      }
    }
  },
  l1q23: {
    label: {
      mePast: 'I had an arrest record',
      me: 'I have an arrest record',
      partnerPast: 'my partner had an arrest record',
      partner: 'my partner has an arrest record'
    }
  },
  l1q24: {
    label: {
      mePast: 'I had done prison time',
      me: 'I have done prison time',
      partnerPast: 'my partner had done prison time',
      partner: 'my partner has done prison time'
    }
  },
  l1q25: {
    label: {
      mePast: 'my active hobbies were',
      me: 'my active hobbies are',
      partnerPast: 'my partner’s active hobbies were',
      partner: 'my partner’s active hobbies are'
    },
    control: {
      options: [
        'reading/writing',
        'painting/arts',
        'dancing/singing',
        'sports/gym',
        'cars/repair/race',
        'computers/web',
        'fishing/hunting',
        'hiking/kayaking',
        'playing music',
        'gardening',
        '(sky)diving',
        'handcrafting'
      ],
      columns: 2
    }
  },
  l1q26: {
    label: {
      mePast: 'I suffered from',
      me: 'I suffer from',
      partnerPast: 'my partner suffered from',
      partner: 'my partner suffers from'
    },
    control: {
      0: {
        label: 'physical disability affecting mobility'
      },
      1: {
        label: 'chronic condition or disease'
      }
    }
  },
  l1q27: {
    label: {
      mePast: 'I suffered from',
      me: 'I suffer from',
      partnerPast: 'my partner suffered from',
      partner: 'my partner suffers from'
    },
    control: {
      0: {
        label: 'emotional instability and mood swings'
      },
      1: {
        label: 'chronic depression and/or anxiety'
      },
      2: {
        label: 'grief over a recent loss or break up'
      }
    }
  },
  l1q28: {
    label: {
      mePast: 'I was troubled and bothered by',
      me: 'I am troubled and bothered by',
      partnerPast: 'my partner was troubled and bothered by',
      partner: 'my partner is troubled and bothered by',
    },
    control: {
      0: {
        label: 'medication for mental health'
      },
      1: {
        label: 'thoughts of harming myself'
      },
      2: {
        label: 'trauma abuse from the past'
      }
    }
  },
  l1q29: {
    title: {
      me: 'The very first time I met my partner'
    },
    label: {
      me: 'the place we met was',
    },
    control: {
      options: [
        'at a party with friends, introduction by friends',
        'at a club, bar scene or other night scene',
        'on a dating website, or a social network',
        'at a church, or while doing volunteer work',
        'while participating in group sports',
        'at a shopping mall, grocery store, coffee shop',
        'at a dance class, yoga class or gym class',
        'at a live sports event or live concert',
        'at a social club: book, poetry, painting, choir',
        'randomly in the streets, parking lot or at a park',
        'through family friend',
        'because we live in the same neighborhood',
        'due to an arranged marriage',
        'while commuting e.g. on a bus, train or plane',
        'while touring a different city, state or country',
        'in a support group (for addiction, depression)',
        'at a swingers club'
      ]
    }
  },
  l1q30: {
    title: {
      me: 'I knew my partner before we started dating'
    },
    control: {
      yes: {
        options: [
          'were coworkers/coeds w/out meeting each other',
          'vaguely met through common friends',
          'hang out at work/school or with common friend',
          'were very close friends for months or years'
        ]
      },
      no: {
        options: []
      }
    }
  },
  l1q31: {
    title: {
      me: 'During our very first social encounter'
    },
    label: {
      me: 'we connected (or ‘clicked’)',
    },
    control: {
      yes: {
        options: [
          'but there was not much sexual attraction',
          'and there was some sexual attraction',
          'and felt an immediate/intense sexual attraction',
          'and felt both sexually and mentally connected'

        ]
      },
      no: {
        options: []
      }
    }
  },
  l1q32: {
    title: {
      me: 'On the day I met my partner'
    },
    label: {
      mePast: 'my height was',
      me: 'my height is',
      partnerPast: 'my partner\'s height was',
      partner: 'my partner\'s height is',
    }
  },
  l1q33: {
    title: {
      me: 'On the day I met my partner'
    },
    label: {
      mePast: 'my weight was',
      me: 'my weight is',
      partnerPast: 'my partner\'s weight was',
      partner: 'my partner\'s weight is',
    }
  },
  l1q34: {
    label: {
      mePast: 'my body type was',
      me: 'my body type is',
      partnerPast: 'my partner’s body type was',
      partner: 'my partner’s body type is'
    },
    control: {
      options: [
        'slender',
        'average',
        'athletic',
        'built',
        'curvy',
        'large'
      ]
    }
  },
  l1q35: {
    label: {
      mePast: 'my level of physical activity was',
      me: 'my level of physical activity is',
      partnerPast: 'my partner’s level of physical activity was',
      partner: 'my partner’s level of physical activity is'
    },
    control: {
      0: {
        label: 'level of physical activity'
      }
    }
  },
  l1q36: {
    label: {
      mePast: 'people considered me',
      me: 'people consider me',
      partnerPast: 'people considered my partner',
      partner: 'people consider my partner'
    },
    control: {
      0: {
        label: 'attractive (body and face)'
      },
      1: {
        label: 'sexy (demeanor and mind)'
      }
    }
  },
  l1q37: {
    label: {
      mePast: 'I had',
      me: 'I have',
      partnerPast: 'my partner had',
      partner: 'my partner has'
    },
    control: {
      options: [
        'Tattoos (visible or not)',
        'Piercings (visible or not)',
        'Tattoos and piercings',
        'None'
      ]
    }
  },
  l1q38: {
    label: {
      mePast: 'I had',
      me: 'I have',
      partnerPast: 'my partner was lucky to have',
      partner: 'my partner is lucky to have'
    },
    control: {
      0: {
        label: 'bright, healthy teeth, nice smile'
      },
      1: {
        label: 'shiny, healthy, full-head of hair'
      },
      2: {
        label: 'smooth, soft, healthy skin'
      }
    }
  },
  l1q39: {
    title: {
      me: 'During our relationship so far my partner and I had sexual intercourse'
    },
    control: {
      yes: {
        options: [
          'participated in an existing (monogamous) relationship',
          'participated in an existing open (non-monogamous) relationship',
          'single but dating (no sex) other people',
          'single but dating (having sex with) other people',
        ],
        slider: true,
        label: 'Rate your first sexual experience together'
      },
      no: {
        options: [],
        slider: false
      }
    }
  },
  l1q40: {
    title: {
      me: 'Before making the relationship official',
      partner: 'Before making the relationship official'
    },
    control: {
      0: {
        label: {
          me: 'I wanted and pursued to make our relationship official',
          partner: 'my partner wanted and pursued to make our relationship official',
        }
      }
    }
  },
  l1q41: {
    title: {
      me: 'My partner and I made the relationship official in',
    },
    label: {
      me: 'after our very first date',
      partner: 'after our very first date'
    },
    control: {
      options: [
        '1-2 days',
        '3-5 days',
        '1 week',
        '2 weeks',
        '3-4 weeks',
        '1-2 months',
        '3-4 months',
        '5-6 months',
        '7-9  months',
        '10-11 months',
        '> 12 months'
      ],
      columns: 2
    }
  },
  l1q42: {
    title: {
      me: 'On the day my partner and I made our relationship official, our relationship was accepted by',
      partner: 'On the day my partner and I made our relationship official, our relationship was accepted by'
    },
    control: {
      0: {
        label: {
          me: 'my closest friends',
          partner: 'my partner\'s closest friends'
        }
      },
      1: {
        label: {
          me: 'my parents',
          partner: 'my partner\'s parents'
        }
      },
      2: {
        label: {
          me: 'my coworkers/coeds',
          partner: 'my partner\'s coworkers/coeds'
        }
      }
    }
  },
  l1q43: {
    title: {
      me: 'The type of relationship my partner and I are pursuing',
      partner: 'The type of relationship my partner and I are pursuing'
    },
    label: {
      me: 'makes me feel',
      partner: 'makes my partner feel',
    },
    control: {
      0: {
        label: 'anxiety, depression, frustration'
      },
      1: {
        label: 'uncomfortable to publicly announce it'
      },
      2: {
        label: 'discriminated by the society norms'
      }
    }
  },
  l1q44: {
    title: {
      me: 'During the first 4 months of our relationship my partner and I moved in together',
    },
    control: {
      yes: {
        options: [
          'I moved in my partner’s house',
          'my partner moved in my house',
          'my partner and I moved in a house/apt together'
        ]
      },
      no: {
        options: []
      }
    }
  },
  l1q45: {
    title: {
      me: 'During the first 4 months of our relationship',
      partner: 'During the first 4 months of our relationship',
    },
    label: {
      me: 'numbers of texts per day I sent to my partner',
      partner: 'numbers of texts per day my partner sent to me',
    },
    control: {
      options: [
        '0',
        '1-5',
        '6-10',
        '11-15',
        '16-20',
        '21-25',
        '26-30',
        '31-35',
        '36-40',
        '41-45',
        '46-50',
        '>50'
      ],
      columns: 2
    }
  },
  l1q46: {
    title: {
      me: 'During the first 4 months of our relationship',
      partner: 'During the first 4 months of our relationship',
    },
    label: {
      me: 'numbers of minutes it took me to reply to my partner’s texts',
      partner: 'numbers of minutes it took my partner to reply to my texts',
    },
    control: {
      options: [
        '0',
        '1-2',
        '3-5',
        '6-10',
        '11-20',
        '21-30',
        '31-45',
        '46-60',
        '61-90',
        '90-120',
        '>120'
      ],
      columns: 2
    }
  },
  l1q47: {
    title: {
      me: 'During the first 4 months of our relationship',
      partner: 'During the first 4 months of our relationship',
    },
    label: {
      me: 'numbers of calls per day I sent to my partner',
      partner: 'numbers of calls per day my partner sent to me',
    },
    control: {
      options: [
        '0-1',
        '2-3',
        '4-5',
        '6-7',
        '8-9',
        '10-12',
        '13-15',
        '16-20',
        '21-25',
        '26-30',
        '>30'
      ],
      columns: 2
    }
  },
  l1q48: {
    title: {
      me: 'During the first 4 months of our relationship',
      partner: 'During the first 4 months of our relationship',
    },
    label: {
      me: 'numbers of minutes it took me to reply to my partner’s calls',
      partner: 'numbers of minutes it took my partner to reply to my calls',
    },
    control: {
      options: [
        '0',
        '1-2',
        '3-5',
        '6-10',
        '11-20',
        '21-30',
        '31-45',
        '46-60',
        '61-90',
        '90-120',
        '>120'
      ],
      columns: 2
    }
  },
  l1q49: {
    title: {
      me: 'During the first 4 months of our relationship',
    },
    label: {
      me: 'what was the maximum number of days of no communication (at all)?',
    }
  },
  l1q50: {
    title: {
      me: 'During the first 4 months of our relationship',
      partner: 'During the first 4 months of our relationship'
    },
    label: {
      me: 'what was the frequency and intensity of your sexual encounters?',
    },
    control: {
      0: {
        label: 'number of days per week we would have sex'
      },
      1: {
        label: 'level of intensity and passion during sex'
      }
    },
  },
  l1q51: {
    title: {
      me: 'During the first 4 months of our relationship',
      partner: 'During the first 4 months of our relationship'
    },
    label: {
      me: 'I would have an orgasm',
      partner: 'my partner would have an orgasm',
    }
  },
  l1q52: {
    title: {
      me: 'During the first 4 months of our relationship',
      partner: 'During the first 4 months of our relationship'
    },
    control: {
      0: {
        label: {
          me: 'my comfort level with my partner’s sexual behavior in bed',
          partner: 'my partner’s comfort level with my sexual behavior in bed'
        }
      }
    },
  },
  l1q53: {
    title: {
      me: 'During the first 4 months of our relationship',
    },
    label: {
      me: 'non-monogamous activities:'
    },
    control: {
      options: [
        'agreed on open relationship/practiced polygamy',
        'had a three sum (us plus another person)',
        'joined a swingers club/practiced swinging'
      ]
    },
  },
  l1q54: {
    title: {
      me: 'During the first 4 months of our relationship',
    },
    control: {
      0: {
        label: 'we shared unique personal moments'
      },
      1: {
        label: 'we shared very deep personal secrets'
      }
    },
  },
  l1q55: {
    title: {
      me: 'During the first 4 months of our relationship',
    },
    label: {
      me: 'number of times per week my partner and I'
    },
    control: {
      0: {
        label: 'we hang out casually to see each other'
      },
      1: {
        label: 'we went out for dining, clubbing, movies'
      }
    },
  },
  l1q56: {
    title: {
      me: 'During the first 4 months of our relationship',
    },
    label: {
      me: 'total number of times my partner and I went on trips out of town'
    }
  },
  l1q57: {
    title: {
      me: 'During the first 4 months of our relationship',
      partner: 'During the first 4 months of our relationship',
    },
    control: {
      0: {
        label: {
          me: 'I met most of my partner’s family',
          partner: 'my partner met most of my family'
        }
      },
      1: {
        label: 'friends'
      }
    },
  },
  l1q58: {
    title: {
      me: 'During the first 4 months of our relationship'
    },
    control: {
      0: {
        label: 'number of times our disagreements led to fights'
      },
      1: {
        label: 'number of times we broke up and got back together'
      }
    },
  },
  l1q59: {
    title: {
      me: 'During the first 4 months of our relationship'
    },
    control: {
      0: {
        label: 'Percentage of resolutions I initiated after fights'
      },
      1: {
        label: 'Percentage of resolutions my partner initiated after fights'
      }
    },
  },
  l1q60: {
    title: {
      me: 'During the first 4 months of our relationship',
      partner: 'During the first 4 months of our relationship'
    },
    control: {
      0: {
        label: 'Percentage of resolutions I was satisfied with'
      },
      1: {
        label: 'Percentage of resolutions my partner was satisfied with'
      }
    },
  },
};
