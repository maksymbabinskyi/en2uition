import { TestBed } from '@angular/core/testing';

import { AnswersApiService } from './answers-api.service';

describe('AnswersApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnswersApiService = TestBed.get(AnswersApiService);
    expect(service).toBeTruthy();
  });
});
