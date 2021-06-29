import { Component, Input, OnInit } from '@angular/core';
import { map, take } from 'rxjs/operators';

import { AuthService } from 'src/app/services/auth/auth.service';

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
    supportCount: [],
    onlyMe: false,
    userProfileImage: '',
    userName: 'User',
    createdAt: '',
  };
  @Input() index: number = 0;
  @Input() myPost: boolean = false;
  liked: boolean = false;

  constructor(
    private postService: PostsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const userId = this.authService.userData.uid;

    let post = this.postService
      .checkSupport(this.post)
      .pipe(take(1))
      .subscribe((post) => {
        const alreadyLiked = post[0].supportCount.find(
          (support: any) => support == userId
        );
        if (alreadyLiked) {
          this.liked = true;
        } else {
          this.liked = false;
        }
      });
  }

  support() {
    const userId = this.authService.userData.uid;
    let post = this.postService
      .checkSupport(this.post)
      .pipe(take(1))
      .subscribe((post) => {
        const alreadyLiked = post[0].supportCount.find(
          (support: any) => support == userId
        );
        if (alreadyLiked) {
          post[0].supportCount.splice(post[0].supportCount.indexOf(userId), 1);
          this.postService.notSupport(post[0]);
        } else {
          this.postService.support(post[0], userId);
        }
      });

    post.unsubscribe;
  }
}
