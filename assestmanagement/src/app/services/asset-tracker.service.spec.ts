import { TestBed } from '@angular/core/testing';

import { AssetTrackerService } from './asset-tracker.service';

describe('AssetTrackerService', () => {
  let service: AssetTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
