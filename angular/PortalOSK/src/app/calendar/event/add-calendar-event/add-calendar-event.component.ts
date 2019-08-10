import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import * as moment from 'moment/moment';
import { Router } from '@angular/router';
import { CalendarEvent } from '../../calendarEvent';
import { CalendarService } from '../../org-calendar/calendar.service';



@Component({
  selector: 'app-add-calendar-event',
  templateUrl: './add-calendar-event.component.html',
  styleUrls: ['./add-calendar-event.component.scss']
})
export class AddCalendarEventComponent implements OnInit {
  data: CalendarEvent;
  constructor(public bsModalRef: BsModalRef, private calendarService: CalendarService,
              private router: Router) { }

  ngOnInit() {
    console.log(this.data);
  }

  formatDate() {
    return moment(this.data.dateFrom).format( 'DD MMMM YYYY') + ', godzina:' +
    moment(this.data.dateFrom).format( 'HH:mm') + ', czas jazdy: ' + this.data.duration + 'h';
  }
  book() {
    this.data.createdBy = 'Paweł Skórniewski';
    this.data.description = 'Jazda do Piotrkowa';
    this.data.calendarId = 1;
    this.calendarService.bookEvent(this.data);
    this.bsModalRef.hide();
    this.router.navigate(['customer/dashboard']);
  }
}
