import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationServiceService } from '../services/hardcoded-authentication-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private hardcodedauthenticationService : HardcodedAuthenticationServiceService) { }

  ngOnInit() {
  }

}
