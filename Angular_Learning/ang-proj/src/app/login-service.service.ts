import { Injectable } from '@angular/core';
import { LoginFormModel } from './template-form/template-form.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isLoggedIn = false;
  private loginForm: LoginFormModel = {};

  constructor() { 
    console.log("Service created")
  }

  login(login: LoginFormModel): void {
    console.log("Logging in", login.username);
    this.isLoggedIn = true;
    console.log('Login succesful');
    this.loginForm = login;
    this.loginForm.password = undefined;
  }

  logout() {
    this.isLoggedIn = false;
    this.loginForm = {};
  }
  get loggedIn(): boolean {
    return this.isLoggedIn;
  }
  get username(): string | undefined{
    return this.loginForm.username;
  }
}
