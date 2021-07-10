import { Exam } from './app/interfaces/exam_interface';
import { Course } from './app/models/course';

let pes : Course = new Course("PES");
let pds : Course = new Course("PDS");
let api : Course = new Course("API");

let mq : Exam = {
  name : "MQ",
  mark: 10,
  perentage: 25
}

pes.addExam(mq);
pds.addExam(mq);
api.addExam(mq);


export const COURSES : Course[] = [pes, api, pds];



