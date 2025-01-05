import { Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './components/login/login.component';
import { ArticlePageComponent } from './features/article/article-page/article-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'form', component: FormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'article', component: ArticlePageComponent }

]; 