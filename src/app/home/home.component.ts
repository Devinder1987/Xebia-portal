import { Component, OnInit } from '@angular/core';
import { SearchID } from '../services/model.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) { }

  showEmployee = () => {
    this.router.navigateByUrl('/home/employee');
  }
  ngOnInit() {
  }
}
