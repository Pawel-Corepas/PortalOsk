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
import { CustomersService } from './customers/customers-list/customers.service';
import { StatsBarComponent } from './common/stats-bar/stats-bar.component';
import { StatsBarItemComponent } from './common/stats-bar/stats-bar-item/stats-bar-item.component';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDashboardComponent } from './customers/customer-dashboard/customer-dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './common/charts/bar-chart/bar-chart.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

const appRoutes:Routes = [

  { path: 'customers', component: CustomersListComponent  },
  { path: 'customer/dashboard', component: CustomerDashboardComponent  }

];
@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    CustomersSidebarMenuComponent,
    StatsBarComponent,
    StatsBarItemComponent,
    CustomerDashboardComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    PerfectScrollbarModule,
    BrowserAnimationsModule,
    DeviceDetectorModule,
    AngularResizedEventModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    CustomersService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
