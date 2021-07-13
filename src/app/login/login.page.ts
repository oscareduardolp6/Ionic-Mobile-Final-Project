import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NewUser, User } from "../model/User";
import { AlertController } from "@ionic/angular";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    darkMode: boolean = true    ; 
    user: NewUser = {
        user: '', 
        password: '', 
        active: true
    }
  constructor(private alertController: AlertController, private http: HttpClient,
            private router: Router) { }

  ngOnInit() {
  }
    async presentSuccessRegister(){
        const alert = await this.alertController.create({
            header: 'Error', 
            subHeader: 'No se pudo iniciar sesión', 
            message: `El usuario o la contraseña ingresados no son correctos`,
            buttons: ['Ok']
        }); 
        await alert.present();
    }

  tryLogin(){
    const headers = new HttpHeaders().set('Content-Type', 
        'application/json; charset=utf-8;' ); 
    console.log(this.user);
    this.http.post<dato>(
        'http://localhost:3000/login',
        JSON.stringify(this.user), {
            headers: headers
        }).subscribe(data  => {
            if(data.message){
                this.router.navigate(['/folder']);
            }else{
                this.presentSuccessRegister();
            }
        })
  

}
}

interface dato {
    message: string
}