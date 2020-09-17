import { Component, OnInit, Injectable } from '@angular/core';
import { User } from '../../../models/user';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  u: User;
  title = 'Hola';
  error = '';

  constructor(private http: HttpClient, private router: Router) { 
    this.u = new User();
  }

  ngOnInit(): void {
  }

  login() {
    console.log(this.u.email);
    console.log(this.u.password);
    var redirigir = false;
    this.http.post("https://reqres.in/api/login", this.u).subscribe( data => {
        this.router.navigate(['/home']);
      },
      error => {
        this.error = 'Usuario no encontrado';
      }
    );
  }

  register() {
    this.router.navigate(['/register']);
  }
}
