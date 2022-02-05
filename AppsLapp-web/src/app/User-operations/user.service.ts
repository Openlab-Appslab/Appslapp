import { Injectable } from '@angular/core';
import { User } from './user';


@Injectable({ providedIn: 'root' })
export class SignUpService {

  constructor() { }


  createUser(user: User){
    fetch('https://apps-lapp-server.herokuapp.com/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => console.log(data));
  }

  getUser(){
    fetch('https://jsonplaceholder.typicode.com/todos/205', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => console.log(data));
  }

  loginUser(user: User){
    fetch('https://jsonplaceholder.typicode.com/todos/205', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username: user.username, password: user.password})
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
