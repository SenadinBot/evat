import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SidebarService } from 'src/core/services/sidebar.service';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html'
})
export class SharedComponent implements OnInit {

  readonly showSidebar = new Observable<boolean>();

  constructor(
    private sidebarService: SidebarService
  ) {
    this.showSidebar = sidebarService.expandToggle;
  }

  ngOnInit(): void {
  }

}
