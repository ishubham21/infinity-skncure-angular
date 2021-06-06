import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { LoginComponent } from './customComponents/login/login.component';
import { DashboardComponent } from './customComponents/dashboard/dashboard.component';

import { AuthService } from '../app/services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { ProfileComponent } from './customComponents/profile/profile.component';
import { DetectDiseaseComponent } from './customComponents/detect-disease/detect-disease.component';
import { RealTimeDetectionComponent } from './customComponents/real-time-detection/real-time-detection.component';
import { PostsComponent } from './customComponents/posts/posts.component';
import { PostItemComponent } from './customComponents/posts/post-item/post-item.component';
import { NewPostComponent } from './customComponents/posts/new-post/new-post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ResultPopupComponent } from './customComponents/detect-disease/result-popup/result-popup.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent, ProfileComponent, DetectDiseaseComponent, RealTimeDetectionComponent, PostsComponent, PostItemComponent, NewPostComponent, ResultPopupComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatDialogModule
  ],
  entryComponents: [ResultPopupComponent],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
