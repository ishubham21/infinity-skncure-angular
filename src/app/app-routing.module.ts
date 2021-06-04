import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/customComponents/login/login.component';
import { DashboardComponent } from '../app/customComponents/dashboard/dashboard.component';
import { AuthGuard } from './services/auth-guard.service';
import { RealTimeDetectionComponent } from './customComponents/real-time-detection/real-time-detection.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: 'real-time', component: RealTimeDetectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
