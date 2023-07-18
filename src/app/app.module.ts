import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { TableComponent } from './shared/table/table.component';
import { FormComponent } from './shared/form/form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ButtonComponent } from './shared/button/button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationComponent } from './shared/validation/validation.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    TableComponent,
    FormComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    EditprofileComponent,
    ButtonComponent,
    ValidationComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
