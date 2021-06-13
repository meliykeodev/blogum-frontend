import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }
    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerForm = this.fb.group(
    {
      name: new FormControl("", Validators.required),
      surname: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]
        ),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
      ]),
      repassword: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
      ]),
    },
    [
      {
        validator: MustMatch("password", "repassword"),
      },
    ]
  );
  constructor(
    private fb: FormBuilder,
  ) {}

  get validaton() {
    return this.registerForm.controls;
  }

  ngOnInit(): void {
    this.registerForm;
  }

}
