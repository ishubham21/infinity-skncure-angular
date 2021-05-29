import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { AngularFireAuth } from '@angular/fire/auth';
import auth from "firebase/app";

@Injectable()
export class AuthService {

	constructor(
		private afAuth: AngularFireAuth,
		private router: Router) { }

	googleLogin() {
		const provider = new auth.GoogleAuthProvider();
		return this.oAuthLogin(provider)
			.then((value: any) => {
				console.log('Sucess', value),
					this.router.navigateByUrl('/dashboard');
			})
			.catch((error: any) => {
				console.log('Something went wrong: ', error);
			});
	}
	

	logout() {
		this.afAuth.signOut().then(() => {
			this.router.navigate(['/']);
		});
	}

	private oAuthLogin(provider: any) {
		return this.afAuth.signInWithPopup(provider);
	}
}
