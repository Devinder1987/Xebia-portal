import { Component, OnInit } from '@angular/core';
import { SearchID } from '../services/model.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  seachModel = new SearchID('');
  suggestionList = [1234, 2345, 3456];
  showSuggestion: Boolean = false;
  homePages = [
    // {routerLink: '/login', routerText: 'Login'},
    {routerLink: '/home/empdetails', routerText: 'Create Employee'},
    {routerLink: '/home/pReport', routerText: 'Project Report'},
    {routerLink: '/home/eReport', routerText: 'Employee Report'},
    {routerLink: '/home/eSearch', routerText: 'Employee Search'}
  ];
  constructor() { }

  ngOnInit() {
  }
  autoSuggest = (event) => {
    if (event.length > 2) {
      this.showSuggestion = true;
    }else {
      this.showSuggestion = false;
    }
  }
}
