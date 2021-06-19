import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css'],
})
export class MyPostsComponent implements OnInit {
  posts: any = [];
  myPost: boolean = true;

  constructor(private postService: PostsService) {}

  ngOnInit(): void {
    this.postService.getMyPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
}
