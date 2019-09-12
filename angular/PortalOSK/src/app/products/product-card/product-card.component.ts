import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CalendarService } from 'src/app/calendar/org-calendar/calendar.service';
import { CalendarMonth } from 'src/app/calendar/calendar-month';
import * as moment from 'moment/moment';
import { CalendarEvent } from 'src/app/calendar/calendarEvent';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  calendar: CalendarMonth;
  currentEvent: CalendarEvent;
  constructor( private router: Router,
               private calendarService: CalendarService) {}

  ngOnInit() {
    this.calendar = this.calendarService.calendar;
    this.currentEvent = this.calendar.weeks[this.calendarService.weekIndex].
    days[this.calendarService.dayIndex].events[0];
  }

  getNextBookingDate() {
    return moment(this.currentEvent.dateFrom).format('DD MMMM YYYY');
  }

  getNextBookingTime() {
    return moment(this.currentEvent.dateFrom).format('HH:mm');
  }
  openModalCalendar() {

  this.router.navigate(['/customer/booking'] );
  }

  openTheorySchedule() {
    this.router.navigate(['/customer/product/events']);
  }
}
