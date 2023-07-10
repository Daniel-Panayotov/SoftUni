import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Theme } from '../../types/theme';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css'],
})
export class ThemesComponent implements OnInit {
  themes: Theme[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getThemes().subscribe((themes) => {
      this.themes = themes;
    });
  }
}
