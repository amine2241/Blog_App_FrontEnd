import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

interface UserData {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  firstName: string = '';
  lastName: string = '';
  private apiUrl = ' http://localhost:8080/user/testing'

  constructor(private http: HttpClient) {}

  onSubmit() {
    const userData: UserData = {
      firstName: this.firstName,
      lastName: this.lastName
    };
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = {
      headers: headers,
      responseType: 'text' as const
    };

    this.http.post(this.apiUrl, userData, options).subscribe({
      next: (response) => {
        console.log('Success:', response);
        this.firstName = '';
        this.lastName = '';
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }
}