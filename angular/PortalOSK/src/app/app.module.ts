import { NgModule, APP_INITIALIZER } from '@angular/core';
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
import { InstructorAssignCourseComponent } from './instructors/instructor-assign-course/instructor-assign-course.component';
import { InstructorAddComponent } from './instructors/instructor-add/instructor-add.component';
import { CourseAddComponent } from './courses/course-add/course-add.component';
import { CourseAssignComponent } from './courses/course-assign/course-assign.component';
import { LessonAddComponent } from './lessons/lesson-add/lesson-add.component';
import { CourseDashboardComponent } from './courses/course-dashboard/course-dashboard.component';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';
import { AmountService } from './common/services/amount.service';
import { CategoriesService } from './common/services/categories.service';
import { StudentsService } from './customers/students.service';
import { CoursesService } from './courses/courses.service';
import { CustomersAssignCourseComponent } from './customers/customers-assign-course/customers-assign-course.component';
import { InstructorsDashboardComponent } from './instructors/instructors-dashboard/instructors-dashboard.component';
import { InstructorsService } from './instructors/instructors.service';
import { InstructorDetailsComponent } from './instructors/instructor-details/instructor-details.component';
import { InstructorAssignStudentsComponent } from './instructors/instructor-assign-students/instructor-assign-students.component';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

const appRoutes: Routes = [

  { path: 'customers', component: CustomersListComponent },
  { path: 'courses', component: CourseDashboardComponent },
  { path: 'customer/dashboard', component: CustomerDashboardComponent },
  { path: 'org/calendar', component: OrgCalendarComponent },
  { path: 'customer/booking', component: OrgCalendarComponent },
  { path: 'customer/day/booking', component: CalendarDayComponent },
  { path: 'customer/product/events', component: ProductEventsComponent },
  { path: 'employees/instructors', component: InstructorsDashboardComponent },
];
export function init_app(appLoadService: CategoriesService) {
  console.log("app Initialized")
  return () => appLoadService.getCategories();
}
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
    PaymentAddComponent,
    InstructorAssignCourseComponent,
    InstructorAddComponent,
    CourseAddComponent,
    CourseAssignComponent,
    LessonAddComponent,
    CourseDashboardComponent,
    CourseDetailsComponent,
    CustomersAssignCourseComponent,
    InstructorsDashboardComponent,
    InstructorDetailsComponent,
    InstructorAssignStudentsComponent
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
    EventsService,
    AmountService,
    CategoriesService,
    { provide: APP_INITIALIZER, useFactory: init_app, deps: [CategoriesService], multi: true },
    StudentsService,
    CoursesService,
    InstructorsService
  ],
  entryComponents: [OrgCalendarComponent, AddCalendarEventComponent, CustomerAddComponent, CustomerDetailsComponent,
    PaymentAddComponent, InstructorAssignCourseComponent, InstructorAddComponent,InstructorDetailsComponent,InstructorAssignStudentsComponent,
    CourseAssignComponent, CourseAddComponent, InstructorAddComponent, LessonAddComponent, CustomersAssignCourseComponent, CourseDetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
