import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReportComponent } from './report/report.component';
import { AboutComponent } from './home/about.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee/employee-details.component';
import { AddressComponent } from './employee/address-component';
import { SkillsComponent } from './employee/skills-component';
import { SingleSkillsComponent } from './employee/single-skill-component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, children :
    [
      { path: '', component: EmployeeComponent },
      { path: 'empdetails', component: EmployeeDetailsComponent },
      { path: 'address', component: AddressComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'singleskills', component: SingleSkillsComponent },
      { path: 'report', component: ReportComponent, children: [
        { path: ':id', component: EmployeeDetailsComponent }
      ] }
    ]
  },
//   { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
