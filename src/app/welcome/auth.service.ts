import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { map, filter, catchError, mergeMap, pluck } from 'rxjs/operators';
import { Observable } from 'rxjs/Rx';
import { NgForm } from '@angular/forms';

interface usernameExists {
  message: string;
  usernameExists: boolean;
}

@Injectable()
export class AuthService {
  private _url = 'https://abcabcchatapp.herokuapp.com';

  constructor(private http: HttpClient) {}

  getDefault() {
    return this.http.get(this._url);
  }

  usernameExists(name: String): Observable<Object> {
    return this.http
      .post(this._url + '/auth/usernameExists', { jmeno: name })
      .pipe(pluck('usernameExists'));
  }

  register(form: NgForm) {
    let name = form.controls.name?.value;
    let password = form.controls.password?.value;
    return this.http.post(this._url + '/auth/register', {
      jmeno: name,
      password: password,
    });
  }
  loginUser(form: NgForm): Observable<string> {
    let name = form.controls.name?.value;
    let password = form.controls.password?.value;
    return this.http.post(this._url + '/auth/login', {
      jmeno: name,
      password: password,
    }).pipe(pluck('token'));
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }
}
