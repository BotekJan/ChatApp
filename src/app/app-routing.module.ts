import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {path:'', redirectTo: 'Login', pathMatch: 'full'},
  {path:"Login", component: WelcomeComponent, data: {form: 'Login'}},
  {path:"Register", component: WelcomeComponent, data: {form: 'Register'}}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
