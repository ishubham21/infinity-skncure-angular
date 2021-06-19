import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../auth/auth.service';
import { Tracker } from './tracker.model';

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

    this.diseaseCollection.add(disease).then((docref: any) => {
      const postDoc = this.afs.doc(`tracker/${docref.id}`);
      postDoc.update({ id: docref.id });
    });
  }
}
