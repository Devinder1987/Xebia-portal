import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
// Router
import { AppRoutingModule } from './app.router';

// Pages
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ReportComponent } from './report/report.component';
// Service
import { LoginApiService } from './services/login-api.service';
import { HTTPService } from './services/http-call.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LoginApiService, HTTPService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
