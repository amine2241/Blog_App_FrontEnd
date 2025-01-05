import { Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { FormComponent } from './pages/form/form.component';
import { LoginComponent } from './pages/login/login.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'form', component: FormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'article', component: ArticlePageComponent }

]; 