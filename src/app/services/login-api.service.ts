import { Injectable } from '@angular/core';
import { HTTPService } from './http-call.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class LoginApiService {
  constructor(private http: HTTPService,
    private cookieService: CookieService) { }
  login = (model) => {
    const url = `login`; // ?username=${model.userName}&password=${model.password}`;
    const data = {
      username: model.userName,
      password: model.password
    };
    this.http.postCall(url, data, this.loginSuccess, this.LoginFailed);
  }
  loginSuccess = (data) => {
    // Authentication Key to be saved in cookie.
    this.cookieService.set( 'Test', 'Hello World' );
    alert(`login success ${data}`);
  }
  LoginFailed = () => {

  }
}
