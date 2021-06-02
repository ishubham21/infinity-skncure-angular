import { Component, OnInit, Output } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @Output() profileNavStatus: boolean = true;

  constructor(public authService: AuthService) {}

  openProfileNav() {
    this.profileNavStatus = !this.profileNavStatus;
  }
  closeProfileNav(status: boolean) {
    this.profileNavStatus = status;
  }

  ngOnInit(): void {}
}
