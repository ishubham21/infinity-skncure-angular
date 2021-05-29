import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userData: any;

  // constructor(private afAuth: AngularFireAuth,
  //   private router: Router,
  //   private afs: AngularFirestore) { 
  //     this.afAuth.authState.subscribe(user => {
  //       if (user) {
  //         this.userData = user;
  //         //un-comment after log-out button
  //         /* this.router.navigate(['/dashboard']) */

  //       } else {

  //         //un-comment after log-out button
  //         /* this.router.navigate(['/']) */
  //       }
  //     })
  //   }


  ngOnInit(): void {
        
  }

}
