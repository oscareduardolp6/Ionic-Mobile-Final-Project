import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotoesPage } from './notoes.page';

const routes: Routes = [
  {
    path: '',
    component: NotoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotoesPageRoutingModule {}
