import { TestBed } from '@angular/core/testing';

import { QuestionsApiService } from './questions-api.service';

describe('QuestionsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionsApiService = TestBed.get(QuestionsApiService);
    expect(service).toBeTruthy();
  });
});
