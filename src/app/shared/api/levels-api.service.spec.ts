import { TestBed } from '@angular/core/testing';

import { LevelsApiService } from './levels-api.service';

describe('LevelsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LevelsApiService = TestBed.get(LevelsApiService);
    expect(service).toBeTruthy();
  });
});
