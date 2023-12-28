import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Test1ListComponent } from './test1-list/test1-list.component';

const routes: Routes = [
  { path: 'list', component:Test1ListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
