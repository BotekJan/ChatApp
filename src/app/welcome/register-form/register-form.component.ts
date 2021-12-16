import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(private auth : AuthService) {
  }

  ngOnInit(): void {
  
  }

  log(x: any){
    console.log(x);
  }

  onSubmit(form: NgForm){
    this.auth.register(form).subscribe(res => {console.log(res)});
    form.resetForm();
  }

}
