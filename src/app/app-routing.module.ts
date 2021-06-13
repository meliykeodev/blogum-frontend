import { BlogDetailComponent } from './blogs/blog-detail/blog-detail.component';
import { BlogsComponent } from './blogs/blogs.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBlogComponent } from './admin/create-blog/create-blog.component';
import { CreateCategoryComponent } from './admin/create-category/create-category.component';

const routes: Routes = [
  { path: '', redirectTo: 'blogs', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'blog-detail', component: BlogDetailComponent },
  { path: 'create-post', component: CreateBlogComponent },
  { path: 'create-category', component: CreateCategoryComponent },
  { path: '**', redirectTo: 'blogs' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
