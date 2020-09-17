import { Component, OnInit, Injectable } from '@angular/core';
import { User } from '../../../models/user';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  u: User;
  title = 'Hola';

  constructor(private http: HttpClient) { 
    this.u = new User();
  }

  ngOnInit(): void {
  }

  login() {
    console.log(this.u.email);
    console.log(this.u.password);
    this.http.post("https://reqres.in/api/login", this.u).subscribe( data => {
      console.log(data);
    });
  }

  register() {
    
  }
}
