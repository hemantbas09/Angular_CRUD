import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    component: LoginComponent,
    path: '',
  },
  {
    component: DashboardComponent,
    path: 'dashboard',
  },
  {
    component: ProfileComponent,
    path: 'profile',
  },
  {
    component: ProfileComponent,
    path: 'profile/:id',
  },
  {
    component: SignupComponent,
    path: 'signup',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
