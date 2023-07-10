import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post/post.component';
import { AuthModule } from './auth/auth.module';
import { ThemeMModule } from './theme-m/theme-m.module';
import { AppRoutingModule } from './app-routing.module';
import { UsersModule } from './users/users.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, MainComponent, PostsComponent, PostComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule,
    CoreModule,
    ThemeMModule,
    UsersModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
