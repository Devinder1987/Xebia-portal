import { Injectable } from '@angular/core';
import { HTTPService } from './http-call.service';

@Injectable()
export class EmployeeApiService {
    constructor(private http: HTTPService) { }
    createEmployee = (data, successFn, failedFn) => {
        const url = 'create/employee/';
        const createSuccess = () => {
            console.log('Success');
            successFn();
        };
        const createFailed = () => {
            console.log('Failed');
            failedFn();
        };
        this.http.postCall(url, data, createSuccess, createFailed);
    }
    // employeeList = (data) => {
    //     const url = 'employeelist/';
    //     const successFn = () => {
    //         console.log('Success');
    //     };
    //     const failedFn = () => {
    //         console.log('Failed');
    //     };
    //     this.http.getCall(url, successFn, failedFn);
    // }
    // fetchEmpoyeByID = (data) => {
    //     const url = '/employee/:id/';
    //     const successFn = () => {
    //         console.log('Success');
    //     };
    //     const failedFn = () => {
    //         console.log('Failed');
    //     };
    //     this.http.getCall(url, successFn, failedFn);
    // }
}
