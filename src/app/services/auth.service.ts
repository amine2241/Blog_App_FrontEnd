import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, of, tap } from 'rxjs';


export interface UserRegistration {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export interface RegistrationResponse {
  success: boolean;
  message: string;
  user?: any;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  email: string;
  fullName: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/user';
  private headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  private currentUserSubject = new BehaviorSubject<LoginResponse | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      this.currentUserSubject.next(JSON.parse(savedUser));
    }
  }

  register(user: UserRegistration): Observable<RegistrationResponse> {
    return this.http.post(
      `${this.apiUrl}/registration`,
      user,
      { 
        headers: this.headers,
        responseType: 'text'
      }
    ).pipe(
      map((response: any) => ({
        success: true,
        message: response
      } as RegistrationResponse)),
      tap((response: any) => {
        console.log('Registration success:', response);
      }),
      catchError(error => {
        console.error('Registration error:', error);
        return of({
          success: false,
          message: error.error || 'Registration failed'
        } as RegistrationResponse);
      })
    );
  }

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, credentials,
      { headers: this.headers })
      .pipe(
        tap(response => {
          localStorage.setItem('currentUser', JSON.stringify(response));
          this.currentUserSubject.next(response);
        }),
      catchError(error => {
        console.error('Registration error:', error);
        throw error;
      })
      );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  isLoggedIn(): boolean {
    return !!this.currentUserSubject.value;
  }

  getToken(): string | null {
    return this.currentUserSubject.value?.token || null;
  }

}