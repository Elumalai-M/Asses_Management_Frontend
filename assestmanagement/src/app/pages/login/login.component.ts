import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/user';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{

  loginForm = this.fb.group({
    emailId: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  loginError: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private appComponent : AppComponent
  ){}

   ngOnInit(): void {

   }

  get email(){
    return this.loginForm.controls['emailId'];
  }

  get password(){
    return this.loginForm.controls['password'];
  }

  loginUser(){
    const postData = this.loginForm.value;
    console.log(postData);  
    this.authService.login(postData as User).subscribe(
      response => {
        console.log("Response from server:", response);
        // Handle response from server
        const token = response.jwt;
        console.log(token);
  
        // Store the token in the session storage
        localStorage.setItem('jwtToken', token);
        this.router.navigate(['/dashboard']);
      },
      error => {
        console.log("Error:", error);
        // Handle error
        this.loginError = "Invalid credentials.";
  
      }
    );
  }
}
