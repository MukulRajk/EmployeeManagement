import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ems';
}
