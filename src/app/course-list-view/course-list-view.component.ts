import { Course } from './../models/course';
import { Component, OnInit } from '@angular/core';
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
    this.getCourses();
  }

  getCourses() : void{
    this.courses = this.course_service.getCourses();
  }


}

