import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../auth/auth.service';
import { map, take } from 'rxjs/operators';
// import { Tracker } from './tracker.model';

@Injectable({ providedIn: 'root' })
export class TrackerService {
  diseaseCollection: any;

  constructor(private authService: AuthService, private afs: AngularFirestore) {
    this.diseaseCollection = afs.collection('tracker');
  }

  addingDisease(name: string, prediction: number) {
    const owner = this.authService.userData.uid;
    const illness = {
      createdAt: new Date(),
      name,
      prediction,
    };
    const disease = {
      id: '',
      owner,
      illness,
    };

    const userExists = this.afs
      .collection('tracker', (ref) => ref.where('owner', '==', owner).limit(1))
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data() as any;
            data.id = a.payload.doc.id;
            return data;
          })
        )
      );
    userExists.pipe(take(1)).subscribe((doc) => {
      // Checking if the user has already saved its prediction
      if (doc) {
        console.log('exists');
        // const trackerDoc = this.afs.doc(`tracker/${doc[0].id}`);
      } else {
        console.log('Not exists');
        // this.diseaseCollection.add(disease).then((docref: any) => {
        //   const trackerDoc = this.afs.doc(`tracker/${docref.id}`);
        //   trackerDoc.update({ id: docref.id });
        // });
      }
    });
  }
}
