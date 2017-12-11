import { Injectable } from '@angular/core';
import { HTTPService } from './http-call.service';

@Injectable()
export class EmployeeApiService {
    constructor(private http: HTTPService) { }
    createEmployee = (data) => {
        const url = 'create/employee/';
        const createSuccess = () => {
            console.log('Success');
        };
        const createFailed = () => {
            console.log('Failed');
        };
        this.http.postCall(url, data, createSuccess, createFailed);
    }
}
