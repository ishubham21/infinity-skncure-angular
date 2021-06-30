import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../auth/auth.service';
import { map, take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { dateFormatter } from './tracker.utils';

@Injectable({ providedIn: 'root' })
export class TrackerService {
  diseaseCollection: any;
  date: any;
  saved: boolean = false;

  constructor(
    private authService: AuthService,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.diseaseCollection = afs.collection('tracker');
  }

  addingDisease(name: string, prediction: number) {
    const owner = this.authService.userData.uid;

    const illnessObject = {
      createdAt: dateFormatter(),
      name,
      prediction,
    };
    const disease = {
      id: '',
      owner,
      illness: [illnessObject],
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
      if (doc.length !== 0) {
        const trackerDoc = this.afs.doc(`tracker/${doc[0].id}`);
        // Checking whether already tested the same day for the same disease
        let newIllnessArray = Object.values(doc[0].illness).filter(
          (element: any) => element.createdAt != illnessObject.createdAt
        );
        let newIllnessArray2 = Object.values(doc[0].illness).filter(
          (element: any) =>
            element.createdAt == illnessObject.createdAt &&
            element.name != illnessObject.name
        );

        // Adding new pridiction
        newIllnessArray.push(...newIllnessArray2);
        newIllnessArray.push(illnessObject);
        trackerDoc.update({ illness: newIllnessArray });
        this.saved = true;
        this.router.navigate(['/disease-tracker']);
      } else {
        this.diseaseCollection.add(disease).then((docref: any) => {
          const trackerDoc = this.afs.doc(`tracker/${docref.id}`);
          trackerDoc.update({ id: docref.id });
        });
        this.saved = true;
        this.router.navigate(['/disease-tracker']);
      }
    });
  }

  gettingTrackerData() {
    const owner = this.authService.userData.uid;

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
    return userExists.pipe(take(1));
  }
}
