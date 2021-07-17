import { typeWithParameters } from "@angular/compiler/src/render3/util";
import { Exam } from "../interfaces/exam_interface";


export class Course
 {
    name : string;
    exams : Exam[] = [];
    finalMark : number = 0;
    currentMark : number = 0;
    pecentageLeft : number = 100;

    constructor( name : string){
      this.name = name;
    }

    addExam( exam : Exam) : void {
      this.exams.push(exam);
      this.currentMark += exam.perentage * exam.mark / 100;
      this.pecentageLeft -= exam.perentage;
      if(this.pecentageLeft == 0){
        this.finalMark = this.currentMark;
      }

    }

    deleteExam( index : number){
      this.currentMark -= this.exams[index].mark * this.exams[index].perentage/100;
      this.pecentageLeft += this.exams[index].perentage;
      this.exams.splice(index);
    }





 }
