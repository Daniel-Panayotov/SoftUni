import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.css'],
})
export class NewThemeComponent {
  constructor(private themeService: ThemeService) {}

  createTheme(
    e: Event,
    themeName: HTMLInputElement,
    postText: HTMLTextAreaElement
  ) {
    e.preventDefault();
    if (themeName.value.length > 3 && postText.value.length > 3) {
      this.themeService.createTheme(themeName.value, postText.value);
    }
  }
}
