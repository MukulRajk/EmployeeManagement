//login2.component.ts

import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component {

login2Form = new FormGroup({

  FirstName: new FormControl('',[Validators.required,Validators.minLength(3)]),
  dob:new FormControl('',[Validators.required,Validators.minLength(3)])

})

IsAuthenticationFailed:boolean;


    constructor( private route:Router, private httpClient: HttpClient){
      this.IsAuthenticationFailed=false;
    }



    login2(){
     if( this.login2Form.valid){


        if(this.authenticate(this.login2Form.value.FirstName,this.login2Form.value.dob)){
          window.alert('Login successful!');
        this.route.navigate(['/employee'])

        }

        else{
          this.IsAuthenticationFailed=true;
        }
      }
    }
      authenticate(firstName: string, dob: string): boolean {
        // Implement your authentication logic here
        const employees = [
          { firstName: 'John', dob: '1990-01-15' },
          { firstName: 'Alice', dob: '2023-09-23' },
          // Add more employee data here
        ];

        const matchedEmployee = employees.find(
          (employee) =>
            employee.firstName === firstName && employee.dob === dob
        );
      
        // If a matching employee is found, consider it a successful authentication
        return !!matchedEmployee;



      

    


 /* http://localhost:4000/signin => http://localhost:59347/ */
 this.httpClient.post("http://localhost:4000/signin", this.login2Form.value).subscribe((response : object) => {
  /*    if you check signin method in server.js code
        either will return token or will return error   */
    //console.log(Object.keys(response)  )              
    if (Object.keys(response)[0] != "token"){
           this.IsAuthenticationFailed=true
    }
    else {

      //store token value in local storage =key:value
      localStorage.setItem("token",JSON.stringify(Object.values(response)));
      let firstname=this.login2Form.controls.FirstName.value;

      localStorage.setItem("firstname",JSON.stringify(firstname));
      /* let password=this.loginForm.controls.Password.value; */
        this.route.navigate(['employee'])
    }
  })


}



}