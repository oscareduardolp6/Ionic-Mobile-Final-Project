import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeworksService } from 'src/app/homeworks.service';
import { homework } from "../../../../model/User";

@Component({
  selector: 'app-homework-detail',
  templateUrl: './homework-detail.page.html',
  styleUrls: ['./homework-detail.page.scss'],
})
export class HomeworkDetailPage implements OnInit {
    public newhomework: homework = {
        text : '',
        isChecked : false
    }

  constructor(private service: HomeworksService, private router: Router) { }

  ngOnInit() {
  }

  addHomework(){
      this.service.createHomework(this.newhomework);
      this.router.navigate(['/homework'])
  }

  cancel(){
      this.router.navigate(['/homework'])
  }

  home(){
      this.router.navigate(['/folder'])
  }
}
