import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarService } from './calendar.service';
import { CalendarMonth } from '../calendar-month';
import * as moment from 'moment/moment';
import { Day } from '../day';
import { Week } from '../week';
@Component({
  selector: 'app-org-calendar',
  templateUrl: './org-calendar.component.html',
  styleUrls: ['./org-calendar.component.scss']
})
export class OrgCalendarComponent implements OnInit {
  calendar: CalendarMonth = new CalendarMonth();
  constructor(private router: Router, private calendarService: CalendarService) { }

  ngOnInit() {
   this.calendar = this.calendarService.getCalendar(new Date());
  }

  backToCustomerDashboard() {
    this.router.navigate(['customer/dashboard']);
  }
  getDayInMonth(date: Date) {
    return moment(date).format('D');
  }

  viewDay(day: Day, dayIndex, week: Week, weekIndex) {
    console.log(dayIndex + ':' + weekIndex);
    this.calendarService.setDay(day, dayIndex);
    this.calendarService.setWeek(week, weekIndex);
    this.router.navigate(['customer/day/booking']);
  }
}
