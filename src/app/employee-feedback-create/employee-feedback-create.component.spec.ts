import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFeedbackCreateComponent } from './employee-feedback-create.component';

describe('EmployeeFeedbackCreateComponent', () => {
  let component: EmployeeFeedbackCreateComponent;
  let fixture: ComponentFixture<EmployeeFeedbackCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeFeedbackCreateComponent]
    });
    fixture = TestBed.createComponent(EmployeeFeedbackCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
