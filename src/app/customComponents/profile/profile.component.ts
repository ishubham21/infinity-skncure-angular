import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  @Input('profileNavStatus') profileNavStatus: boolean = true;
  @Output() profileClosed = new EventEmitter<boolean>();

  constructor(public authService: AuthService) {}

  closeProfileNav() {
    this.profileClosed.emit(!this.profileNavStatus);
  }

  ngOnInit(): void {}
}
