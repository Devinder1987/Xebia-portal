import { Injectable } from '@angular/core';
import { HTTPService } from './http-call.service';


@Injectable()
export class LoginApiService {

  login = (model) => {
    const url = 'customers.php';
    this.http.getAPI(url, model, this.loginSuccess, this.LoginFailed);
  }
  loginSuccess = (data) => {
    alert(`login success ${data}`);
    console.log(data);
  }
  LoginFailed = () => {

  }
  constructor(private http: HTTPService) { }

}
