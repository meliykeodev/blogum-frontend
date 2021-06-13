import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from '@angular/router';
import { SigninRequestModel } from '../models/auth.model';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SigninComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  signinForm = this.fb.group(
    {
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
      ]),
    }
  );

  get validaton() {
    return this.signinForm.controls;
  }

  ngOnInit(): void { }

  signin() {
    if (this.signinForm.valid) {
      const request = this.signinForm.value as SigninRequestModel;

      this.authService.signin(request)
        .toPromise()
        .then(result => {
          if (!result.isSuccess) {
            alert(result.error);

            return false;
          }

          this.authService.setUser(result);

          this.router.navigateByUrl('/blogs');
        })
        .catch(err => {
          console.error(err)
        })
    }
  }

}
