import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { User } from './user';



@Injectable({ providedIn: 'root' })
export class SignUpService {

  constructor(private cookieService: CookieService) { }

  headers = new Headers();

  createUser(user: User){
    fetch('https://apps-lapp-server.herokuapp.com/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  loginUser(user: User){
    let authString = `${user.username}:${user.password}`

    this.headers.set('Authorization', 'Basic ' + btoa(authString))

    fetch('https://apps-lapp-server.herokuapp.com/api/auth/login', {
      method: 'GET',
      headers: this.headers})
    .then(response => response.json())
    .then(data => {
      this.cookieService.set('username', user.username);
      this.cookieService.set('password', user.password);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  getUser(){
    fetch('https://jsonplaceholder.typicode.com/todos/205', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        
      }
    })
    .then(response => response.json())
    .then(data => console.log(data));
  }

  deleteUser(){
    fetch('https://jsonplaceholder.typicode.com/todos/205', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => console.log(data));
  }
}
