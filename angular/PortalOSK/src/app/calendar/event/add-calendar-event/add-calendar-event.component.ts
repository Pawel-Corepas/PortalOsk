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
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-add-calendar-event',
  templateUrl: './add-calendar-event.component.html',
  styleUrls: ['./add-calendar-event.component.scss']
})
export class AddCalendarEventComponent implements OnInit {
  data: CalendarEvent;
  constructor(public bsModalRef: BsModalRef, private calendarService: CalendarService,
              private router: Router, private customerService: CustomerService,
              private productService: ProductService, private eventsService: EventsService,
              private http:HttpClient) { }

  ngOnInit() {

  }

  formatDate() {
    return moment(this.data.dateFrom).format( 'DD MMMM YYYY') + ', godzina:' +
    moment(this.data.dateFrom).format( 'HH:mm') + ', czas jazdy: ' + this.data.duration + 'h';
  }
  book() {
   
    this.data.createdBy = {
        creatorType: "Student",
        creatorId: "5e8ccdc206c6fd1038c1ed06"
    };
    this.data.description = 'Jazda do Piotrkowa';
    this.data.calendarId = "5e8cccc306c6fd1038c1ecfe";
    this.data.studentId = "5e8ccdc206c6fd1038c1ed06";
    this.data.courseId = "5e8cccc306c6fd1038c1ecfe";
    this.data.instructorId= "5e9475ed8c449829c090dabd";
    this.data.duration = 1;
    this.data.type = EventTypeEnum.practiceLesson;
    this.http.post('http://localhost:3000/events',this.data).subscribe(
      (res) => {
        this.calendarService.bookEvent(this.data);
        this.productService.setProductEvents(this.data);
        this.eventsService.addEvent(this.data);
        this.bsModalRef.hide();
        this.router.navigate(['customer/dashboard']);
      }
    )

  }
}
