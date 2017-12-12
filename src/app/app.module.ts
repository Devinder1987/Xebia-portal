import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { NgDatepickerModule } from 'ng2-datepicker';
// Router
import { AppRoutingModule } from './app.router';

// Pages
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './home/about.component';
import { ReportComponent } from './report/report.component';
import { ModalComponent, ModalService } from './modal/modal.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee/employee-details.component';

// Service
import { LoginApiService } from './services/login-api.service';
import { HTTPService } from './services/http-call.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    ReportComponent,
    ModalComponent,
    EmployeeComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgDatepickerModule
  ],
  providers: [LoginApiService, HTTPService, CookieService, ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
