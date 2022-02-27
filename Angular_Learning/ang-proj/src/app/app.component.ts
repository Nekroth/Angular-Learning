import { Component } from '@angular/core';
import { LoginService } from './login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ang-proj';

  constructor(private loginService: LoginService) {

  }

  get loggedIn(){
    return this.loginService.loggedIn;
  }
  get username(){
    return this.loginService.username;
  }
}
