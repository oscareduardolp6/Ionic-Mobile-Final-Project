import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },
  {
    path: 'homework',
    loadChildren: () => import('./folder/homework/homework.module').then( m => m.HomeworkPageModule)
  },
  {
    path: 'homework',
    loadChildren: () => import('./homework/homework.module').then( m => m.HomeworkPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
