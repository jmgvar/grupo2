import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';
import { UsersDetailComponent } from './pages/users/users-detail/users-detail.component';
import { ResourcesListComponent } from './pages/resources/resources-list/resources-list.component';
import { ResourcesDetailComponent } from './pages/resources/resources-detail/resources-detail.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'usersList', component: UsersListComponent },
  { path: 'usersDetail', component: UsersDetailComponent },
  { path: 'resourcesList', component: ResourcesListComponent },
  { path: 'resourcesDetail', component: ResourcesDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
