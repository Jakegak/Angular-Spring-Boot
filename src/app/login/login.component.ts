import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationServiceService } from '../services/hardcoded-authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

username : String = 'Jake'
password = ''
errorMessage = 'invalid credentials'
invalidLogin = false

  constructor(private route: Router,
    private hardcodedauthenticationService: HardcodedAuthenticationServiceService) { }

  ngOnInit() {
  }

  handleLogin(){
    // console.log(this.username)
    // if(this.username==='username' && this.password==='password')
    if(this.hardcodedauthenticationService.authenticate(this.username, this.password))
    {
      this.route.navigate(['welcome', this.username])
      this.invalidLogin= false
    }
    else{
      this.invalidLogin = true
    }
  }
}
