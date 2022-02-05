import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { SignUpService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: SignUpService) { }

  ngOnInit(): void {
  }

  model = new User('', '', '');

  login(): void {
    this.userService.loginUser(this.model);
    console.log(this.model);
  }

}
