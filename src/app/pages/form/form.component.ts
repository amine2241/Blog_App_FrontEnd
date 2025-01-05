import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

interface UserData {
  title: string;
  description: string;
}

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  title: string = '';
  description: string = '';
  private apiUrl = ' http://localhost:8080/Content/addContent'

  constructor(private http: HttpClient) {}

  onSubmit() {
    const userData: UserData = {
      title: this.title,
      description: this.description
    };
    console.log("User Data")
    console.log(userData)
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = {
      headers: headers,
      responseType: 'text' as const
    };

    this.http.post(this.apiUrl, userData, options).subscribe({
      next: (response) => {
        console.log('Success:', response);
        window.location.href='/article'
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }
}