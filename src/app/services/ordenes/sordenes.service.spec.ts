import { TestBed } from '@angular/core/testing';

import { SordenesService } from './sordenes.service';

describe('SordenesService', () => {
  let service: SordenesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SordenesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
