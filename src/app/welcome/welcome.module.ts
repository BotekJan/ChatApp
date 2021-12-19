import { passwordValidationDirective } from './directives/validPasswordDirective';
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
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './token-interceptor.service';



@NgModule({
  declarations: [
    WelcomeComponent,
    LoginFormComponent,
    RegisterFormComponent,
    usernameExistsValidatorDirective,
    MustMatchDirective,
    ForbiddenValidatorDirective,
    passwordValidationDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    WelcomeRoutingModule
  ],
  providers: [AuthService, AuthGuard, {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}],
})
export class WelcomeModule { }
