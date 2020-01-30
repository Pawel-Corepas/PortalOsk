import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AngularResizedEventModule } from 'angular-resize-event';
import { ChartsModule } from 'ng2-charts';
import { AlertModule, BsDropdownModule } from 'ngx-bootstrap';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrgCalendarComponent } from './calendar/org-calendar/org-calendar.component';
import { BarChartComponent } from './common/charts/bar-chart/bar-chart.component';
import { StatsBarItemComponent } from './common/stats-bar/stats-bar-item/stats-bar-item.component';
import { StatsBarComponent } from './common/stats-bar/stats-bar.component';
import { CustomerDashboardComponent } from './customers/customer-dashboard/customer-dashboard.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CustomersService } from './customers/customers-list/customers.service';
import { CustomersSidebarMenuComponent } from './customers/customers-sidebar-menu/customers-sidebar-menu.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CalendarService } from './calendar/org-calendar/calendar.service';
import { CalendarDayComponent } from './calendar/calendar-day/calendar-day.component';
import { AddCalendarEventComponent } from './calendar/event/add-calendar-event/add-calendar-event.component';
import { ProductEventsComponent } from './products/product-events/product-events.component';
import { ProductEventComponent } from './products/product-events/product-event/product-event.component';
import { ProductService } from './products/produc.service';
import { CustomerService } from './customers/customer.service';
import { EventsService } from './calendar/event/events.service';
import { ApiModule, BASE_PATH } from 'rest_client_1.0';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { CustomerAddComponent } from './customers/customer-add/customer-add.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { PaymentsDashboardComponent } from './payments/payments-dashboard/payments-dashboard.component';
import { PaymentAddComponent } from './payments/payment-add/payment-add.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

const appRoutes: Routes = [

  { path: 'customers', component: CustomersListComponent },
  { path: 'customer/dashboard', component: CustomerDashboardComponent },
  { path: 'org/calendar', component: OrgCalendarComponent },
  { path: 'customer/booking', component: OrgCalendarComponent },
  { path: 'customer/day/booking', component: CalendarDayComponent },
  { path: 'customer/product/events', component: ProductEventsComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    CustomersSidebarMenuComponent,
    StatsBarComponent,
    StatsBarItemComponent,
    CustomerDashboardComponent,
    BarChartComponent,
    OrgCalendarComponent,
    ProductCardComponent,
    CalendarDayComponent,
    AddCalendarEventComponent,
    ProductEventsComponent,
    ProductEventComponent,
    CustomerAddComponent,
    CustomerDetailsComponent,
    PaymentsDashboardComponent,
    PaymentAddComponent
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
    ChartsModule,
    ModalModule.forRoot(),
    HttpClientModule,
    ApiModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    { provide: BASE_PATH, useValue: environment.API_BASE_PATH },
    CustomersService,
    CalendarService,
    ProductService,
    CustomerService,
    EventsService
  ],
  entryComponents: [OrgCalendarComponent, AddCalendarEventComponent, CustomerAddComponent, CustomerDetailsComponent,
                    PaymentAddComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
