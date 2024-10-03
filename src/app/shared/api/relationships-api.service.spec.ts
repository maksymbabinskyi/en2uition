import { TestBed } from '@angular/core/testing';

import { RelationshipsApiService } from './relationships-api.service';

describe('RelationshipsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RelationshipsApiService = TestBed.get(RelationshipsApiService);
    expect(service).toBeTruthy();
  });
});
