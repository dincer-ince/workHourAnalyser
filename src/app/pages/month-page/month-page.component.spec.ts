import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthPageComponent } from './month-page.component';

describe('MonthPageComponent', () => {
  let component: MonthPageComponent;
  let fixture: ComponentFixture<MonthPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthPageComponent]
    });
    fixture = TestBed.createComponent(MonthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
