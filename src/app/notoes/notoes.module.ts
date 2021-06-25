import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotoesPageRoutingModule } from './notoes-routing.module';

import { NotoesPage } from './notoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotoesPageRoutingModule
  ],
  declarations: [NotoesPage]
})
export class NotoesPageModule {}
