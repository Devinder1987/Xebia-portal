import { Component, OnInit } from '@angular/core';
import { LoginData } from './login.model';
import { LoginApiService } from '../services/login-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model = new LoginData('', '');
  constructor(private loginApi: LoginApiService) { }
  ngOnInit() {
  }
  onSubmit = () => {
    this.loginApi.login(this.model);
  }

}
