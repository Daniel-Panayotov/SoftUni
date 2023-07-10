import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  user: User | null;

  constructor(private auth: AuthService, private router: Router) {
    this.user = this.auth.user;
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
