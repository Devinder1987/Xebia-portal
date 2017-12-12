import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
const domainUrl = 'http://localhost:8080/';
@Injectable()
export class HTTPService {
    getCall(requestUrl, successFn, failedFn) {
        const url = domainUrl + requestUrl;
        this.http.get(url).subscribe(data => {
            successFn(data);
        });
    }
    postCall(requestUrl, body, successFn, failedFn,cred=false) {
        const url = domainUrl + requestUrl;
        const authToken = this.cookieService.get('connect.sid');
        
        const httpOptions = {
            withCredentials:true,
            headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*' })
        };
        this.http.post(url, body, httpOptions).subscribe(data => {
            successFn(data);

        },
            err => {
                if (err.status === 0) {
                    alert('Oops Server is on strike!!!');
                } else {
                    failedFn(err);
                }
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
    constructor(private http: HttpClient,
    private cookieService: CookieService) { }
}
