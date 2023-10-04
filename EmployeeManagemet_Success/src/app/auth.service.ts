import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSnapshot,Router } from '@angular/router';
import { AuthGuardService } from './auth.guard';
import { UrlTree } from '@angular/router';

import { map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users'; // Replace with the actual API endpoint

  constructor(private http: HttpClient) {}

  loginUser(firstName: string, dob: string): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      map((users: any[]) => {
        const user = users.find(
          (u) => u.firstName === firstName && u.dob === dob
        );

        if (user) {
          // Generate and return a JWT token here if needed
          return true;
        } else {
          return false;
        }
      })
    );
  }

  
}
