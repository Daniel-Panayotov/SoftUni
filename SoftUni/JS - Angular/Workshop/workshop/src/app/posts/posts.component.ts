import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { Post } from '../types/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getPosts(5).subscribe((posts) => {
      this.posts = posts;
      console.log(posts);
    });
  }
}
