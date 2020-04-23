import { TestBed } from '@angular/core/testing';

import { CakeStoreApiService } from './cake-store-api.service';

describe('CakeStoreApiService', () => {
  let service: CakeStoreApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CakeStoreApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
