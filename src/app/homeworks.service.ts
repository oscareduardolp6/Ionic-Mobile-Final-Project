import { Injectable } from '@angular/core';
import { homework, note } from "./model/User";

@Injectable({
  providedIn: 'root'
})
export class HomeworksService {
    public homeworks: homework[] = [
        {
            text: "Unidad 4 del curso de Kotlin",
            isChecked: false
        },
        {
            text: 'Proyecto Final de Sitemas Programables',
            isChecked: false
        },
        {
            text: 'Topología de redes',
            isChecked: false
        },
        {
            text: "Proyecto de Java",
            isChecked: false
        }
    ]

    public notes: note [] = [
        {
            text: 'El niño ha estado platicando mucho en clase', 
            good: '❌'
        }, 
        {
            text: 'Participó mucho en clase hoy', 
            good: '✔️'
        }
    ]

  constructor() { }


  public getHomeworks(): homework [] {
      return [...this.homeworks]
  }

  public createHomework(homework: homework){
      this.homeworks.push(homework)
  }

  public getNotes(): note[]{
      return [...this.notes];
  }

  public addNote(note: note){
      this.notes.push(note);
  }
}
