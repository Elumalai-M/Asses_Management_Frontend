import { TestBed } from '@angular/core/testing';

import { AssestService } from './assest.service';

describe('AssestService', () => {
  let service: AssestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
