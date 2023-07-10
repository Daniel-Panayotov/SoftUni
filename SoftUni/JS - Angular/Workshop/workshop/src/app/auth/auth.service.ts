import { Injectable, NgZone, OnInit } from '@angular/core';
import { User } from '../types/user';
import { environment } from 'src/environments/environment.development';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: User[] = [];
  user: User | null = null;

  constructor(private router: Router) {
    this.checkUser();
  }

  checkUser() {
    const user = localStorage.getItem(environment.USER_KEY);
    if (user) {
      this.user = JSON.parse(user);
    }
  }

  registerUser(
    username: HTMLInputElement,
    email: HTMLInputElement,
    tel: HTMLInputElement,
    password: HTMLInputElement
  ) {
    const user = {
      username: username.value,
      email: email.value,
      tel: tel.value,
      password: password.value,
    };

    this.users.push(user);

    localStorage.setItem(environment.USER_KEY, JSON.stringify(user));
    this.checkUser();
    this.router.navigate(['/']);
  }

  login(email: HTMLInputElement, password: HTMLInputElement) {
    const isLogged = this.users.find(
      (user) => user.email == email.value && user.password == password.value
    );
    if (isLogged) {
      const { username, email } = isLogged;

      localStorage.setItem(
        environment.USER_KEY,
        JSON.stringify({ username, email })
      );
      this.checkUser();

      this.router.navigate(['/']);
    }
  }

  logout() {
    localStorage.removeItem(environment.USER_KEY);
    this.user = null;
    this.checkUser();

    this.router.navigate(['/']);
  }
}
