import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';

import { Post } from '../post.model';

@Injectable({ providedIn: 'root' })
export class PostsService {
  postsCollection: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;
  userPosts!: Observable<Post[]>;

  constructor(private afs: AngularFirestore, private authService: AuthService) {
    this.postsCollection = afs.collection('posts', (ref) =>
      ref.orderBy('createdAt', 'desc')
    );
    // .snapshotChanges() returns a DocumentChangeAction[], which contains
    // a lot of information about "what happened" with each change. If you want to
    // get the data and the id use the map operator.
    this.posts = this.postsCollection.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as Post;
          data.id = a.payload.doc.id;
          return data;
        })
      )
    );
  }

  getPosts() {
    return this.posts;
  }

  getMyPosts() {
    this.userPosts = this.afs
      .collection('posts', (ref) =>
        ref
          .where('owner', '==', this.authService.userData.uid)
          .orderBy('createdAt', 'desc')
      )
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data() as Post;
            data.id = a.payload.doc.id;
            return data;
          })
        )
      );
    return this.userPosts;
  }

  addPost(post: Post) {
    post.userName = this.authService.userData.displayName;
    post.userProfileImage = this.authService.userData.photoURL;
    post.owner = this.authService.userData.uid;
    this.postsCollection.add(post).then((docref) => {
      const postDoc = this.afs.doc(`posts/${docref.id}`);
      postDoc.update({ id: docref.id });
    });
  }

  checkSupport(post: Post) {
    const userAlreadyLiked = this.afs
      .collection<Post>('posts', (ref) =>
        ref.where('id', '==', post.id).limit(1)
      )
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data() as Post;
            data.id = a.payload.doc.id;
            return data;
          })
        )
      );
    return userAlreadyLiked;
  }

  support(post: Post, userId: any) {
    const postDoc = this.afs.doc(`posts/${post.id}`);
    postDoc.update({ supportCount: [...post.supportCount, userId] });
  }

  notSupport(post: Post) {
    const postDoc = this.afs.doc(`posts/${post.id}`);
    postDoc.update(post);
  }
}
