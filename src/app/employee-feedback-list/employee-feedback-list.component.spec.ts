import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFeedbackListComponent } from './employee-feedback-list.component';

describe('EmployeeFeedbackListComponent', () => {
  let component: EmployeeFeedbackListComponent;
  let fixture: ComponentFixture<EmployeeFeedbackListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeFeedbackListComponent]
    });
    fixture = TestBed.createComponent(EmployeeFeedbackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
