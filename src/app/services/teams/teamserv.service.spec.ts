import { TestBed } from '@angular/core/testing';
import { TeamservService } from './teamserv.service';

describe('TeamservService', () => {
  let service: TeamservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
