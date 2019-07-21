import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule, BsDropdownModule } from 'ngx-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CustomersSidebarMenuComponent } from './customers/customers-sidebar-menu/customers-sidebar-menu.component';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { AngularResizedEventModule } from 'angular-resize-event';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    CustomersSidebarMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    PerfectScrollbarModule,
    BrowserAnimationsModule,
    DeviceDetectorModule,
    AngularResizedEventModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
