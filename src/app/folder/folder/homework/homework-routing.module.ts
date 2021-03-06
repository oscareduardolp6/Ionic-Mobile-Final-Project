import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeworkPage } from './homework.page';

const routes: Routes = [
  {
    path: '',
    component: HomeworkPage
  },
  {
    path: 'homework-detail',
    loadChildren: () => import('./homework-detail/homework-detail.module').then( m => m.HomeworkDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeworkPageRoutingModule {}
