import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { homework } from "../../../model/User";
import { HomeworksService } from "../../../homeworks.service";

@Component({
  selector: 'app-homework',
  templateUrl: './homework.page.html',
  styleUrls: ['./homework.page.scss'],
})
export class HomeworkPage implements OnInit {
    public homeworks: homework [] = this.service.getHomeworks(); 

    constructor(private router: Router, private service: HomeworksService) { }

    ngOnInit() {
    }
    
    ionViewWillEnter(){
        this.homeworks = this.service.getHomeworks() 

    }


    addTarea(){
        this.router.navigate(['/homework-detail']);
    }

    home(){
        this.router.navigate(['/folder']);
    }

}
