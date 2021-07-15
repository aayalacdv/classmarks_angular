import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Course } from '../models/course';
@Component({
  selector: 'app-exam-form',
  templateUrl: './exam-form.component.html',
  styleUrls: ['./exam-form.component.css']
})
export class ExamFormComponent implements OnInit {
  @Input() course! : Course;
   examForm !: FormGroup;


  constructor( private fb: FormBuilder) { }

  percentageValidation() : boolean {
   return this.controls.percentage.value < this.course.pecentageLeft && this.controls.percentage.value > 0;
  }
  markValidation() : boolean {
    return this.controls.mark.value <= 10 && this.controls.mark.value >= 0;
  }
  ngOnInit(): void {
    this.examForm = this.fb.group({
     name : this.fb.control('', [
       Validators.required,
      ]),
     percentage : this.fb.control(0, [
       Validators.required,
       Validators.min(0),
       Validators.max(this.course.pecentageLeft)]),
     mark : this.fb.control(0, [
        Validators.min(0),
        Validators.required,
        Validators.max(10)])
  })
  }

  get controls(): any {
    return this.examForm.controls;
  }
}
