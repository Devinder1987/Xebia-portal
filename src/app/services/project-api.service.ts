import { Injectable } from '@angular/core';
import { HTTPService } from './http-call.service';

@Injectable()
export class ProjectApiService {
    constructor(private http: HTTPService) { }
    createEmployee = (data, successFn, failedFn) => {
        const url = 'create/employee/';
        const createSuccess = (result) => {
            successFn(result);
        };
        const createFailed = (err) => {
            failedFn(err);
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
    projectList = (success, failed) => {
        const url = 'projectlist/';
        const successFn = (data) => {
            success(data);
        };
        const failedFn = (err) => {
            failed(err);
        };
        this.http.getCall(url, successFn, failedFn);
    }
    projDetail = (projID, success, failed) => {
        const url = `project/${projID}`;
        const successFn = (data) => {
            success(data);
        };
        const failedFn = (err) => {
            failed(err);
        };
        this.http.getCall(url, successFn, failedFn);
    }
    empAddressCreate = (empID, address, success, failed) => {
        const url = `address/${empID}`;
        const successFn = (data) => {
            success(data);
        };
        const failedFn = (err) => {
            failed(err);
        };
        this.http.postCall(url, address, successFn, failedFn);
    }
    empAddressUpdate = (data, address, successFn, failedFn) => {

    }
}
