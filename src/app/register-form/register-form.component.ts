import { Component, OnInit } from '@angular/core';
import { AuthService } from '../welcome/auth.service';
@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(private auth : AuthService) {
    auth.usernameExists('Adolf').subscribe(res => console.log(res));
  }

  ngOnInit(): void {
  
  }

  log(x: any){
    console.log(x);
  }

  onSubmit(){
    console.log()
  }

}
