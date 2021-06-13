import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SigninComponent implements OnInit {
  
  constructor(
    private fb: FormBuilder,
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

  ngOnInit(): void {
    this.signinForm;
  }

}
