import { TestBed, inject } from '@angular/core/testing';

import { WtfService } from './wtf.service';

describe('WtfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WtfService]
    });
  });

  it('should be created', inject([WtfService], (service: WtfService) => {
    expect(service).toBeTruthy();
  }));
});
