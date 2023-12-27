
import { Component, OnInit } from '@angular/core';
import { EmployeeFeedbackService } from '../employee-feedback.service';
import { EmployeeFeedback } from '../employee-feedback.model';

@Component({
  selector: 'app-employee-feedback-list',
  templateUrl: './employee-feedback-list.component.html',
  styleUrls: ['./employee-feedback-list.component.css']
})
export class EmployeeFeedbackListComponent implements OnInit {
  feedbacks: EmployeeFeedback[];

  constructor(private feedbackService: EmployeeFeedbackService) { }

  ngOnInit(): void {
    this.feedbackService.getAllFeedbacks()
      .subscribe((feedbacks: EmployeeFeedback[]) => this.feedbacks = feedbacks);
  }
}
