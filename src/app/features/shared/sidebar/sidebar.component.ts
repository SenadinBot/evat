import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEllipsisV, faAngleLeft, faBuilding, faChartLine, faCog, faFileInvoiceDollar, faFileSignature, faHome, faListAlt, faReceipt, faTachometerAlt, faUsers, faTimes } from '@fortawesome/free-solid-svg-icons';
import { merge, Observable, Subject } from 'rxjs';
import { SidebarService } from 'src/core/services/sidebar.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  menuICon = faEllipsisV;
  closeIcon = faTimes;
  leftIcon = faAngleLeft;

  readonly isMenuShown: Observable<boolean>;
  readonly show = new Subject<boolean>();

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

  constructor(
    private library: FaIconLibrary,
    private sidebarService: SidebarService,
    private breakpointObserver: BreakpointObserver
  ) {
    library.addIcons(
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
    this.isMenuShown = merge(
      this.breakpointObserver
        .observe([Breakpoints.Large, Breakpoints.XLarge])
        .pipe(
          map(state => state.matches),
          distinctUntilChanged()
        ),
      this.show);
  }

  ngOnInit(): void {
  }

  expandSidebar() {
    this.sidebarService.expandSidebar();
    console.log('test');
  }

  openSidebar() {
    this.show.next(true);
    this.sidebarService.expandToggleSource.next(false);
  }

  closeSidebar() {
    this.show.next(false);
    this.sidebarService.expandToggleSource.next(false);
  }

}
