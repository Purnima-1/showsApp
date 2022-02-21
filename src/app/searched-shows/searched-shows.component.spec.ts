import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedShowsComponent } from './searched-shows.component';

describe('SearchedShowsComponent', () => {
  let component: SearchedShowsComponent;
  let fixture: ComponentFixture<SearchedShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchedShowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
