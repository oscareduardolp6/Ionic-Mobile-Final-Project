import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    children: [
        {
            path: '', 
            loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
        }, 
        {
            path: 'homework',
            loadChildren: () => import('./folder/homework/homework.module').then( m => m.HomeworkPageModule)
        }, 
        {
            path: 'homework-detail', 
            loadChildren: () => import('./folder/folder/homework/homework-detail/homework-detail.module').then( m => m.HomeworkDetailPageModule)
        }
    ]
  },
  {
    path: 'notoes',
    loadChildren: () => import('./notoes/notoes.module').then( m => m.NotoesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
