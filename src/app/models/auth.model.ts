import { Base } from './base.model';
import { Rank } from './rank.model';

export interface SigninRequestModel {
  email: string;
  password: string;
}

export interface SignupRequestModel {
  name: string;
  surname: string;
  username: string;
  email: string;
  password: string;
}

export interface SigninResponseModel {
  isSuccess: boolean;
  error: string;
  result?: {
    user?: {
      name: string;
      surname: string;
      username: string;
      password: string;
      rank: Rank,
      id: number;
      createAt: Date;
      modifiedDate: Date;
      isActive: boolean;
    },
    token?: {
      token: string;
      userId: number;
      expiredDate: Date;
      hasExpired: boolean;
    }
  }
}

export interface SignupResponseModel extends Base {
  name: string;
  surname: string;
  username: string;
  email: string;
  password: string;
}