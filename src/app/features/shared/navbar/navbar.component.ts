import { Component, OnInit } from '@angular/core';
import { faBell, faUser, faLifeRing } from '@fortawesome/free-regular-svg-icons';
import { faSignOutAlt, faCog, faUserCircle, faFilter } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  bellIcon = faBell;
  userIcon = faUser;
  filterIcon = faFilter;
  profileIcon = faUserCircle;
  settingsIcon = faCog;
  supportIcon = faLifeRing;
  logoutIcon = faSignOutAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
