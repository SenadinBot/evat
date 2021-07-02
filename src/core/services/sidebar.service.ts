import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  readonly expandToggleSource = new BehaviorSubject<boolean>(false);
  public expandToggle = this.expandToggleSource.asObservable();

  expandSidebar() {
    this.expandToggleSource.next(!this.expandToggleSource.value);
  }

}
