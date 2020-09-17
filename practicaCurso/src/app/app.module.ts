import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { ResourcesDetailComponent } from './pages/resources/resources-detail/resources-detail.component';
import { ResourcesListComponent } from './pages/resources/resources-list/resources-list.component';
import { UsersDetailComponent } from './pages/users/users-detail/users-detail.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';
import { LoginComponent } from './pages/auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    ResourcesDetailComponent,
    ResourcesListComponent,
    UsersDetailComponent,
    UsersListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
