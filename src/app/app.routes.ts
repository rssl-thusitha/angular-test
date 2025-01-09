import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateBlogComponent } from './pages/create-blog/create-blog.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'create-blog', component: CreateBlogComponent, canActivate: [authGuard]},
    {path:'blog-detail/:id', component: BlogDetailComponent},
    {path:'login', component: LoginComponent}
];