/* app.module.ts */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { Login2Component } from './login2/login2.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CanActivate } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    Login2Component,
    LoginComponent,
    WelcomeComponent,
    /* HeaderComponent */
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
