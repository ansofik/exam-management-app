import { Component, EventEmitter, Output } from '@angular/core';

import { Exam } from '../exam.model';
import { ExamService } from '../exam.service';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.css']
})
export class ExamListComponent {
  /* @Output() selectedExam = new EventEmitter<Exam>(); */
  exams!: Exam[];
  
  constructor(private examService: ExamService) {}

  ngOnInit() {
    this.exams = this.examService.getExams();
  }

  /* onSelect(exam: Exam) {
    console.log(`selected exam with name ${exam.name}`);
    this.selectedExam.emit(exam);
  } */
}
