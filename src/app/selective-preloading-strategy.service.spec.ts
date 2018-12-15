import { TestBed } from '@angular/core/testing';

import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

describe('SelectivePreloadingStrategyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectivePreloadingStrategyService = TestBed.get(SelectivePreloadingStrategyService);
    expect(service).toBeTruthy();
  });
});
