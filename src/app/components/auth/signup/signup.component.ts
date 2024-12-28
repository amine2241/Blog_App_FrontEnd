import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
        </div>
        <form class="mt-8 space-y-6" [formGroup]="signupForm" (ngSubmit)="onSubmit()">
          <div class="rounded-md shadow-sm space-y-4">
            <div>
              <label for="firstName" class="block text-sm font-medium text-gray-700">First Name</label>
              <input id="firstName" type="text" formControlName="firstName" class="input">
            </div>
            <div>
              <label for="lastName" class="block text-sm font-medium text-gray-700">Last Name</label>
              <input id="lastName" type="text" formControlName="lastName" class="input">
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input id="email" type="email" formControlName="email" class="input">
            </div>
            <div>
              <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
              <input id="password" type="password" formControlName="password" class="input">
            </div>
            <div>
              <label for="role" class="block text-sm font-medium text-gray-700">Role</label>
              <select id="role" formControlName="role" class="input">
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </select>
            </div>
          </div>

          @if (error) {
            <div class="text-red-500 text-sm">{{ error }}</div>
          }

          <button type="submit" class="btn btn-primary w-full">Sign up</button>

          <div class="text-center">
            <a routerLink="/login" class="text-sm text-blue-600 hover:text-blue-500">
              Already have an account? Log in
            </a>
          </div>
        </form>
      </div>
    </div>
  `
})
export class SignupComponent {
  signupForm: FormGroup;
  error: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['student', Validators.required]
    });
  }

  async onSubmit() {
    if (this.signupForm.valid) {
      try {
        const { firstName, lastName, email, password, role } = this.signupForm.value;
        //await this.authService.signUp(email, password, firstName, lastName, role);
        await this.router.navigate(['/posts']);
      } catch (err: any) {
        this.error = err.message || 'An error occurred during signup';
      }
    }
  }
}
