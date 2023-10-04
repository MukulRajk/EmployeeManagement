import { NgModule } from "@angular/core";
/* import { NgModel } from "@angular/forms"; */
import {NgModel } from "@angular/forms";
import { Routes,RouterModule } from "@angular/router";

import { LoginComponent } from "./login.component";

const loginroutes:Routes=[
    {path:'',component:LoginComponent},
   
    
];  

@NgModule({
    imports:[RouterModule.forChild(loginroutes)],
    exports:[RouterModule]
})

export class LoginRoutingModule{



}
