
import { Component } from '@angular/core';
import { EmployeeFeedbackService } from '../employee-feedback.service';
import { EmployeeFeedback } from '../employee-feedback.model';

@Component({
  selector: 'app-employee-feedback-create',
  templateUrl: './employee-feedback-create.component.html',
  styleUrls: ['./employee-feedback-create.component.css']
})
export class EmployeeFeedbackCreateComponent {
  newFeedback: EmployeeFeedback = { id: null, feedbackTitle: '', feedbackContent: '', feedbackDate: null, employeeId: null };

  constructor(private feedbackService: EmployeeFeedbackService) { }

  createFeedback(): void {
    this.feedbackService.createFeedback(this.newFeedback)
      .subscribe((feedback: EmployeeFeedback) => {
        // Handle success, e.g., show a success message
        console.log('Feedback created successfully:', feedback);

        // Optionally, reset the form or perform other actions
        this.newFeedback = { id: null, feedbackTitle: '', feedbackContent: '', feedbackDate: null, employeeId: null };
      }, (error) => {
        // Handle error, e.g., show an error message
        console.error('Error creating feedback:', error);
      });
  }
}
