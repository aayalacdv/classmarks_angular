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

  constructor(private course_service : CourseService) { }

  ngOnInit(): void {
    this.course_service.arrayEmitter.subscribe((data)=>{
    this.courses = data;
    })
  }





}

