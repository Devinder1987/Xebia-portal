import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
const domainUrl = 'http://192.168.1.140:8081/';
const httpOptions = {
    withCredentials: true,
    headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*' })
};
@Injectable()
export class HTTPService {
    getCall(requestUrl, successFn, failedFn) {
        const url = domainUrl + requestUrl;
        this.http.get(url, httpOptions).subscribe(data => {
            successFn(data);
        }, err => {
            failedFn(err);
        });
    }
    postCall(requestUrl, body, successFn, failedFn) {
        const url = domainUrl + requestUrl;
        this.http.post(url, body, httpOptions).subscribe(data => {
            successFn(data);
        }, err => {
            failedFn(err);
        });
    }
    putCall(requestUrl, body, successFn, failedFn) {
        const url = domainUrl + requestUrl;
        this.http.put(url, body, httpOptions).subscribe(data => {
            successFn(data);
        }, err => {
            failedFn(err);
        });
    }
    deleteCall(requestUrl, model, successFn, failedFn) {
        const url = domainUrl + requestUrl;
        this.http.delete(url, httpOptions).subscribe(data => {
            successFn(data);
        });
    }
    constructor(private http: HttpClient,
        private cookieService: CookieService) { }
}
