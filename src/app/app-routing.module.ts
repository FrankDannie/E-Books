import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
 
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'romance',
    loadChildren: () => import('./romance/romance.module').then( m => m.RomancePageModule)
  },
  {
    path: 'action',
    loadChildren: () => import('./action/action.module').then( m => m.ActionPageModule)
  },
  {
    path: 'drama',
    loadChildren: () => import('./drama/drama.module').then( m => m.DramaPageModule)
  },
  {
    path: 'biopic',
    loadChildren: () => import('./biopic/biopic.module').then( m => m.BiopicPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
