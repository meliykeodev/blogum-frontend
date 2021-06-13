import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SigninRequestModel, SigninResponseModel, SignupRequestModel, SignupResponseModel } from '../models/auth.model';
import { Rank } from '../models/rank.model';

@Injectable({ providedIn: 'root' })
export class AuthService {

  user$ = new BehaviorSubject<SigninResponseModel>(null);

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  signin(request: SigninRequestModel) {
    return this.http.post<SigninResponseModel>(environment.api + 'user/signin', request);
  }

  signup(request: SignupRequestModel) {
    return this.http.post<SignupResponseModel>(environment.api + 'user/signup', request);
  }

  setUser(user: SigninResponseModel) {
    this.user$.next(user);

    localStorage.setItem('user', JSON.stringify(user));
  }

  getUserFromLS() {
    return <SigninResponseModel | null>JSON.parse(localStorage.getItem('user'));
  }

  get isAuthorOrAdmin() {
    return this.user$?.value?.result?.user?.rank === Rank.Admin || this.user$?.value?.result?.user?.rank === Rank.Author;
  }

  logout() {
    localStorage.removeItem('user');

    this.user$.next(null);

    this.router.navigateByUrl('/signin');
  }

}