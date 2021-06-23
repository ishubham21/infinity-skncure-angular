import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'infinity-skncure';
  @ViewChild('snav') snav!: MatSidenav;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  toggle() {
    this.snav.toggle();
  }
}
