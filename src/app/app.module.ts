import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent, ProfileComponent, DetectDiseaseComponent, RealTimeDetectionComponent, PostsComponent, PostItemComponent, NewPostComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
