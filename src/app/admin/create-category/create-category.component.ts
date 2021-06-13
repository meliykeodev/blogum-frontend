import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {

  categoryForm = new FormGroup({
    name: new FormControl('', [Validators.required])
  })

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createCategory() {
    if (this.categoryForm.valid) {
      const request = this.categoryForm.value;

      this.categoryService.createCategory(request)
        .toPromise()
        .then(result => {
          console.log(result);
        })
        .catch(err => {
          console.error(err);
        })
        .finally(() => {
          this.categoryForm.reset();
          // this.router.navigateByUrl('/blogs');
        });
    }
  }

}
