import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import * as moment from 'moment/moment';
import { Router } from '@angular/router';

import { CalendarService } from '../../org-calendar/calendar.service';
import { CustomerService } from 'src/app/customers/customer.service';
import { CalendarEvent } from '../../calendarEvent';
import { EventTypeEnum } from '../../eventType';
import { ProductService } from 'src/app/products/produc.service';
import { EventsService } from '../events.service';




@Component({
  selector: 'app-add-calendar-event',
  templateUrl: './add-calendar-event.component.html',
  styleUrls: ['./add-calendar-event.component.scss']
})
export class AddCalendarEventComponent implements OnInit {
  data: CalendarEvent;
  constructor(public bsModalRef: BsModalRef, private calendarService: CalendarService,
              private router: Router, private customerService: CustomerService,
              private productService: ProductService, private eventsService: EventsService) { }

  ngOnInit() {

  }

  formatDate() {
    return moment(this.data.dateFrom).format( 'DD MMMM YYYY') + ', godzina:' +
    moment(this.data.dateFrom).format( 'HH:mm') + ', czas jazdy: ' + this.data.duration + 'h';
  }
  book() {
   
    this.data.createdBy = 'Paweł Skórniewski';
    this.data.description = 'Jazda do Piotrkowa';
    this.data.calendarId = this.calendarService.calendar.id;
    this.data.customerId = this.customerService.customer.id;

   
    this.data.productId = this.customerService.customer.products[0].id;
    this.data.type = EventTypeEnum.practiceLesson;
    this.calendarService.bookEvent(this.data);
    this.productService.setProductEvents(this.data);
    this.eventsService.addEvent(this.data);
    this.bsModalRef.hide();
    this.router.navigate(['customer/dashboard']);
  }
}
