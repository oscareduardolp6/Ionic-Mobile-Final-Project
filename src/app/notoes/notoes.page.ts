import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeworksService } from '../homeworks.service';
import { note } from "../model/User";

@Component({
  selector: 'app-notoes',
  templateUrl: './notoes.page.html',
  styleUrls: ['./notoes.page.scss'],
})
export class NotoesPage implements OnInit {
    notes: note[] = this.service.getNotes();

  constructor(private service: HomeworksService, private router: Router) { }

  ngOnInit() {
  }

    ionViewWillEnter() {
        this.notes = this.service.getNotes();

    }

  home(){
      this.router.navigate(['/folder']);
  }

  addNote(){
      this.router.navigate(['/note-detail']);
  }

}
