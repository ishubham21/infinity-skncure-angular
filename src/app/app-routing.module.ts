import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/customComponents/login/login.component';
import { DashboardComponent } from '../app/customComponents/dashboard/dashboard.component';
import { AuthGuard } from './services/auth/auth-guard.service';
import { RealTimeDetectionComponent } from './customComponents/real-time-detection/real-time-detection.component';
import { PostsComponent } from './customComponents/posts/posts.component';
import { NewPostComponent } from './customComponents/posts/new-post/new-post.component';
import { DetectDiseaseComponent } from './customComponents/detect-disease/detect-disease.component';
import { CommunityPostsComponent } from './customComponents/posts/community-posts/community-posts.component';
import { MyPostsComponent } from './customComponents/posts/my-posts/my-posts.component';
import { DarkCirclesComponent } from './customComponents/dark-circles/dark-circles.component';
import { NearbyDoctorsComponent } from './customComponents/nearby-doctors/nearby-doctors.component';
import { TipsComponent } from './customComponents/tips/tips.component';
import { DiseaseTrackerComponent } from './customComponents/disease-tracker/disease-tracker.component';
import { AppointmentsComponent } from './customComponents/appointments/appointments.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'real-time',
    component: RealTimeDetectionComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'upload-image',
    component: DetectDiseaseComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dark-circles',
    component: DarkCirclesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'nearby-doctors',
    component: NearbyDoctorsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'disease-tracker',
    component: DiseaseTrackerComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'appointments',
    component: AppointmentsComponent,
    canActivate: [AuthGuard],
  },
  { path: 'tips', component: TipsComponent, canActivate: [AuthGuard] },
  {
    path: 'posts',
    component: PostsComponent,
    children: [
      { path: '', component: CommunityPostsComponent },
      { path: 'me', component: MyPostsComponent },
    ],
    canActivate: [AuthGuard],
  },
  {
    path: 'new',
    component: NewPostComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
