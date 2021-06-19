import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from "./auth.service";
import { User } from "./user";

@Injectable({
  providedIn: 'root'
})
export class AfsService {

  userDocument!: AngularFirestoreDocument<User>;
  userRef!: AngularFirestoreDocument<User>
  userCustomData!: Observable<any>;

  constructor(private afs: AngularFirestore, private authService: AuthService) {
    console.log(authService.userData.uid)
    this.userRef = this.afs.doc(`users/${authService.userData.uid}`)
  }

  addData(userData: any){
    // this.userRef.set(userData, { merge: true })
  }

  readData(){
    // this.userCustomData = this.userRef.snapshotChanges().pipe(map(actions => actions.map))
    // return this.userCustomData;
  }

}
