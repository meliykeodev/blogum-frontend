import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {

  categories$ = this.categoryService.categories$;

  postForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    categoryId: new FormControl(-1, [Validators.required])
  })

  constructor(
    private categoryService: CategoryService,
    private blogService: BlogService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createPost() {
    if (this.postForm.valid) {
      const request = {
        ...this.postForm.value
      }

      this.blogService.createPost(request)
        .toPromise()
        .then(result => {
          console.log(result);
        })
        .catch(err => {
          console.error(err);
        })
        .finally(() => {
          this.postForm.reset();
          // this.router.navigateByUrl('/blogs');
        })

    } else {
      alert('Formu eksiksiz doldurunuz.')
    }
  }

}
