import { Router } from '@angular/router';
import { AuthService } from './../../welcome/auth.service';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
  user: any;

  constructor(private userService: UserService, private auth: AuthService, private router: Router) {
    // this.auth.getUser().subscribe(res => 
    //   console.log(res), err =>{
    //   if(err instanceof HttpErrorResponse){
    //     if(err.status === 401){
    //       console.log(err)
    //       this.router.navigate(['/Login']);
    //     }    
    //   }
    // });
  }

  ngOnInit(): void {
  }

  getUser(){
    this.auth.getUser().subscribe(res => console.log(res));
  }

}
