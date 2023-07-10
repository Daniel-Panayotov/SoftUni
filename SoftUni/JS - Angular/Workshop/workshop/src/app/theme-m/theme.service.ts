import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(private http: HttpClient, private router: Router) {}

  createTheme(themeName: string, postText: string) {
    console.log(1);

    this.http
      .post(`${environment.apiUrl}/themes`, {
        themeName,
        postText,
      })
      .subscribe({
        next: (theme) => {
          this.router.navigate(['/themes']);
        },
        error: (err) => console.error(err),
      });
  }
}
