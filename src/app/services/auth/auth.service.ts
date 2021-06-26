import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import 'firebase/auth';
import { User } from './user';

@Injectable()
export class AuthService {
  userData!: any;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private afs: AngularFirestore
  ) {
    //handling auth state - will give 'users' if loggedIn
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        //if user exists, fetch his credentials and pass it
        this.userData = user;
        this.router.navigate(['/dashboard']);

      } else {
        this.router.navigate(['/']);
      }
    });
  }

  // Returns true if the user is logged in
  get authenticated(): boolean {
    return this.userData !== null;
  }

  //login with google function - providing google auth provider to oAuthLogin function
  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth
      .signInWithPopup(provider)
      .then((value: any) => {
        // console.log(value.user);
        this.router.navigate(['/dashboard']);

        //creating a new user document whenever a new login happens
        // return this.setUserData(value.user)
      })
      .catch((error: any) => {
        alert('Something went wrong, Refresh!');
      });
  }

  //function to logout the user
  logout() {
    this.afAuth.signOut().then(() => {
      this.userData = null;
      this.router.navigate(['/']);
    });
  }

  //function to set user data in google firestore database when a new user logs in
  // setUserData(user: { uid: any; email: any; displayName: any; photoURL: any, customData: any}) {

  // 	//seeting user reference for firestore database
  // 	const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

  // 	const userData: User = {
  // 		uid: user.uid,
  // 		email: user.email,
  //     customData: { }
  // 	}

  // 	return userRef.set(userData, { merge: true })
  // }
}
