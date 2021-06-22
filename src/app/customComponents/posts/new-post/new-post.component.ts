import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../post.model';
import { PostsService } from '../services/posts.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
})
export class NewPostComponent implements OnInit {
  @ViewChild('f') newPostForm: any;
  post: Post = {
    id: '',
    img: 'https://images.unsplash.com/photo-1484972759836-b93f9ef2b293?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
    text: '',
    supportCount: [],
    owner: '',
    onlyMe: false,
    userProfileImage: '',
    userName: 'User',
    createdAt: '',
  };
  submitted = false;
  path: any = {};
  downloadURL: any;

  constructor(
    private postsService: PostsService,
    private router: Router,
    private storage: AngularFireStorage
  ) {}

  ngOnInit(): void {}

  uploadFileEvt(imgFile: any) {
    this.path = imgFile.target.files[0];
  }

  onSubmit() {
    this.post.text = this.newPostForm.value.text;
    this.post.onlyMe = this.newPostForm.value.onlyMe;

    if (this.newPostForm.value.onlyMe === '') {
      this.post.onlyMe = false;
    }

    const filePath = 'posts-image/' + this.path.name;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, this.path);

    // get notified when the download URL is available
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            console.log(url);
            this.post.img = url;
            this.post.createdAt = new Date();
            this.postsService.addPost(this.post);
          });
        })
      )
      .subscribe();

    this.submitted = true;

    this.newPostForm.reset();
    this.router.navigate(['/posts']);
  }
}
