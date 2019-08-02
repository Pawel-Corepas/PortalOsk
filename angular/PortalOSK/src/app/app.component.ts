import { Component, OnInit, OnChanges } from '@angular/core';
import { CustomerSidebarService } from './customers/customers-sidebar-menu/customer-sidebar-service';
import { ResizedEvent } from 'angular-resize-event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'customer-sidenav';

  constructor(public sidebarservice: CustomerSidebarService) { }
  onResized(event) {
    if(event.target.window.innerWidth< 1768){
      this.hideSidebar()
      } else{
        this.sidebarservice.setSidebarState(false);
      }
  }
  toggleSidebar() {
    this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
  }
  toggleBackgroundImage() {
    this.sidebarservice.hasBackgroundImage = !this.sidebarservice.hasBackgroundImage;
  }
  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }

  hideSidebar() {
    this.sidebarservice.setSidebarState(true);
  }
}
