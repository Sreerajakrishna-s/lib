import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAvailabilityComponent } from './book-availability.component';

describe('BookAvailabilityComponent', () => {
  let component: BookAvailabilityComponent;
  let fixture: ComponentFixture<BookAvailabilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookAvailabilityComponent]
    });
    fixture = TestBed.createComponent(BookAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
