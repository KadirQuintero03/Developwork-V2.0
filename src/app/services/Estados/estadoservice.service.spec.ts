import { TestBed } from '@angular/core/testing';

import { EstadoserviceService } from './estadoservice.service';

describe('EstadoserviceService', () => {
  let service: EstadoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
