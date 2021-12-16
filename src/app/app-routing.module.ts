import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './welcome/auth.guard';


const routes: Routes = [
  {path:'', redirectTo: 'Home', pathMatch: 'full'},
  {path:"Home", component: HomeComponent, canActivate: [AuthGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
