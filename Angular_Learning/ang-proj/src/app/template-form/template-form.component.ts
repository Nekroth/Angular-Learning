import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login-service.service';

export interface LoginFormModel {
  username?: string;
  password?: string;
  serverId?: number;
  server?: LoginServer;
}

export interface LoginServer {
  id: number;
  name: string;
}

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {


  loginFormModel: LoginFormModel = {
    serverId: 1,
    server: {
      id: 3,
      name: 'Server3'
    }
  };
  servers: Array<LoginServer> = [
    {
      id: 1, name: "Server1"
    },
    {
      id: 2, name: "Server2"
    },
    {
      id: 3, name: "Server3"
    }
  ];

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  submitForm(form: NgForm): void {
    console.log("Model", this.loginFormModel);
    console.log("Form", form);

    if(form.invalid){
      console.log("Form is invalid");
      return;
    }

    console.log("Submitted")
    this.loginService.login(this.loginFormModel);
  }

  compareServers(a: LoginServer, b: LoginServer): boolean {
    return a && b && a.id === b.id;
  }

  get isLoggedIn():boolean {
    return this.loginService.loggedIn;
  }

  logout() {
    this.loginService.logout();
    this.loginFormModel = {};
  }
}
