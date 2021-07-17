import { Observable } from 'rxjs';
import { CourseService } from './../course.service';
import { Course } from './../models/course';
import { Component, Input, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Exam } from '../interfaces/exam_interface';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  changeDetection : ChangeDetectionStrategy.OnPush,
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit{
  @Input() course! : Course;
  @Input() index! : number;

  columnsToDisplay = ['name', 'percentage', 'mark', ' '];
  displayForm : boolean = false;
  message : string = "hola";
  counter : number = 0;

  @ViewChild(MatTable)
  table!: MatTable<Exam>;

  constructor(private courseService : CourseService) {

  }

  ngOnInit(){
  }

  setCourse(course : Course){
    this.course = course;
  }

  setDisplayForm(){
    this.displayForm = true;
  }

  refreshTable() : void {
    this.table.renderRows();
    this.displayForm = false;
  }

  deleteExam(exam: Exam){
    let examIndex = this.course.exams.indexOf(exam);
    this.courseService.deleteExam(this.index, examIndex);
    this.refreshTable();
  }

  deleteCourse(){
    this.courseService.deleteCourse(this.course); 
  }

}
