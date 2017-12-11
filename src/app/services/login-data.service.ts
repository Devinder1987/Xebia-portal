import { Injectable } from '@angular/core';

@Injectable()
export class LoginDataService {
    loginSuccess: boolean;

    setLoginSuccess = (value) => {
        this.loginSuccess = value;
    }
    getLoginSuccess = () => {
        return this.loginSuccess;
    }
}
