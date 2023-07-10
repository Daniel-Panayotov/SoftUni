import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private auth: AuthService, private router: Router) {}

  register(
    name: HTMLInputElement,
    email: HTMLInputElement,
    tel: HTMLInputElement,
    password: HTMLInputElement,
    rePass: HTMLInputElement
  ) {
    if (password.value == rePass.value) {
      this.auth.registerUser(name, email, tel, password);
      // this.router.navigate(['/']);
    }
  }
}
