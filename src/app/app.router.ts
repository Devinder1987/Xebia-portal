import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReportComponent } from './report/report.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent},
  { path: 'home/employee', component: EmployeeComponent },
  { path: 'home/project', component: ProjectComponent }
    
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,
    { enableTracing: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
