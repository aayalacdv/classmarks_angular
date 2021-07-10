import { Exam } from "../interfaces/exam_interface";


export class Course
 {
    name : string;
    exams : Exam[] = [];
    finalMark : number = 0;
    currentMark : number = 0;
    pecentageLeft : number = 0;

    constructor( name : string){
      this.name = name;
    }

    addExam( exam : Exam) : void {
      this.exams.push(exam);
      this.calculateValues();
    }

    calculateValues() : void {
      this.pecentageLeft = 0;
      this.exams.forEach(element => {
        this.currentMark+= element.mark * element.perentage / 100;
        this.pecentageLeft = 100 - element.perentage - this.pecentageLeft;
        if(this.pecentageLeft == 0){
          this.finalMark = this.currentMark;
        }
      });
    }

    validateExam( exam : Exam) : boolean {
      if(this.currentMark + (exam.mark * exam.perentage / 100) > 10){
        return false;
      }
      return true;
    }


 }
