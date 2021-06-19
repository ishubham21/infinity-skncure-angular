import {
  Component,
  OnInit,
  Output,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @Output() profileNavStatus: boolean = false;

  mobileQuery!: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(
    public authService: AuthService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  openProfileNav() {
    this.profileNavStatus = !this.profileNavStatus;
  }
  closeProfileNav(status: boolean) {
    this.profileNavStatus = status;
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
export class CardFancyExample {}
export class IconOverviewExample {}
