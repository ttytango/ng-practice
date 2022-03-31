import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
  },
  {
    path: 'common',
    loadChildren: () => import('./common/utils/utils.module').then(m => m.UtilsModule)
  },
  {
    path: 'linked-lists',
    loadChildren: () => import('./list/list.module').then(m => m.ListModule)
  },
  {
    path: 'bst', loadChildren: () => import('./bst/bst.module').then(m => m.BstModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
