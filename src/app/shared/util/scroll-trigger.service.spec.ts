import { TestBed } from '@angular/core/testing';

import { ScrollTriggerService } from './scroll-trigger.service';

describe('ScrollTriggerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScrollTriggerService = TestBed.get(ScrollTriggerService);
    expect(service).toBeTruthy();
  });
});
