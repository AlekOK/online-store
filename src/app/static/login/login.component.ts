import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  loginForm:  any;
  token: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  get login() {
    return this.loginForm.get('login');
  }

  get psw() {
    return this.loginForm.get('psw');
  }

  initForm() {
    this.loginForm = new FormGroup({
      login: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(16)
      ]),
      psw: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(16)
      ])
    })
  }

  onFormSubmit() {
    console.log("login")
  }


}
