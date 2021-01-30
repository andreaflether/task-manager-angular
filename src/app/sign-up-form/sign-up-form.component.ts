import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { FormUtils } from '../shared/form.utils';

@Component({
  selector: 'sign-up-form',
  templateUrl: './sign-up-form.component.html'
})

export class SignUpFormComponent {
  public form: FormGroup;
  public formUtils: FormUtils;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: [ null, [ Validators.required, Validators.minLength(5), Validators.maxLength(100) ] ],
      email: [ null, [ Validators.required, Validators.email ] ],
      password: [ null, [ Validators.required, Validators.minLength(8) ] ],
      passwordConfirmation: [ null, [ Validators.required ] ]
    }, { validator: this.passwordConfirmationValidator })

    this.formUtils = new FormUtils(this.form);
  }

  signUpUser() {
    console.log('SignUp form was sent');
    console.log(this.form.value);
  }

  passwordConfirmationValidator(form: FormGroup) {
    if(form.get('password').dirty && form.get('password').value === form.get('passwordConfirmation').value) {
      form.get('passwordConfirmation').setErrors(null)
    } else {
      form.get('passwordConfirmation').setErrors({'mismatch': true})
    }
  }
}