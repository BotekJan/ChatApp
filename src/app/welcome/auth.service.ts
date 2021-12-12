import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { map, filter, catchError, mergeMap, pluck } from 'rxjs/operators';
import { Observable } from 'rxjs/Rx';

interface usernameExists{
  message: string,
  usernameExists: boolean
}

@Injectable()
export class AuthService {
  private _url = 'https://abcabcchatapp.herokuapp.com';

  constructor(private http: HttpClient) {}

  getComments() {
    return this.http.get(this._url);
      
  }

  usernameExists(name : String): Observable<Object> {
    return this.http.post(this._url + '/auth/usernameExists', {jmeno: name}).pipe(pluck('usernameExists'))
  }

  loginUser(form: FormGroup): Observable<Object>{
    return this.http.post(this._url + "/auth/login", form);
  }
}

