
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeFeedback } from './employee-feedback';

@Injectable({
  providedIn: 'root'
})
export class EmployeeFeedbackService {
  private baseUrl = 'http://localhost:8080/api/feedbacks'; // Replace with your actual backend URL

  constructor(private http: HttpClient) { }

  getAllFeedbacks(): Observable<EmployeeFeedback[]> {
    return this.http.get<EmployeeFeedback[]>(this.baseUrl);
  }

  createFeedback(feedback: EmployeeFeedback): Observable<EmployeeFeedback> {
    return this.http.post<EmployeeFeedback>(this.baseUrl, feedback);
  }

  // You can add more service methods as needed
}
