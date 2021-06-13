import { BlogDetailComponent } from './blogs/blog-detail/blog-detail.component';
import { BlogsComponent } from './blogs/blogs.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBlogComponent } from './admin/create-blog/create-blog.component';
import { CreateCategoryComponent } from './admin/create-category/create-category.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'blogs', component: BlogsComponent, canActivate: [AuthGuard] },
  { path: 'blog-detail', component: BlogDetailComponent, canActivate: [AuthGuard] },
  { path: 'create-post', component: CreateBlogComponent, canActivate: [AuthGuard] },
  { path: 'create-category', component: CreateCategoryComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'blogs' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
