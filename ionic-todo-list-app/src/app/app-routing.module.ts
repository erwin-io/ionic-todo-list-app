import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { SidenavPage } from '../app/sidenav/sidenav.page';

const routes: Routes = [
  {
    path: '',
    component: SidenavPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../app/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./pages/about/about.module').then(m => m.AboutPageModule)
      },
      {
        path: 'blog',
        loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogPageModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactPageModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
