import { TestBed } from '@angular/core/testing';

import { SignalLibraryService } from './signal-library.service';

describe('SignalLibraryService', () => {
  let service: SignalLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
