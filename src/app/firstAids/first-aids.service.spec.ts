import { TestBed, inject } from '@angular/core/testing';

import { FirstAidsService } from './first-aids.service';

describe('FirstAidsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirstAidsService]
    });
  });

  it('should be created', inject([FirstAidsService], (service: FirstAidsService) => {
    expect(service).toBeTruthy();
  }));
});
