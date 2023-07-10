import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouterModule } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(private http: HttpClient, private router: RouterModule) {}

  createTheme(): void {
    console.log(1);
  }
}
