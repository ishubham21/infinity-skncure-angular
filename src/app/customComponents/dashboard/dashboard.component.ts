import { Component, OnInit, Output } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @Output() profileNavStatus: boolean = false;

  constructor(public authService: AuthService) {}

  openProfileNav() {
    this.profileNavStatus = !this.profileNavStatus;
  }
  closeProfileNav(status: boolean) {
    this.profileNavStatus = status;
  }

  ngOnInit(): void {}
}
export class CardFancyExample {}
export class IconOverviewExample {}
