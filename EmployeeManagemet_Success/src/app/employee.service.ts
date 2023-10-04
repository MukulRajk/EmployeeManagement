//employee.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:3000/employees'; // Adjust the URL to your JSON server

  constructor(private http: HttpClient) {}

  // GET Employee Records
  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // POST Employee Data
  addEmployee(employeeData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, employeeData);
  }

  // PUT (Update) Employee Data
  updateEmployee(id: number, employeeData: any): Observable<any> {
    const updateUrl = `${this.apiUrl}/${id}`;
    return this.http.put<any>(updateUrl, employeeData);
  }

  // DELETE Employee Data
  deleteEmployee(id: number): Observable<any> {
    const deleteUrl = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(deleteUrl);
  }
}
