import { Injectable, NgZone } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { AngularFireAuth } from '@angular/fire/auth';
import 'firebase/auth';
import { User } from './user';

@Injectable()
export class AuthService {
  private _userData: firebase.User | undefined;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private afs: AngularFirestore,
    private ngZone: NgZone
  ) {
    //detecting changes in the auth state - will give users if loggedIn
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        alert('This alert shows you are logged in.');

        this._userData = user;
        localStorage.setItem('user', JSON.stringify(this._userData));
        console.log(this.userData);

        //un-comment after log-out button
        /* this.router.navigate(['/dashboard']) */
      }
      //  else {
      //   alert('Okay. Logged Out');
      //   localStorage.setItem('user', '{}');

      //   //un-comment after log-out button
      //   /* this.router.navigate(['/']) */
      // }
    });
  }

  get userData(): firebase.User | undefined {
    return this._userData;
  }
  //login with google function - providing google auth provider to oAuthLogin function
  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider)
      .then((value: any) => {
        //using ngZone to stop detecting the changes
        this.ngZone.run(() => {
          //user details
          console.log('Logged-in', value.user),
            this.router.navigate(['/dashboard']);
        });

        //setting user data
        this.setUserData(value.user);
        // this.router.navigate(['/dashboard']);
      })
      .catch((error: any) => {
        console.log('Something went wrong: ', error);
      });
  }

  //function to set user data received from firebase
  setUserData(user: {
    uid: any;
    email: any;
    displayName: any;
    photoURL: any;
    emailVerified: any;
  }) {
    //creating firebase reference to add data
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );

    const _userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,

      //to be decided
      // customData:
    };
    return userRef.set(_userData, {
      merge: true,
    });
  }

  //function to logout the user
  logout() {
    this.afAuth.signOut().then(() => {
      localStorage.setItem('user', '{}');
      alert('Okay. Logged Out');
      this.router.navigate(['/']);
    });
  }

  //function to set the auth provider
  oAuthLogin(provider: any) {
    return this.afAuth.signInWithPopup(provider);
  }
}
