import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login-service.service';
import { LoginFormModel } from '../template-form/template-form.component';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  loginForm = this.fb.group(
    {
      login: new FormControl('', [
        Validators.required,
        Validators.pattern(/[a-z]+/)
      ]),
      password: ['',Validators.required]
    }
  );


  constructor(private fb: FormBuilder, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  submitForm() {
    console.log(this.loginForm);
    if(this.loginForm.invalid){
      console.log("Invalid form");
      return;
    }

    console.log("Submitted");

    let loginModel: LoginFormModel = {
      username: this.loginForm.value.login,
      password: this.loginForm.value.password
    }

    this.loginService.login(loginModel);
  }
}
