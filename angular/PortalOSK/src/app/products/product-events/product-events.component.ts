import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarEvent } from 'src/app/calendar/calendarEvent';
import { CustomerService } from 'src/app/customers/customer.service';
import { ProductService } from '../produc.service';
import { EventsService } from 'src/app/calendar/event/events.service';
import * as moment from 'moment/moment';

@Component({
  selector: 'app-product-events',
  templateUrl: './product-events.component.html',
  styleUrls: ['./product-events.component.scss']
})
export class ProductEventsComponent implements OnInit {
  events: CalendarEvent [];
  constructor(private router: Router,
              private productService: ProductService,
              private eventsService: EventsService,
              private customerService: CustomerService) { }

  ngOnInit() {
    this.events = this.eventsService.getEventsByCustomerId(this.customerService.customer.id);
  }

  backProductCard() {
    this.router.navigate(['/customer/dashboard']);
  }
  getNextBookingDate(date: Date) {
    return moment(date).format('DD MMMM YYYY');
  }

  getNextBookingTime(date: Date) {
    return moment(date).format('HH:mm');
  }
}
