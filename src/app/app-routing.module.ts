import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/customComponents/login/login.component';
import { DashboardComponent } from '../app/customComponents/dashboard/dashboard.component';
import { AuthGuard } from './services/auth-guard.service';
import { RealTimeDetectionComponent } from './customComponents/real-time-detection/real-time-detection.component';
import { PostsComponent } from './customComponents/posts/posts.component';
import { NewPostComponent } from './customComponents/posts/new-post/new-post.component';
import { DetectDiseaseComponent } from './customComponents/detect-disease/detect-disease.component';
import { CommunityPostsComponent } from './customComponents/posts/community-posts/community-posts.component';
import { MyPostsComponent } from './customComponents/posts/my-posts/my-posts.component';
import { DarkCirclesComponent } from './customComponents/dark-circles/dark-circles.component';
import { NearbyDoctorsComponent } from './customComponents/nearby-doctors/nearby-doctors.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: 'real-time', component: RealTimeDetectionComponent },
  { path: 'upload-image', component: DetectDiseaseComponent },
  { path: 'dark-circles', component: DarkCirclesComponent },
  { path: 'nearby-doctors', component: NearbyDoctorsComponent },
  {
    path: 'posts',
    component: PostsComponent,
    children: [
      { path: '', component: CommunityPostsComponent },
      { path: 'me', component: MyPostsComponent },
    ],
  },
  {
    path: 'new',
    component: NewPostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
