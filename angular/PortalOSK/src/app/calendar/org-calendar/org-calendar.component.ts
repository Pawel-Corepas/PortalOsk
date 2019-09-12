import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarService } from './calendar.service';
import { CalendarMonth } from '../calendar-month';
import * as moment from 'moment/moment';
import { Day } from '../day';
import { Week } from '../week';
import { EventsService } from '../event/events.service';
@Component({
  selector: 'app-org-calendar',
  templateUrl: './org-calendar.component.html',
  styleUrls: ['./org-calendar.component.scss']
})
export class OrgCalendarComponent implements OnInit {
  calendar: CalendarMonth = new CalendarMonth();
  freeHours = 12;
  bookedHours = 0;
  progress = '0%';
  constructor(private router: Router, private calendarService: CalendarService,
              private eventsService: EventsService) { }

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
    console.log(day);
    this.calendarService.setDay(day, dayIndex);
    this.calendarService.setWeek(week, weekIndex);
    this.router.navigate(['customer/day/booking']);
  }
  getFreeDays(dayIndex, weekIndex) {
    this.calendar.weeks[weekIndex].days[dayIndex].freeEventsCount = this.calendarService.getFreeEvents(
      this.calendar.weeks[weekIndex].days[dayIndex].date, dayIndex, weekIndex).length;
    this.calendar = this.calendarService.calendar;
    return this.calendar.weeks[weekIndex].days[dayIndex].freeEventsCount;
  }
  getProgress(date) {
    this.bookedHours  = this.eventsService.getEventsByCalendarIdAndDay(this.calendarService.calendar.id, date).length;
    const progress =  (this.bookedHours / this.freeHours) * 100;
    console.log(Math.round(progress) + '%');
    return Math.round(progress) + '%';
  }

  isToday(date: Date) {
    const today = moment(new Date() );
    return moment(today).isSame(date, 'day');
  }
}
