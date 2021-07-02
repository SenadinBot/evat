import { Component, OnInit } from '@angular/core';
// import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import { faBell, faUser } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  bellIcon = faBell;
  userIcon = faUser;

  constructor() { }

  ngOnInit(): void {
  }

}
