import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Course } from './../models/course';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CourseService } from '../course.service';
@Component({
  selector: 'app-course-list-view',
  templateUrl: './course-list-view.component.html',
  styleUrls: ['./course-list-view.component.css']
})
export class CourseListViewComponent implements OnInit {

  courses : Course[] = [];
  panelOpenState = false;
  courseForm : boolean = false;
  courseFormulary : FormGroup = this.fb.group({

  name : this.fb.control('', [
    Validators.required,
  ]),

  })

  constructor(private course_service : CourseService, private fb : FormBuilder) { }

  ngOnInit(): void {
    this.course_service.arrayEmitter.subscribe((data)=>{
    this.courses = data;
    })
  }

  addCourse(){
    let c : Course = new Course( this.courseFormulary.controls.name.value);
    this.course_service.addCourse(c);
    this.courseFormulary.reset();
    this.courseForm = false;

  }







}

