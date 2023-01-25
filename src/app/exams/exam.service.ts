import { Injectable } from '@angular/core';
import { Exam } from './exam.model';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  private exams: Exam[] = [
    new Exam(0, 'Javascriptin perusteet', 'Tentin kuvaus'),
    new Exam(1, 'Tietokantojen perusteet', 'tentin kuvaus')
  ]

  constructor() { }

  getExams() {
    return this.exams.slice();
  }

  getExam(id: number) {
    return this.exams[id];
  }
}


