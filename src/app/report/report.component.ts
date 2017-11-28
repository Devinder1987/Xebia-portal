import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private cookieService: CookieService) { }
  cookieValue: string;
  ngOnInit() {
    this.cookieValue = this.cookieService.get('Test');
  }

}
