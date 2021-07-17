import { Exam } from './interfaces/exam_interface';
import { Injectable, OnInit } from '@angular/core';
import { Course } from './models/course';
import { COURSES } from 'src/mock_data';
import { Observable, Observer } from 'rxjs';
import { CompileTemplateMetadata } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  arrayEmitter = new Observable(this.emitArray);

  getCourses() : Course[]{
    return COURSES;
  }


  addCourse( course : Course){
    COURSES.push(course);
  }


  addExam(index : number, exam : Exam){
    COURSES[index].addExam(exam);
  }

  deleteExam(courseIndex : number, examIndex: number){
    COURSES[courseIndex].deleteExam(examIndex);
  }

  constructor() { }


  emitArray( observer : Observer<Course[]>){
    observer.next(COURSES);
    observer.complete();
    return { unsubscribe(){}}
  }


  deleteCourse(course: Course){
      let index = COURSES.indexOf(course);
      COURSES.splice(index); 
  }



}
