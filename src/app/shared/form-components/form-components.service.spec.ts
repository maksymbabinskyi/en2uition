import { TestBed } from '@angular/core/testing';

import { FormComponentsService } from './form-components.service';

describe('FormComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormComponentsService = TestBed.get(FormComponentsService);
    expect(service).toBeTruthy();
  });
});
