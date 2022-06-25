import { TestBed } from '@angular/core/testing';

import { DaladalaserviceService } from './daladalaservice.service';

describe('DaladalaserviceService', () => {
  let service: DaladalaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaladalaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
