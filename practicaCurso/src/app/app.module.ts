import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './models/user/user.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthComponent } from './pages/auth/auth.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { DetalleResourcesComponent } from './pages/resources/detalle-resources/detalle-resources.component';
import { ListadoResourcesComponent } from './pages/resources/listado-resources/listado-resources.component';
import { ResourcesDetailComponent } from './pages/resources/resources-detail/resources-detail.component';
import { ResourcesListComponent } from './pages/resources/resources-list/resources-list.component';
import { UsersDetailComponent } from './pages/users/users-detail/users-detail.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    DetalleResourcesComponent,
    ListadoResourcesComponent,
    ResourcesDetailComponent,
    ResourcesListComponent,
    UsersDetailComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
