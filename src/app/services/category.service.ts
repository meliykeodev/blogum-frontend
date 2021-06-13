import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CategoryModel, CategoryRequestModel } from '../models/category.model';

@Injectable({ providedIn: 'root' })
export class CategoryService {

  categories$ = this.http.get<CategoryModel[]>(environment.api + 'Category');

  constructor(
    private http: HttpClient
  ) { }

  createCategory(request: CategoryRequestModel) {
    return this.http.post<CategoryModel>(environment.api + 'category', request);
  }

}