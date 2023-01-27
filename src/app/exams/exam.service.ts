import { Injectable } from '@angular/core';
import { catchError, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, of } from 'rxjs';

import { Exam, SelectedExam } from './exam.model';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  /* examsChanged = new Subject<Exam[]>();
  private exams: Exam[] = []; */
  private baseUrl = 'https://localhost:8080';

  constructor(private http: HttpClient) { }

  getExams(): Observable<Exam[]> {
    return this.http
      .get<Exam[]>(`${this.baseUrl}/exams`)
      .pipe(
        tap(_ => console.log('fetched exams')),
        catchError(this.handleError<Exam[]>('getExams', []))
      )
  }

  getExam(id: string): Observable<SelectedExam> {
    return this.http
      .get<SelectedExam>(`${this.baseUrl}/exams/${id}`)
      .pipe(
        tap(_ => console.log('fetched exam by id')),
        catchError(this.handleError<SelectedExam>('getExam'))
      );
  }

  updateExamName(id: string, newName: string): Observable<any> {
    return this.http
      .put(`${this.baseUrl}/exams/${id}`, { name: newName })
      .pipe(
        tap(_ => console.log('updated exam name')),
        catchError(this.handleError<any>('updateExamName'))
      );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}


