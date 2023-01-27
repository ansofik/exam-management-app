import { Component } from '@angular/core';
import { UntypedFormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs';
import { SelectedExam } from '../exam.model';

import { ExamService } from '../exam.service';

@Component({
  selector: 'app-exam-edit',
  templateUrl: './exam-edit.component.html',
  styleUrls: ['./exam-edit.component.css']
})
export class ExamEditComponent {
  exam!: SelectedExam | undefined;
  /* examId!: string; */
  examForm!: FormGroup;

  constructor(private route: ActivatedRoute,
    private examService: ExamService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id == null) {
      this.initForm();
    } else {
      this.examService.getExam(id).pipe(
        switchMap(exam => {
          this.exam = exam;
          this.initForm()
          return this.examForm.controls['name']
            .valueChanges
            .pipe(
              switchMap((val) => this.examService.updateExamName(id, val)))
        })
      ).subscribe(val => console.log('name updated'))
    }
  }

  private initForm() {
    let examName = '';
    let questions = new UntypedFormArray([]);
    console.log('here')

    if (this.exam) {
      examName = this.exam.name;
      if (this.exam.questions) {
        for (let question of this.exam.questions) {
          console.log(question.questionText)
          questions.push(
            new FormGroup({
              'questionText': new FormControl(question.questionText),
              'options': new UntypedFormArray(question.options.map(option => new FormControl(option.optionText)))
            }))
        }
      }
    }

    this.examForm = new FormGroup({
      'name': new FormControl(examName),
      'questions': questions
    });
  }

  get questionControls() {
    return (<UntypedFormArray>this.examForm.get('questions')).controls;
  }

  optionControls(i: number) {
    return (<UntypedFormArray>((<UntypedFormArray>this.examForm.get('questions')).controls[i]).get('options')).controls;
  }
}
