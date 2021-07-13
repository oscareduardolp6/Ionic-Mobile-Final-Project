import { Component, OnInit } from '@angular/core';
import { AlertController } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HttpClient, HttpHeaders } from "@angular/common/http";
import * as tipo from "../model/User"; 

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
    private today = new Date();
    public groups: Selection[] = []; 
    public user_user: string; 
    public password1: string;
    public password2: string; 

    public date: Date = new Date()

    public person: tipo.Person = {
        curp: '', 
        names: '', 
        lastNameMother: '', 
        lastNameFather: '', 
        borningDate: this.date, 
        age: 6
    }  

    public group: tipo.Group = {
        grade: 5, 
        group: "B"
    }


  constructor(public alertController: AlertController, private http: HttpClient) {}


    ngOnInit() {
        this.fillTheGroups();
    } 

    fillTheGroups(){
        for (let index = 1; index < 7; index++) {
            const select: Selection = {
                value: index, 
                text: `${index}°`,
                selected: index=== 1
            }
            this.groups.push(select);
        }
    }

    clearUserFields(){
        this.password1 = ''; 
        this.password2 = ''; 
        this.user_user = ''; 
    }

    async presentSuccessRegister(){
        const alert = await this.alertController.create({
            header: 'Exito', 
            subHeader: 'Usuario registrado con exito', 
            message: `Se ha registrado al usurio ${this.user_user}`,
            buttons: ['Ok']
        }); 
        await alert.present();
        this.clearUserFields(); 
    }

    async presentAlert(){
        const alert = await this.alertController.create({
            header: 'Problema', 
            subHeader: 'Contraseñas no coinciden', 
            message: 'Las constraseñas no coinciden, vuelva a ingresar', 
            buttons: ['Ok']
        }); 
        await alert.present();
        const {role} = await alert.onDidDismiss(); 
        this.clearUserFields();
    }

    comparePasswords(): boolean{
        const areThePassEquals: boolean = this.password1 === this.password2
        if(!areThePassEquals){
            this.presentAlert(); 
            return false; 
        }
        return true; 
    }

    submitUser(){
        if(this.comparePasswords()){
            const headers = new HttpHeaders().set('Content-Type', 
            'application/json; charset=utf-8;' )
            const user: NewUser = {
                user: this.user_user, 
                active: true, 
                password: this.password1
            }
            this.http.post(
                'http://localhost:3000/users', 
                JSON.stringify(user), {
                    headers: headers
                }).subscribe(data => this.presentSuccessRegister()) 
        }
    }

    submitUser2(){
        if(this.comparePasswords()){
            const headers = new HttpHeaders().set('Content-Type', 
            'application/json; charset=utf-8;' ); 
            const user: NewUser = {
                user: this.user_user, 
                active: true, 
                password: this.password1
            };
            const submit: tipo.submitUser = {
                user: user, 
                person: this.person, 
                group: this.group
            }
            this.http.post(
                'http://localhost:3000/register',
                JSON.stringify(submit), {
                    headers: headers
                }).subscribe(data => this.presentSuccessRegister()); 
        }
    }
}

interface Selection{
    value: number 
    text: string
    selected: boolean
}

interface NewUser {
    user: string,
    active: boolean,
    password: string
}
