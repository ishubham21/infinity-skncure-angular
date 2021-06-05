import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/customComponents/login/login.component';
import { DashboardComponent } from '../app/customComponents/dashboard/dashboard.component';
import { AuthGuard } from './services/auth-guard.service';
import { RealTimeDetectionComponent } from './customComponents/real-time-detection/real-time-detection.component';
import { PostsComponent } from './customComponents/posts/posts.component';
import { PostItemComponent } from './customComponents/posts/post-item/post-item.component';
import { NewPostComponent } from './customComponents/posts/new-post/new-post.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: 'real-time', component: RealTimeDetectionComponent },
  {
    path: 'posts',
    component: PostsComponent,
    children: [
      { path: '', component: PostItemComponent },
      { path: 'me', component: PostItemComponent },
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
