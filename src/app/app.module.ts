import { MustMatchDirective } from './directives/matchingFields.directive';
import { usernameExistsValidatorDirective } from './directives/username-exists.directive';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AuthService } from './welcome/auth.service';
import { forbiddenNameValidator } from './validators/forbiddenName.validator';
import { ForbiddenValidatorDirective } from './directives/forbiddenName.directive';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginFormComponent,
    RegisterFormComponent,
    usernameExistsValidatorDirective,
    MustMatchDirective,
    ForbiddenValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
