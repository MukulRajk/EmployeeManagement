import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router } from '@angular/router';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { UrlTree } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Route } from '@angular/router';
import { catchError,retry,throwError } from 'rxjs';

import { JwtHelperService } from '@auth0/angular-jwt';





@Injectable({
  providedIn: 'root',
})


export class AuthGuardService implements CanActivate {

    private apiUrl = 'http://localhost:3000/users'; 
  private isAuthenticated: boolean = false;

  constructor(
    private authService: AuthService,
    
    private http:HttpClient,
    private router: Router,
    private jwtHelper: JwtHelperService
    ) {}
  
    /* authenticate */
    setAuthenticationStatus(status: boolean) {
        this.isAuthenticated = status;
      }

      // Add a method to check if the user is authenticated
      isLoggedIn(): boolean {
        return this.isAuthenticated;
      }


      loginUser(firstName: string, dob: string): Observable<boolean> {
        return this.http.get<any[]>(this.apiUrl).pipe(
          map((users: any[]) => {
            const user = users.find(
              (u) => u.firstName === firstName && u.dob === dob
            );
            

            if (user) {
              this.setAuthenticationStatus(true);
              return true;
            } else {
              this.setAuthenticationStatus(false);
              return false;
            }
          })
        );
      }
    
    
    
    
    
    


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> 
   {

    
    if (this.isLoggedIn() ) {
      return true;
    } else {
        return this.router.createUrlTree(['/login']);
    }
  }
  
  
  
}
