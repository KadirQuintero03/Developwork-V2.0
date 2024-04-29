import { TestBed } from '@angular/core/testing';

import { RolserviceService } from './rolservice.service';

describe('RolserviceService', () => {
  let service: RolserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
