import { TestBed } from '@angular/core/testing';

import { DrouteserviceService } from './drouteservice.service';

describe('DrouteserviceService', () => {
  let service: DrouteserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrouteserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
