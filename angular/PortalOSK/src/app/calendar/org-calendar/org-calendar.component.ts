import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarService } from './calendar.service';
import { CalendarMonth } from '../calendar-month';
import * as moment from 'moment/moment';
import { Day } from '../day';
import { Week } from '../week';
import { EventsService } from '../event/events.service';
import { CalendarEvent } from '../calendarEvent';
import { HttpClient } from '@angular/common/http';
import { Students, Instructors, InstuctorsControllerService } from 'rest_client_1.0';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-org-calendar',
  templateUrl: './org-calendar.component.html',
  styleUrls: ['./org-calendar.component.scss']
})
export class OrgCalendarComponent implements OnInit {
  student: Students;
  selectedInstructor: Instructors;
  instructorsList: Instructors[];
  calendar: CalendarMonth = new CalendarMonth();
  freeHours = 12;
  hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  bookedHours = 0;
  progress = '0%';
  eventsUrl='http://localhost:3000/events';
  currentIntervalHovered=null;
  
  today;

  instructors: FormGroup;

  @ViewChild('testContent', { static: true }) testContent: ElementRef;
  constructor(private router: Router,
    private calendarService: CalendarService,
    private eventsService: EventsService,
    private http: HttpClient,
    private instructorService: InstuctorsControllerService,
    ) { }



  ngOnInit() {
    moment.locale('pl');
    this.today =  moment(new Date()).format('DD-MM-YYYY')
    
    this.student = this.calendarService.getStudent();

    if (this.student) {
      this.instructorsList = this.student.instructors;
      console.log("selected: ")
      console.log(this.instructorsList[0])
      this.selectedInstructor = this.instructorsList[0]
      this.calendarService.setInstructor(this.selectedInstructor);
      this.instructors = new FormGroup(
        {
          instructor: new FormControl(0)
        }
      );
    } else {
      this.instructorService.instuctorsControllerFind().subscribe(
        (instructors) => {
          this.instructorsList = instructors
         
        }
      )
      this.instructors = new FormGroup(
        {
          instructor: new FormControl('')
        }
      );
    }
   
    console.log(this.instructorsList)
    this.getCalendar()
    
  }

  getCalendar(){
    

    if(this.selectedInstructor){
      
      this.eventsUrl = 'http://localhost:3000/events?instructorId='+this.selectedInstructor._id;
    }

    this.http.get(this.eventsUrl).subscribe(
      (calendar: CalendarMonth) => {
        this.calendar = calendar;
        this.calendarService.calendar = calendar;
        this.calendarService.setInstructor(this.selectedInstructor);
      }
    )


  }

  setSelectedInstructor(event) {

    this.selectedInstructor = this.instructorsList[event.target.value]

    
    this.getCalendar()
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
    this.router.navigate(['customer/day/booking'])
  }
  getFreeDays(dayIndex, weekIndex) {
    this.calendar.weeks[weekIndex].days[dayIndex].freeEventsCount = this.calendarService.getFreeEvents(
      this.calendar.weeks[weekIndex].days[dayIndex].date, dayIndex, weekIndex).length;
    this.calendar = this.calendarService.calendar;
    return this.calendar.weeks[weekIndex].days[dayIndex].freeEventsCount;
  }

  getFreeEvents(day: Day) {

    let events = this.calendarService.getFreeEventsImple(day)
      .filter(
        (item) => {
          return !item.used
        }
      )
    return events.length
  }
  getProgress(date) {
    this.bookedHours = this.eventsService.getEventsByCalendarIdAndDay(this.calendarService.calendar.id, date).length;
    const progress = (this.bookedHours / this.freeHours) * 100;

    return Math.round(progress) + '%';
  }

  isToday(date: Date) {
    const today = moment(new Date());
    return moment(today).isSame(date, 'day');
  }
  used(interval: CalendarEvent) {

    return interval.used;
  }

}
