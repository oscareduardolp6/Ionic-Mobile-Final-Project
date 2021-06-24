import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.page.html',
  styleUrls: ['./homework.page.scss'],
})
export class HomeworkPage implements OnInit {
    public homeworks: homework [] = [
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

    constructor(private router: Router) { }

    ngOnInit() {
    }

    addTarea(){
        this.router.navigate(['/homework-detail']);
    }

}

interface homework{
    text: string;
    isChecked: boolean; 
}