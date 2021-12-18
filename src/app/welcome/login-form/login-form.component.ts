import { Router } from '@angular/router';
import { FormGroup, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { map, pluck } from 'rxjs/operators';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private auth : AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    if(form.valid){
      this.auth.loginUser(form).subscribe(res => {
        localStorage.setItem('token', res)
        console.log(res)
        this.router.navigate(['/Home']);
      })
      
    }
  }
}
