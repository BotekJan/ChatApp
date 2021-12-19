import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _url = 'https://abcabcchatapp.herokuapp.com/user';

  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get(this._url).pipe(pluck('User'));
  }

  getFilteredUsers(fil: string){
    return this.http.post(this._url + '/filter', {filter: fil})
  }

  addFriend(form :NgForm){
    return this.http.post(this._url + '/addFriend', {jmeno: form.controls.user.value})
  }

  getNotifications(){
    return this.http.get(this._url + '/notifications');
  }

  reactToNotification(obj: any, accept: boolean ){
    return this.http.post(this._url + '/notificationAnswer', {
      notif: obj,
      accept: accept
    })
  }

}
