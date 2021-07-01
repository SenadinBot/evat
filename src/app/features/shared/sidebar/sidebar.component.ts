import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAngleDown, faAngleLeft, faBuilding, faChartLine, faCog, faFileInvoiceDollar, faFileSignature, faHome, faListAlt, faReceipt, faTachometerAlt, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  constructor(private library: FaIconLibrary) {
    library.addIcons(
      faAngleLeft, 
      faTachometerAlt, 
      faChartLine, 
      faReceipt, 
      faFileSignature, 
      faBuilding, 
      faUsers, 
      faHome, 
      faListAlt, 
      faFileInvoiceDollar, 
      faCog, 
      faAngleDown
      );
   }

  ngOnInit(): void {
  }

}
