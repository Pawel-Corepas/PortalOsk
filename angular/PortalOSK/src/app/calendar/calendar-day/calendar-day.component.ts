import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../org-calendar/calendar.service';
import * as moment from 'moment/moment';
import { Router } from '@angular/router';

import { Day } from '../day';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AddCalendarEventComponent } from '../event/add-calendar-event/add-calendar-event.component';
import { CalendarEvent } from '../calendarEvent';

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.scss']
})
export class CalendarDayComponent implements OnInit {
  freeEvents: CalendarEvent[];
  day: Day;
  modalRef: BsModalRef;
  constructor(private calendarService: CalendarService,
              private router: Router,
              private modalService: BsModalService) {

   }

  ngOnInit() {
    if (this.calendarService.getCurrentDay() === undefined) {
      return this.router.navigate(['customer/booking']);
    }
    this.freeEvents = this.calendarService.getFreeEvents(
      this.calendarService.day.date, this.calendarService.dayIndex, this.calendarService.weekIndex);
    console.log(this.freeEvents);
  }

  formatDay() {
    this.day = this.calendarService.getCurrentDay();
    return moment(this.day.date).format('DD MMMM YYYY');
  }
  formatHour(event) {
    return moment(event.dateFrom).format('HH:mm');
  }

  backToMonthView() {
    this.router.navigate(['customer/booking']);
  }

  bookEvent(event: CalendarEvent) {
    console.log('booking event');
    this.modalRef = this.modalService.show(AddCalendarEventComponent, {
      initialState: {
        data: event
      }
    });
  }

}
