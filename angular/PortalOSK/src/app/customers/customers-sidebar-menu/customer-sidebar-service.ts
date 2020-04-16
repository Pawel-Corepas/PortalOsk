import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerSidebarService {
  toggled = false;
  _hasBackgroundImage = true;
  menus = [
    {
      title: 'general',
      type: 'header'
    },
    {
      title: 'Dashboard',
      icon: 'fa fa-tachometer-alt',
      active: false,
      type: 'dropdown',
      routerLink: '/',
      badge: {
        text: 'New ',
        class: 'badge-warning'
      },
      submenus: [
        {
          title: 'Kursant Dashboard',
          badge: {
            text: 'Pro ',
            class: 'badge-success'
          },
          routerLink: '/customer/dashboard',
        },
        {
          title: 'Rozliczenia',
           routerLink: '/',
        },
        {
          title: 'Faktury',
          routerLink: '/'
        }
      ]
    },
    {
      title: 'Środki Trwałe',
      icon: 'fa fa-shopping-cart',
      active: false,
      type: 'dropdown',
      routerLink: '/',
      badge: {
        text: '3',
        class: 'badge-danger'
      },
      submenus: [
        {
          title: 'Samochody',
          routerLink: '/'
        },
        {
          title: 'Wyposażenie',
          routerLink: '/'
        },
        {
          title: 'Biuro',
          routerLink: '/'
        }
      ]
    },
    {
      title: 'Instruktorzy',
      icon: 'far fa-gem',
      active: false,
      type: 'dropdown',
      routerLink: '/employees/instructors',
      submenus: [
        {
          title: 'Lista',
          routerLink: '/'
        },
        {
          title: 'Dodaj',
          routerLink: '/'
        },
        {
          title: 'Kalendzarz',
          routerLink: '/'
        }
      ]
    },
    {
      title: 'Kursy',
      icon: 'fa fa-chart-line',
      active: false,
      type: 'dropdown',
      routerLink: '/courses',
      submenus: [
        {
          title: 'Kat A',
          routerLink: '/'
        },
        {
          title: 'Kat B',
          routerLink: '/',
        },
        {
          title: 'Kat C, C+E',
          routerLink: '/'
        },
        {
          title: 'Kat D',
          routerLink: '/'
        }
      ]
    },
    {
      title: 'Oddziały',
      icon: 'fa fa-globe',
      active: false,
      type: 'dropdown',
      routerLink: '/',
      submenus: [
        {
          title: 'Radomsko',
          routerLink: '/'
        },
        {
          title: 'Włoszczowa',
          routerLink: '/'
        }
      ]
    },
    {
      title: 'Kursanci',
      type: 'header'
    },
    {
      title: 'Kursanci',
      icon: 'fa fa-book',
      active: false,
      type: 'simple',
      routerLink: '/customers',
      badge: {
        text: '15',
        class: 'badge-primary'
      },
    },
    {
      title: 'Kalendarz Jazd',
      icon: 'fa fa-calendar',
      active: false,
      type: 'simple',
      routerLink: '/org/calendar'
    },
    {
      title: 'Dokumenty',
      icon: 'fa fa-folder',
      active: false,
      type: 'simple',
      routerLink: '/'
    }
  ];
  constructor() { }

  toggle() {
    this.toggled = ! this.toggled;
  }

  getSidebarState() {
    return this.toggled;
  }

  setSidebarState(state: boolean) {
    this.toggled = state;
  }

  getMenuList() {
    return this.menus;
  }

  get hasBackgroundImage() {
    return this._hasBackgroundImage;
  }

  set hasBackgroundImage(hasBackgroundImage) {
    this._hasBackgroundImage = hasBackgroundImage;
  }
}
