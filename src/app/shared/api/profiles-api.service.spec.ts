import { TestBed } from '@angular/core/testing';

import { ProfilesApiService } from './profiles-api.service';

describe('ProfilesApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfilesApiService = TestBed.get(ProfilesApiService);
    expect(service).toBeTruthy();
  });
});
