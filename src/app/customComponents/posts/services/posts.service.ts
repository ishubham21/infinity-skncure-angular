import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

import { Post } from '../post.model';

@Injectable({ providedIn: 'root' })
export class PostsService {
  postsCollection: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;
  postDoc: any = '';

  constructor(private afs: AngularFirestore, private authService: AuthService) {
    this.postsCollection = afs.collection('posts');
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

  // getMyPosts() {
  //   // return this.postsCollection.ref.where(
  //   //   'owner',
  //   //   '==',
  //   //   this.authService.userData.uid
  //   // );
  //   // return this.authService.userData.uid;
  //   return this.afs.collection('posts', (ref) =>
  //     ref.where('owner', '==', this.authService.userData.uid)
  //   );
  // }

  addPost(post: Post) {
    post.userName = this.authService.userData.displayName;
    post.userProfileImage = this.authService.userData.photoURL;
    post.owner = this.authService.userData.uid;
    this.postsCollection.add(post);
  }

  support(post: Post) {
    this.postDoc = this.afs.doc(`posts/${post.id}`);
    this.postDoc.update(post);
  }
}
