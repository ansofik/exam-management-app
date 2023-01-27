import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SelectedExam } from '../exam.model';
import { ExamService } from '../exam.service';

@Component({
  selector: 'app-exam-detail',
  templateUrl: './exam-detail.component.html',
  styleUrls: ['./exam-detail.component.css']
})
export class ExamDetailComponent implements OnInit{
  /* @Input() exam!: Exam; */

  exam: SelectedExam | undefined;

  constructor(private examService: ExamService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.examService.getExam(id)
      .subscribe(exam => {
        console.log(exam)
        this.exam = exam
      });
  }

  onEditExam() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
