import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  mobile: string = '';

  register(RegisterForm: NgForm) {
    if (RegisterForm.valid) {
      if (this.email === 'test@example.com' && this.password === 'password' && this.name!='') {
        console.log('Login successful');
      } else {
        console.log('Invalid credentials');
      }
    }
  }
  signupWithGoogle() {
    // Implement Google sign up logic
    console.log('Signing up with Google');
  }

  signupWithFacebook() {
    // Implement Facebook sign up logic
    console.log('Signing up with Facebook');
  }

}
