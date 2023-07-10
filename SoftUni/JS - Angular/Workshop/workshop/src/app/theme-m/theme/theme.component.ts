import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css'],
})
export class ThemeComponent {
  @Input() theme: Theme | undefined = undefined;

  constructor(private auth: AuthService) {}

  get isSubscribed(): boolean {
    return this.theme?.subscribers.includes(' ') || false;
  }
}
