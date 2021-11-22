import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../welcome/auth.service';
@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  message: Subscription = new Subscription();

  constructor(private auth : AuthService) {
    this.message = this.auth.getComments();
    console.log(this.message);
    this.message = this.auth.usernameExists('Adolf');
    console.log(this.message);
   }

  ngOnInit(): void {
  }


}
