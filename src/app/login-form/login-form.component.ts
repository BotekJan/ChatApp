import { FormGroup, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../welcome/auth.service';
import { map, pluck } from 'rxjs/operators';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    if(form.valid){
      this.auth.loginUser(form).subscribe(res => this.logIn(res))
      form.resetForm();
      
    }
  }

  logIn(token: string){
    localStorage.setItem('token', token);
    console.log("prihlaseni")
  }
}
