import { Component, OnInit } from '@angular/core';
import { faCheck, faSort } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent implements OnInit {

  sortIcon = faSort;
  completedIcon = faCheck;

  list = [
    { country: "France", createdBy: "Kruno", createdAt: "16.12.2020", progress: 1, status: "Documents missing", lastUpdate: "21.12.2020, 18:04" },
    { country: "United Kingdom", createdBy: "Kruno", createdAt: "16.12.2020", progress: 3, status: "Ready for signature", lastUpdate: "18.12.2020, 07:34" },
    { country: "Czech Republic", createdBy: "Marko", createdAt: "05.12.2020", progress: 8, status: "Registered", lastUpdate: "15.12.2020, 22:15" },
    { country: "Germany", createdBy: "Kruno", createdAt: "18.11.2020", progress: 7, status: "Submitted", lastUpdate: "28.11.2020, 14:58" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
