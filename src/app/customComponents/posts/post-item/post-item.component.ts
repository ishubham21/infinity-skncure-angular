import { Component, Input, OnInit } from '@angular/core';

import { Post } from '../post.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css'],
})
export class PostItemComponent implements OnInit {
  @Input() post: Post = {
    id: '',
    img: '',
    text: '',
    owner: '',
    supports: 0,
    onlyMe: false,
    userProfileImage: '',
    userName: 'User',
  };
  @Input() index: number = 0;
  @Input() myPost: boolean = false;

  constructor(private postService: PostsService) {}

  ngOnInit(): void {}

  support() {
    this.post.supports = this.post.supports + 1;
    this.postService.support(this.post);
  }
}
