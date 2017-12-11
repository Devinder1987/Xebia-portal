import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginData } from '../services/model.service';
import { LoginApiService } from '../services/login-api.service';
import { ModalService } from '../modal/modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginApiService]
})
export class LoginComponent implements OnInit {
  @Output() showPopup = new EventEmitter<boolean>();
  model = new LoginData('', '');
  LoginSuccess = false;
  constructor(private loginApi: LoginApiService,
    private modal: ModalService) { }
  ngOnInit() {
  }
  onSubmit = () => {
    this.showPopup.emit(true);
    this.loginApi.login(this.model, this.loginSuccess, this.loginFailed);
    this.LoginSuccess = !this.loginApi.LoginSuccess;
  }
  loginSuccess = () => {
    console.log('Success');
  }
  loginFailed = () => {
    this.modal.modalHeader = 'Invalid Login Credentials';
    this.modal.modalBody = 'Either Login user name or password are wrong.';
    this.modal.hideModal = false;
  }
}
