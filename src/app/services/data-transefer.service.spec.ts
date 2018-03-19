import { TestBed, inject } from '@angular/core/testing';

import { DataTranseferService } from './data-transefer.service';

describe('DataTranseferService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataTranseferService]
    });
  });

  it('should be created', inject([DataTranseferService], (service: DataTranseferService) => {
    expect(service).toBeTruthy();
  }));
});
