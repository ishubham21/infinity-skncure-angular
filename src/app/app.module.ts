import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';

import { LoginComponent } from './customComponents/login/login.component';
import { DashboardComponent } from './customComponents/dashboard/dashboard.component';

import { AuthService } from '../app/services/auth/auth.service';
import { AuthGuard } from './services/auth/auth-guard.service';
import { GoogleMapsModule } from '@angular/google-maps';
import { ProfileComponent } from './customComponents/profile/profile.component';
import { DetectDiseaseComponent } from './customComponents/detect-disease/detect-disease.component';
import { RealTimeDetectionComponent } from './customComponents/real-time-detection/real-time-detection.component';
import { PostsComponent } from './customComponents/posts/posts.component';
import { PostItemComponent } from './customComponents/posts/post-item/post-item.component';
import { NewPostComponent } from './customComponents/posts/new-post/new-post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommunityPostsComponent } from './customComponents/posts/community-posts/community-posts.component';
import { MyPostsComponent } from './customComponents/posts/my-posts/my-posts.component';
import { ResultPopupComponent } from './customComponents/detect-disease/result-popup/result-popup.component';
import { DarkCirclesComponent } from './customComponents/dark-circles/dark-circles.component';
import { DialogPopupComponent } from './customComponents/dark-circles/dialog-popup/dialog-popup.component';
import { TipsComponent } from './customComponents/tips/tips.component';
import { NearbyDoctorsComponent } from './customComponents/nearby-doctors/nearby-doctors.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    DetectDiseaseComponent,
    RealTimeDetectionComponent,
    PostsComponent,
    PostItemComponent,
    NewPostComponent,
    CommunityPostsComponent,
    MyPostsComponent,
    ResultPopupComponent,
    DarkCirclesComponent,
    DialogPopupComponent,
    TipsComponent,
    NearbyDoctorsComponent,
  ],
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
    MatDialogModule,
    MatCardModule,
    MatGridListModule,
    MatSlideToggleModule,
    AngularFireStorageModule,
    GoogleMapsModule,
  ],
  entryComponents: [ResultPopupComponent, DialogPopupComponent],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
