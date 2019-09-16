import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarService } from './calendar.service';
import { CalendarMonth } from '../calendar-month';
import * as moment from 'moment/moment';
import { Day } from '../day';
import { Week } from '../week';
import { EventsService } from '../event/events.service';
import { CalendarEvent } from '../calendarEvent';
@Component({
  selector: 'app-org-calendar',
  templateUrl: './org-calendar.component.html',
  styleUrls: ['./org-calendar.component.scss']
})
export class OrgCalendarComponent implements OnInit, AfterViewInit {

  calendar: CalendarMonth = new CalendarMonth();
  freeHours = 12;
  hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ];
  bookedHours = 0;
  progress = '0%';
  @ViewChild('testContent', {static: true}) testContent: ElementRef;
  constructor(private router: Router, private calendarService: CalendarService,
              private eventsService: EventsService) { }



  ngOnInit() {
   this.calendar = this.calendarService.getCalendar(new Date());
   // tslint:disable-next-line:prefer-for-of
   for (let i = 0; i < this.calendar.weeks.length; i++) {
     // tslint:disable-next-line:prefer-for-of
     for ( let y = 0; y < this.calendar.weeks[i].days.length; y++ ) {
       // tslint:disable-next-line:prefer-for-of
       for (let x = 0; x < this.calendar.weeks[i].days[y].intervals.length; x++) {
         const currentEvent = this.calendar.weeks[i].days[y].intervals[x];
         const items = this.calendar.weeks[i].days[y].events.filter((item) => {
          return moment(item.dateFrom).isSame(currentEvent.dateFrom);
        });
         console.log(items.length);
         const check = items.length === 1;
         if (check) {
         this.calendar.weeks[i].days[y].intervals[x].used = check;
        }
       }
     }
   }
   console.log(this.testContent);
  }
  ngAfterViewInit() {
    console.log();
  }

  getWidth() {
    return document.getElementById('testContent').offsetWidth / this.calendarService.eventsInIntervalCount + 'px';
  }

  backToCustomerDashboard() {
    this.router.navigate(['customer/dashboard']);
  }
  getDayInMonth(date: Date) {
    return moment(date).format('D');
  }

  viewDay(day: Day, dayIndex, week: Week, weekIndex) {

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

    return Math.round(progress) + '%';
  }

  isToday(date: Date) {
    const today = moment(new Date() );
    return moment(today).isSame(date, 'day');
  }
  used(interval: CalendarEvent) {

    return interval.used;
  }
}
