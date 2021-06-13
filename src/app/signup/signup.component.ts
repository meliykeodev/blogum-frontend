import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from '@angular/router';
import { SignupRequestModel } from '../models/auth.model';
import { Rank } from '../models/rank.model';
import { AuthService } from '../services/auth.service';
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
      email: new FormControl("", [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      username: new FormControl('', [Validators.required]),
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
    private authService: AuthService,
    private router: Router
  ) { }

  get validaton() {
    return this.registerForm.controls;
  }

  ngOnInit(): void { }

  signup() {
    if (this.registerForm.valid) {
      const request = <SignupRequestModel>{
        ...this.registerForm.value,
        rank: Rank.User
      };

      this.authService.signup(request)
        .toPromise()
        .then(async result => {
          const signInResult = await this.authService.signin({
            email: result.email,
            password: result.password
          }).toPromise();

          if (signInResult) {
            this.authService.setUser(signInResult);

            this.router.navigateByUrl('/blogs');
          }
        })
        .catch(err => {
          console.error(err);
        })
    }
  }

}
