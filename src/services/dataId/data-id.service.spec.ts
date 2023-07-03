import { TestBed } from '@angular/core/testing';

import { DataIdService } from './data-id.service';

describe('DataIdService', () => {
  let service: DataIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
