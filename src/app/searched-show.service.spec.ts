import { TestBed } from '@angular/core/testing';

import { SearchedShowService } from './searched-show.service';

describe('SearchedShowService', () => {
  let service: SearchedShowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchedShowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
