import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import * as moment from 'moment/moment';
import { Router } from '@angular/router';

import { CalendarService } from '../../org-calendar/calendar.service';
import { CalendarEvent } from '../../calendarEvent';
import { EventTypeEnum } from '../../eventType';
import { ProductService } from 'src/app/products/produc.service';
import { EventsService } from '../events.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Students } from 'rest_client_1.0';




@Component({
  selector: 'app-add-calendar-event',
  templateUrl: './add-calendar-event.component.html',
  styleUrls: ['./add-calendar-event.component.scss']
})
export class AddCalendarEventComponent implements OnInit {
  lesson:FormGroup;
  data: CalendarEvent;
  instructorStudents: Students[];
  constructor(public bsModalRef: BsModalRef, private calendarService: CalendarService,
              private productService: ProductService, private eventsService: EventsService,
              private http:HttpClient) { }

  ngOnInit() {
    this.instructorStudents = this.calendarService.getInstructor().students
    console.log(this.instructorStudents)
    this.lesson = new FormGroup (
      {
        duration: new FormControl('', [Validators.required]),
        description: new FormControl(''),
        place: new FormControl('',[Validators.required]),
        student: new FormControl('',[Validators.required])
      }
    );
  }

  formatDate() {
    return moment(this.data.dateFrom).format( 'DD MMMM YYYY') 
  }
  formatHour(){
    return 'Godzina:' + moment(this.data.dateFrom).format( 'HH:mm') ;
  }
  book() {
   let theStudent;
   let theStudentCourse;
    if (this.calendarService.getStudent()){
      theStudent = this.calendarService.getStudent()
      theStudentCourse =  this.calendarService.getStudent().courses[0]
    } else {
      theStudent = this.instructorStudents[this.lesson.value.student]
      theStudentCourse =  this.instructorStudents[this.lesson.value.student].courses[0]
    }
    
    this.data.createdBy = {
        creatorType: "Student",
        creatorId: "5e8ccdc206c6fd1038c1ed06"
    };
    this.data.description = this.lesson.value.description;
    this.data.calendarId = this.calendarService.getInstructor()._id;
    this.data.studentId = theStudent._id;
    this.data.courseId = theStudentCourse;
    this.data.instructorId= this.calendarService.getInstructor()._id;
    this.data.duration = this.lesson.value.duration;
    this.data.place = this.lesson.value.place
    this.data.type = EventTypeEnum.practiceLesson;
    console.log(this.data)
    this.http.post('http://localhost:3000/events',this.data).subscribe(
      (res) => {
        this.calendarService.bookEvent(this.data);
        this.productService.setProductEvents(this.data);
        this.eventsService.addEvent(this.data);
        this.bsModalRef.hide();
      }
    )

  }
}
