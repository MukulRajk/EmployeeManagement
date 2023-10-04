import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { mapToCanActivate } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
/* import {AuthGuard} from './guard/auth.guard'; */
/* import { AuthGuard } from './auth.guard'; */
import { CanActivateFn } from '@angular/router';
import { AuthGuardService } from './auth.guard';
import { EmployeeComponent } from './employee/employee.component';
import { LoginModule } from './login/login.module';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { Login2Component } from './login2/login2.component';


const routes: Routes = [
  
/* {path:'login',loadChildren :()  => import ('./login/login.module'),
then(p => p.LoginModule),canActivate: [AuthGuardService] 
}, */
{

  path:'login', loadChildren :() => import ('./login/login.module').
  then( p=>p.LoginModule),canActivate:[AuthGuardService]
},




{
  path:'welcome',

  component:WelcomeComponent,
  canActivate :[AuthGuardService]
},

/* {
  path:'',redirectTo :'/login', pathMatch :'full'
}, */
{
  path:'employee',component:EmployeeComponent
},
{
  path:'login2',component :Login2Component
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
