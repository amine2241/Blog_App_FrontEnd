import { Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
<<<<<<< HEAD
import { FormComponent } from './components/form/form.component';
=======
import { LoginComponent } from './components/login/login.component';
>>>>>>> 9710822bcca9fd89c15cfdda7d1cf58f274e5764

export const routes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
<<<<<<< HEAD
  { path: 'form', component: FormComponent }
=======
  { path: 'login', component: LoginComponent }

>>>>>>> 9710822bcca9fd89c15cfdda7d1cf58f274e5764
];