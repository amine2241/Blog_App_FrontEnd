import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
<<<<<<< HEAD
import { FormComponent } from './components/form/form.component';
=======
import { LoginComponent } from './components/login/login.component';
import { HTTP_INTERCEPTORS,HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';
>>>>>>> 9710822bcca9fd89c15cfdda7d1cf58f274e5764

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
<<<<<<< HEAD
    FormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, 
    FormsModule
=======
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
>>>>>>> 9710822bcca9fd89c15cfdda7d1cf58f274e5764
  ],
  providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }