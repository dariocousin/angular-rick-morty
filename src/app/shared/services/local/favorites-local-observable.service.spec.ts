import { TestBed } from '@angular/core/testing';

import { FavoritesLocalObservableService } from './favorites-local-observable.service';

describe('FavoritesLocalObservableService', () => {
  let service: FavoritesLocalObservableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritesLocalObservableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
