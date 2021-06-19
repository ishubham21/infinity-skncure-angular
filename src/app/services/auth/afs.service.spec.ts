import { TestBed } from '@angular/core/testing';

import { AfsService } from './afs.service';

describe('AfsService', () => {
  let service: AfsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AfsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
