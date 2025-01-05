import { Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { FormComponent } from './components/form/form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'form', component: FormComponent }
];