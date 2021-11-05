import { TestBed } from '@angular/core/testing';

import { GmrpService } from './gmrp.service';

describe('GmrpService', () => {
  let service: GmrpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GmrpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
