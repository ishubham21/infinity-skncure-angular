import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css'],
})
export class MyPostsComponent implements OnInit {
  posts: any = [];

  constructor(private postService: PostsService) {}

  ngOnInit(): void {
    // this.posts = this.postService.getMyPosts();
    // console.log(this.posts);
  }
}
