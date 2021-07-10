import { Injectable } from '@angular/core';
import { Course } from './models/course';
import { COURSES } from 'src/mock_data';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  getCourses() : Course[]{
    return COURSES;
  }
  
  constructor() { }
}
