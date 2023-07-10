import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private auth: AuthService, private router: Router) {}

  login(email: HTMLInputElement, password: HTMLInputElement) {
    if (email.value.length > 3 && password.value.length > 3) {
      this.auth.login(email, password);
    }
  }
}
