import { Injectable, NgZone } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import "firebase/auth";

@Injectable()
export class AuthService {
	
	userData!: firebase.User;

	constructor(
		private afAuth: AngularFireAuth,
		private router: Router,
		private afs: AngularFirestore) { 

			//handling auth state - will give 'users' if loggedIn
			this.afAuth.authState.subscribe(user => {
				if (user) {

					//if user exists, fetch his credentials and pass it 
					this.userData = user
					this.router.navigate(['/dashboard'])
					
				} else {
					this.router.navigate(['/'])
				}
			})
		}

	//login with google function - providing google auth provider to oAuthLogin function
	async googleLogin() {
		const provider = new firebase.auth.GoogleAuthProvider();
		this.afAuth.signInWithPopup(provider)
			.then((value: any) => {

				console.log(value.user);
				this.router.navigate(['/dashboard'])
			
			})
			.catch((error: any) => {
				console.log('Something went wrong: ', error);
			});
	}

	//function to logout the user
	logout() {
		this.afAuth.signOut().then(() => {
			this.router.navigate(['/']);
		});
	}

	//NEED THIS ONLY AT THE TIME OF USING FIRESTORE DATABASE
	//function to set user data in google firestore database when a new user logs in
	// setUserData(user: { uid: any; email: any; displayName: any; photoURL: any}) {

	// 	//seeting user reference for firestore database
	// 	const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

	// 	const userData: User = {
	// 		uid: user.uid,
	// 		email: user.email,
	// 		displayName: user.displayName,
	// 		photoURL: user.photoURL
	// 	}

	// 	return userRef.set(userData, { merge: true })
	// }

}


