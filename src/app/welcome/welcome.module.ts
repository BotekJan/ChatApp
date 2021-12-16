import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForbiddenValidatorDirective } from './directives/forbiddenName.directive';
import { MustMatchDirective } from './directives/matchingFields.directive';
import { usernameExistsValidatorDirective } from './directives/username-exists.directive';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { WelcomeComponent } from './welcome.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WelcomeRoutingModule } from './welcome-routing.module';



@NgModule({
  declarations: [
    WelcomeComponent,
    LoginFormComponent,
    RegisterFormComponent,
    usernameExistsValidatorDirective,
    MustMatchDirective,
    ForbiddenValidatorDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    WelcomeRoutingModule
  ],
  providers: [AuthService, AuthGuard],
})
export class WelcomeModule { }
