import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {
  notifications: any;
  constructor(private userService: UserService) { 
    this.getNotifications()
  }

  ngOnInit(): void {
  }

  getNotifications(){
    this.userService.getNotifications().subscribe(res => {
      this.notifications = res
      console.log(res)
    });
  }


}
