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
    return this.http.post(this._url + '/filtered', {filter: fil})
  }

}
