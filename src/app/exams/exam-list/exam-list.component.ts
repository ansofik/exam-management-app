import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Exam } from '../exam.model';
import { ExamService } from '../exam.service';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.css']
})
export class ExamListComponent {
  /* @Output() selectedExam = new EventEmitter<Exam>(); */
  exams: Exam[] = [];

  constructor(private examService: ExamService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getExams();
  }

  getExams(): void {
    this.examService.getExams()
      .subscribe(exams => {
        console.log(exams);
        this.exams = exams
      });
  }

  onAddExam() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  /* onSelect(exam: Exam) {
    console.log(`selected exam with name ${exam.name}`);
    this.selectedExam.emit(exam);
  } */
}
