import { Router } from '@angular/router';
import { AuthService } from './../../welcome/auth.service';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
  user: any;
  chatsPage = true;
  private username: any;
  constructor(private userService: UserService, private auth: AuthService, private router: Router) {
    this.chatsPage = router.url === "/Home"
  }

  ngOnInit(): void {
    this.userService.getUser().subscribe(res => 
      this.user = res, err =>{
      if(err instanceof HttpErrorResponse){
        if(err.status === 401){
          console.log(err)
          this.router.navigate(['/Login']);
        }    
      }
    });
    this.userService.getUser().pipe(pluck('jmeno')).subscribe(res => this.username = res)
  }

  getUsername(){
    return this.username
  }

  logoutUser(){
    this.auth.logoutUser();
    this.router.navigate(['/Login'])
  }

  switchPages(){
    
  }

}
