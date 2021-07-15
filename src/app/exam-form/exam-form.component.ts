import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-exam-form',
  templateUrl: './exam-form.component.html',
  styleUrls: ['./exam-form.component.css']
})
export class ExamFormComponent implements OnInit {

  examForm = this.fb.group({
     name : this.fb.control('Exam name', [
       Validators.required,
      ]),
     percentage : this.fb.control(1 , [
       Validators.required,
       Validators.min(0),
       Validators.max(75)]),
     mark : this.fb.control(2, [
        Validators.min(0),
        Validators.required,
        Validators.max(10)])
  })

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get controls(): any {
    return this.examForm.controls;
  }
}
