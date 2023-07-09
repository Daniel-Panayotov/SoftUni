import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ContainerComponent } from './container/container.component';
import { ThemesComponent } from './themes/themes.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post/post.component';
import { ThemeComponent } from './themes/theme/theme.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ThemesComponent,
    MainComponent,
    PostsComponent,
    PostComponent,
    ThemeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CoreModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
