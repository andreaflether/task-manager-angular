import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { FormUtils } from '../shared/form.utils';

@Component({
  selector: 'sign-in-form',
  templateUrl: 'Sign in'
})

export class SignInFormComponent {
  public form: FormGroup;
  public formUtils: FormUtils;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: [null, [ Validators.required, Validators.email ]],
      password: [null, Validators.required]
    });

    this.formUtils = new FormUtils(this.form);
  }

  signInUser() {
    console.log('Sign in form was submitted');
    console.log(this.form.value);
  }
}