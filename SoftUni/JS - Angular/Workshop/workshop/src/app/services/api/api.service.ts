import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from 'src/app/types/post';
import { Theme } from 'src/app/types/theme';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getThemes() {
    return this.http.get<Theme[]>(`${environment.apiUrl}/themes`);
  }

  getPosts(limit?: number) {
    return this.http.get<Post[]>(
      `${environment.apiUrl}/posts${limit ? `?limit=${limit}` : ''}`
    );
  }
}
