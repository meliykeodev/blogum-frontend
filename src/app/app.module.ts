import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogDetailComponent } from './blogs/blog-detail/blog-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './blogs/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCarouselModule } from 'ng-mat-carousel';
import { FooterComponent } from './blogs/footer/footer.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { CreateBlogComponent } from './admin/create-blog/create-blog.component';
import { CreateCategoryComponent } from './admin/create-category/create-category.component';
import { MatSelectModule } from '@angular/material/select';
import { ReversePipe } from './pipes/reverse.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    BlogsComponent,
    BlogDetailComponent,
    HeaderComponent,
    FooterComponent,
    CreateBlogComponent,
    CreateCategoryComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatCarouselModule.forRoot(),
    MatTabsModule,
    HttpClientModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
