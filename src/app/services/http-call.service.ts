import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const domainUrl = 'https://www.w3schools.com/angular/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class HTTPService {
    getAPI(requestUrl, model, successFn, failedFn) {
        const url = domainUrl + requestUrl;
        this.http.get(url).subscribe(data => {
            successFn(data);
        });
    }
    constructor(private http: HttpClient) { }
}
