import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Exam } from '../exam.model';
import { ExamService } from '../exam.service';

@Component({
  selector: 'app-exam-detail',
  templateUrl: './exam-detail.component.html',
  styleUrls: ['./exam-detail.component.css']
})
export class ExamDetailComponent implements OnInit{
  /* @Input() exam!: Exam; */

  exam!: Exam;

  constructor(private examService: ExamService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        console.log("param", +params['id'])
        this.exam = this.examService.getExam(+params['id']);
      }
    );
  }



}
