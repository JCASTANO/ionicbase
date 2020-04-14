import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticateService } from './service/authenticate.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Credential } from './model/credential';
import { UserMessage } from 'src/app/shared/message/user-message';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  loginForm: FormGroup;

  validationMessages = {
    email: [
      { type: 'required', message: UserMessage.EMAIL_REQUERIDO },
      { type: 'pattern', message: UserMessage.EMAIL_NO_VALIDO }],
    password: [
      { type: 'required', message: 'El password es requerido' }    ]
  };

  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticateService,
    private router: Router,
    private storage: Storage
  ) {
    this.initForm();
  }

  initForm() {

    const defaultEmail = 'eve.holt@reqres.in';
    const defaultPassword = 'cityslicka';

    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        defaultEmail,
        Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])
      ),
      password: new FormControl(defaultPassword, Validators.compose([Validators.required, Validators.minLength(5)]))
    });
  }

  loginUser(credential: Credential) {
    this.authService
      .loginUser(credential)
      .subscribe(response => {
        this.errorMessage = '';
        this.storage.set('userToken', response.token);
        this.router.navigate(['/tabs/users']);
      });
  }
}
