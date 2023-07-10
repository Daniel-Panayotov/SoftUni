import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeComponent } from './theme/theme.component';
import { ThemesComponent } from './themes/themes.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { AuthActivate } from '../core/guards/auth.activate';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: 'themes', component: MainComponent },
  {
    path: 'themes/new',
    canActivate: [AuthActivate],
    component: NewThemeComponent,
  },
  { path: 'themes/:id', component: CurrentThemeComponent },
];

@NgModule({
  declarations: [
    ThemeComponent,
    ThemesComponent,
    NewThemeComponent,
    CurrentThemeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    RouterModule,
    SharedModule,
  ],
  exports: [ThemesComponent],
})
export class ThemeMModule {}
