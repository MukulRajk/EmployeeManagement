/* app.module.ts */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from '../employee/employee.component';
import { HeaderComponent } from '../header/header.component';
import { Login2Component } from '../login2/login2.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
@NgModule({
  declarations: [
    
    
    
  

    
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class LoginModule { }
