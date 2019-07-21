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
      badge: {
        text: 'New ',
        class: 'badge-warning'
      },
      submenus: [
        {
          title: 'Raporty',
          badge: {
            text: 'Pro ',
            class: 'badge-success'
          }
        },
        {
          title: 'Rozliczenia'
        },
        {
          title: 'Faktury'
        }
      ]
    },
    {
      title: 'Środki Trwałe',
      icon: 'fa fa-shopping-cart',
      active: false,
      type: 'dropdown',
      badge: {
        text: '3',
        class: 'badge-danger'
      },
      submenus: [
        {
          title: 'Samochody',
        },
        {
          title: 'Wyposażenie'
        },
        {
          title: 'Biuro'
        }
      ]
    },
    {
      title: 'Instruktorzy',
      icon: 'far fa-gem',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Lista',
        },
        {
          title: 'Dodaj'
        },
        {
          title: 'Kalendzarz'
        }
      ]
    },
    {
      title: 'Kursy',
      icon: 'fa fa-chart-line',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Kat A',
        },
        {
          title: 'Kat B'
        },
        {
          title: 'Kat C, C+E'
        },
        {
          title: 'Kat D'
        }
      ]
    },
    {
      title: 'Oddziały',
      icon: 'fa fa-globe',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Radomsko',
        },
        {
          title: 'Włoszczowa'
        }
      ]
    },
    {
      title: 'Kursanci',
      type: 'header'
    },
    {
      title: 'Lista Kursantów',
      icon: 'fa fa-book',
      active: false,
      type: 'simple',
      badge: {
        text: '15',
        class: 'badge-primary'
      },
    },
    {
      title: 'Kalendarz Jazd',
      icon: 'fa fa-calendar',
      active: false,
      type: 'simple'
    },
    {
      title: 'Dokumenty',
      icon: 'fa fa-folder',
      active: false,
      type: 'simple'
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
