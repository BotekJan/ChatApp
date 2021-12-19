import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {
  notifications: any = [];
  constructor(private userService: UserService) { 
    this.getNotifications()
  }

  ngOnInit(): void {
  }

  getNotifications(){
    this.userService.getNotifications().pipe(pluck('notifications')).subscribe(res => {
      this.notifications = res
      console.log(res)
    });
  }

  react(accept: boolean, index: number){
    this.userService.reactToNotification(this.notifications[index], accept);
    this.notifications.splice(index,1);
  }
}
