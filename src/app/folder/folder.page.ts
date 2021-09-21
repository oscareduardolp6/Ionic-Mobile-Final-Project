import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
    public folder: string;
    public user: string; 
    public slideOpt
    public homeWorkIcon: string = 'https://image.flaticon.com/icons/png/512/2702/2702069.png'; 
    public slides: string [] = [
        'https://thumbs.dreamstime.com/z/summer-party-horizontal-retro-colored-banner-flyer-girl-singing-microphone-order-ticket-online-annual-musical-festival-event-151816498.jpg', 
        'https://www.templateupdates.com/wp-content/uploads/2019/05/Horizontal-Conference-Flyer-Design-Template.jpg', 
        'https://previews.123rf.com/images/korara/korara1708/korara170800160/84999108-grand-opening-vector-illustration-template-banner-or-horizontal-poster-with-abstract-background-for-.jpg'
    ]
  constructor(private activatedRoute: ActivatedRoute, private router:Router ) { 
        this.user = "Daniel"
  }

  ngOnInit() {
    //this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.folder = "Estudiante";
  }

  moveToHomeworks = () => this.router.navigate(['/homework'])

  goToNotes = () => this.router.navigate(['/notoes'])

}

