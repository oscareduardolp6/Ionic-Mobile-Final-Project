import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { note, icon } from "../model/User";
import { HomeworksService } from "../homeworks.service";

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.page.html',
  styleUrls: ['./note-detail.page.scss', '../folder/folder/homework/homework-detail/homework-detail.page.scss'],
})
export class NoteDetailPage implements OnInit {
    tipo: icon  
    actualNote: note = {
        text: '',
        good: '✔️'
    }

  constructor(private router: Router, private service: HomeworksService) { }

  ngOnInit() {
  }

  home(){
      this.router.navigate(['/folder']);
  }

  addGoodNote(){
      const newNote: note = {
          text: this.actualNote.text, 
          good: '✔️'
      }
      this.service.addNote(newNote);
      this.router.navigate(['/notoes'])
  }

  addBadNote(){
      const newNote: note = {
          text: this.actualNote.text,
          good: '❌'
      }
      this.service.addNote(newNote);
      this.router.navigate(['/notoes'])
  }
}
