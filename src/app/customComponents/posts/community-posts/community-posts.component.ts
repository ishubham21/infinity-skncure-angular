import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-community-posts',
  templateUrl: './community-posts.component.html',
  styleUrls: ['./community-posts.component.css'],
})
export class CommunityPostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
}
