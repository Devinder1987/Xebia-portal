import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const domainUrl = 'http://localhost:3000/';
const httpOptions = {
  headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*'})
};
@Injectable()
export class HTTPService {
    getCall(requestUrl, successFn, failedFn) {
        const url = domainUrl + requestUrl;
        this.http.get(url).subscribe(data => {
            successFn(data);
        });
    }
    postCall(requestUrl, body, successFn, failedFn) {
        const url = domainUrl + requestUrl;
        body = {
            username: 'Devinder',
            password: 'Suthwal'
        };
        this.http.post(url, body, httpOptions).subscribe(data => {
            successFn(data);
        },
        err => {
            failedFn();
        });
    }
    putCall(requestUrl, model, successFn, failedFn) {
        const url = domainUrl + requestUrl;
        this.http.get(url).subscribe(data => {
            successFn(data);
        });
    }
    deleteCall(requestUrl, model, successFn, failedFn) {
        const url = domainUrl + requestUrl;
        this.http.get(url).subscribe(data => {
            successFn(data);
        });
    }
    constructor(private http: HttpClient) { }
}
