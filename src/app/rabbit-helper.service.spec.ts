import { TestBed } from '@angular/core/testing';

import { RabbitHelperService } from './rabbit-helper.service';

describe('RabbitHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RabbitHelperService = TestBed.get(RabbitHelperService);
    expect(service).toBeTruthy();
  });
});
