import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Injectable()
export class AuthService {
  private _url = 'https://abcabcchatapp.herokuapp.com';

  constructor(private http: HttpClient) {}

  getComments() {
    return this.http
      .get(this._url)
      .pipe(map((data) => {}))
      .subscribe((result) => {
        console.log(result);
      });
  }

  usernameExists(name : String) {
    return this.http
      .post(this._url + '/auth/usernameExists', {
        jmeno: name
      })
      .pipe(map((data) => {}))
      .subscribe((result) => {
        console.log(result);
      });
  }
}
