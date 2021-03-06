import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetBlogsResponseModel } from '../models/blog.model';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  blogs$: Observable<GetBlogsResponseModel>;

  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.blogs$ = this.blogService.blogs$;
  }
}
