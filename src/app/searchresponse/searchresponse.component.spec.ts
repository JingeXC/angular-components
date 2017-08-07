import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchresponseComponent } from './searchresponse.component';

describe('SearchresponseComponent', () => {
  let component: SearchresponseComponent;
  let fixture: ComponentFixture<SearchresponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchresponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchresponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
