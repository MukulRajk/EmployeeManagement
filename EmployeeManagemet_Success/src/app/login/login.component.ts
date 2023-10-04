// login.component.ts
import { Component } from '@angular/core';
/* import { AuthService } from '../auth/auth.service'; */
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { AppModule } from '../app.module';
import { AppRoutingModule } from '../app-routing.module';
import { retry,catchError,throwError
 } from 'rxjs';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
 /*  login : Login=new Login(); */
  firstName: string = '';
  dob: string = '';

  constructor(private authService: AuthService, 
    private router: Router) {}

  login() {
    this.authService.loginUser(this.firstName, this.dob).subscribe(
      (result) => {
        if (result) {
          window.alert('Login successful!');
          this.router.navigate(['/employee']);
        } else {
         window.alert('Invalid credentials. Please try again.');
        }
      },
      (error) => {
        console.error(error);
        window.alert('An error occurred. Please try again later.');
        return throwError('Something went wrong');
      }
    );
  }
}
