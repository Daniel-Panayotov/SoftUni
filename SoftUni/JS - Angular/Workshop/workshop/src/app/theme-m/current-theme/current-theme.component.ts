import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ApiService } from 'src/app/services/api/api.service';
import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-current-theme',
  templateUrl: './current-theme.component.html',
  styleUrls: ['./current-theme.component.css'],
})
export class CurrentThemeComponent implements OnInit {
  theme: Theme | undefined;

  constructor(
    private api: ApiService,
    private activatedRoute: ActivatedRoute,
    private auth: AuthService
  ) {}

  get user() {
    return this.auth.user;
  }

  fetchData(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.api.getTheme(id).subscribe((theme) => {
      this.theme = theme;
      console.log(theme);
    });
  }

  ngOnInit(): void {
    this.fetchData();
  }
}
