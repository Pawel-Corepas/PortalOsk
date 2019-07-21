import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CustomerSidebarService } from './customer-sidebar-service';

@Component({
  selector: 'app-customers-sidebar-menu',
  templateUrl: './customers-sidebar-menu.component.html',
  styleUrls: ['./customers-sidebar-menu.component.scss'],
  animations: [
    trigger('slide', [
      state('up', style({ height: 0 })),
      state('down', style({ height: '*' })),
      transition('up <=> down', animate(200))
    ])
  ]
})
export class CustomersSidebarMenuComponent implements OnInit {

  menus = [];
  constructor(public sidebarservice: CustomerSidebarService) {
    this.menus = sidebarservice.getMenuList();
   }

  ngOnInit() {
  }

  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }

  toggle(currentMenu) {
    if (currentMenu.type === 'dropdown') {
      this.menus.forEach(element => {
        if (element === currentMenu) {
          currentMenu.active = !currentMenu.active;
        } else {
          element.active = false;
        }
      });
    }
  }

  getState(currentMenu) {

    if (currentMenu.active) {
      return 'down';
    } else {
      return 'up';
    }
  }

  hasBackgroundImage() {
    return this.sidebarservice.hasBackgroundImage;
  }

}
