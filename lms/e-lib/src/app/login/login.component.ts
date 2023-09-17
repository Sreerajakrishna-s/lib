import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  login(loginForm: NgForm) {
    if (loginForm.valid) {
      if (this.email === 'test@example.com' && this.password === 'password') {
        console.log('Login successful');
      } else {
        console.log('Invalid credentials');
      }
    }
  }
}
