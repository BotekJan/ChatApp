import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  {path:"Login", component: WelcomeComponent, data: {form: 'Login'}},
  {path:"Register", component: WelcomeComponent, data: {form: 'Register'}},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
