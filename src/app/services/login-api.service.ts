import { Injectable } from '@angular/core';
import { HTTPService } from './http-call.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable()
export class LoginApiService {
  LoginSuccess: boolean;
  errorMsg: string;
  constructor(private http: HTTPService,
    private cookieService: CookieService,
    private router: Router) { }
  login = (model, success, failed) => {
    const url = `login`; // ?username=${model.userName}&password=${model.password}`;
    const data = {
      username: model.userName,
      password: model.password
    };
    const loginSuccess = (successData) => {
      switch (successData.code) {
        case 1000:
          // this.cookieService.set('authToken', successData.authToken);
          this.router.navigate(['./home']);
          this.LoginSuccess = true;
          success();
          break;
        default:
          this.LoginSuccess = false;
          failed();
          break;
      }
    };
    const LoginFailed = (err) => {
      this.errorMsg = err.error.description;
      failed();
    };
    this.http.postCall(url, data, loginSuccess, LoginFailed);
  }
  // loginSuccess = (data) => {
  //   switch (data.code) {
  //     case 1000:
  //       this.cookieService.set('authToken', data.authToken);
  //       this.router.navigate(['./home']);
  //       this.LoginSuccess = true;
  //       break;
  //     default:
  //       this.LoginSuccess = false;
  //       break;
  //   }

  // }
  // LoginFailed = (err) => {
  //   this.errorMsg = err.error.description;
  // }
}
