import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BlogRequestModel, GetBlogsResponseModel } from '../models/blog.model';

@Injectable({ providedIn: 'root' })
export class BlogService {
  blogs$ = this.http.get<GetBlogsResponseModel>(environment.api + 'Post');

  constructor(
    private http: HttpClient
  ) { }

  createPost(request: BlogRequestModel) {
    return this.http.post(environment.api + 'post', request);
  }

}