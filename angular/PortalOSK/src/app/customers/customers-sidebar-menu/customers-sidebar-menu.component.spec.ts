import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersSidebarMenuComponent } from './customers-sidebar-menu.component';

describe('CustomersSidebarMenuComponent', () => {
  let component: CustomersSidebarMenuComponent;
  let fixture: ComponentFixture<CustomersSidebarMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersSidebarMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersSidebarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
