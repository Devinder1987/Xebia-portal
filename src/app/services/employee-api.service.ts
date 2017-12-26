import { Injectable } from '@angular/core';
import { HTTPService } from './http-call.service';

@Injectable()
export class EmployeeApiService {
    constructor(private http: HTTPService) { }
    createEmployee = (data, successFn, failedFn) => {
        const url = 'create/employee/';
        const createSuccess = () => {
            successFn();
        };
        const createFailed = () => {
            failedFn();
        };
        this.http.postCall(url, data, createSuccess, createFailed);
    }
    editEmployee = (data, successFn, failedFn) => {
        const url = `employee/${data.emp_id}`;
        const createSuccess = () => {
            successFn();
        };
        const createFailed = () => {
            failedFn();
        };
        this.http.putCall(url, data, createSuccess, createFailed);
    }
    employeeList = (success, failed) => {
        const url = 'employeelist/';
        const successFn = (data) => {
            success(data);
        };
        const failedFn = (err) => {
            failed(err);
        };
        this.http.getCall(url, successFn, failedFn);
    }
    empDetail = (empID, success, failed) => {
        const url = `employee/${empID}`;
        const successFn = (data) => {
            success(data);
        };
        const failedFn = (err) => {
            failed(err);
        };
        this.http.getCall(url, successFn, failedFn);
    }
}
