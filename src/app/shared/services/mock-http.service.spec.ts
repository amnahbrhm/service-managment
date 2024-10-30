import { TestBed } from '@angular/core/testing';

import { MockHttpService } from './mock-http.service';

describe('MockHttpService', () => {
  let service: MockHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
