import { Course } from './../models/course';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  @Input() course! : Course;
  columnsToDisplay = ['name', 'percentage', 'mark'];

  constructor() { }

  ngOnInit(): void {

  }

}
