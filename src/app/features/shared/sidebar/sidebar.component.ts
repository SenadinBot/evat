import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAngleLeft, faBuilding, faChartLine, faCog, faFileInvoiceDollar, faFileSignature, faHome, faListAlt, faReceipt, faTachometerAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import { SidebarService } from 'src/core/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  constructor(
    private library: FaIconLibrary,
    private sidebarService: SidebarService
  ) {
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
      faCog
    );
  }

  links = [
    { link: "/", icon: faTachometerAlt, label: "Dashboard" },
    { link: "/reports", icon: faChartLine, label: "Reports" },
    { link: "/compliances", icon: faReceipt, label: "Compliances" },
    { link: "/registration", icon: faFileSignature, label: "Registration" },
    { link: "/companies", icon: faBuilding, label: "Companies" },
    { link: "/teams", icon: faUsers, label: "Teams" },
    { link: "/users", icon: faUsers, label: "Users" }
  ];

  companyLinks = [
    { link: "/general", icon: faHome, label: "General" },
    { link: "/activity", icon: faListAlt, label: "Activity" },
    { link: "/tax-data", icon: faFileInvoiceDollar, label: "Tax data" },
    { link: "/setup", icon: faCog, label: "Setup" }
  ];

  ngOnInit(): void {
  }

  expandSidebar() {
    this.sidebarService.expandSidebar();
    console.log('test');
  }

}
