import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Iteration6Component } from './iteration-6.component';

export const routes: Routes = [
  {
    path: '',
    component: Iteration6Component,
    children: [
      { path: '', redirectTo: 'modules', pathMatch: 'full' },
      { path: 'modules', loadChildren: 'app/book-monkey/iteration-6/modules/app.module#AppModule' },
      { path: 'lazy-loading', loadChildren: 'app/book-monkey/iteration-6/lazy-loading/app.module#AppModule' },
      { path: 'guards', loadChildren: 'app/book-monkey/iteration-6/guards/app.module#AppModule' },
      { path: 'resolver', loadChildren: 'app/book-monkey/iteration-6/resolver/app.module#AppModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class Iteration6RoutingModule { }
