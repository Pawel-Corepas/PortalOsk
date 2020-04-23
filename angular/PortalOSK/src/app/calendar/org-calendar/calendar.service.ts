import { Injectable } from '@angular/core';
import { CalendarMonth } from '../calendar-month';
import * as moment from 'moment/moment';
import { Week } from '../week';
import { Day } from '../day';
import { getDay } from 'ngx-bootstrap';
import { WorkingHours } from '../working-hours';

import { diff, addedDiff, deletedDiff, updatedDiff, detailedDiff } from 'deep-object-diff';
import { CalendarEvent } from '../calendarEvent';
import { EventsService } from '../event/events.service';
import { Students, Instructors } from 'rest_client_1.0';

@Injectable()
export class CalendarService {

    calendarMoment = moment(new Date());
    student: Students;
    instructor: Instructors;
    calendar: CalendarMonth;
    day: Day;
    week: Week;
    workingHours: WorkingHours = new WorkingHours();
    dayIndex;
    weekIndex;
    dayMinutes = 60 * 12;
    eventInterval = 60;
    eventsInIntervalCount= this.dayMinutes / this.eventInterval
    currentEvent: CalendarEvent  = new CalendarEvent ();
    constructor(private eventsService: EventsService) {

    }

     getCalendar(date: Date) {
      

        if (this.calendar === undefined) {
            this.calendar = new CalendarMonth ();
            moment.locale('pl');
            this.calendar.id = '1';
            this.calendar.name = moment(date).format('MMMM');
            this.calendar.year = moment(date).format('YYYY');
            this.calendar.numberOfDays = moment(date).daysInMonth();
            this.calendar.weeks = this.getWeeks(date);
        }
        console.log(JSON.stringify(this.calendar));
        return this.calendar;
    }

    getWeeks(date: Date) {

        const weeks: Week[] = [];
        const monthStartDay = moment(date).startOf('month').toDate();
        for (let i = 0; i < 6; i++) {
            const weekDay = moment(monthStartDay).startOf('month').add(i * 7, 'days').toDate();
            const week = new Week();
            week.number = moment(weekDay).week();
            week.days = this.getWeekDays(weekDay, i);
            weeks.push(week);

        }
        return weeks;
    }

    getWeekDays(date: Date, weekIndex) {

        const days: Day[] = [];
        for (let i = 0; i < 7; i++) {
            const day = new Day();
            day.date = moment(date).startOf('week').add(i, 'days').toDate();
            day.events = [];
            day.intervals = this.getIntervals(day.date);
            days.push(day);
        }

        return days;
    }

    getIntervals(date: Date) {
        const intervals: CalendarEvent [] = [];
        const dayMinutes = 60 * 12;
        const eventInterval = 60;
        this.eventsInIntervalCount = dayMinutes / eventInterval;
        this.currentEvent.dateTo = moment(date).add(8, 'hours').toDate();

        for (let i = 0; i < this.eventsInIntervalCount; i++) {
            const internalEvent = new CalendarEvent ();
            internalEvent.dateFrom = this.currentEvent.dateTo ;
            internalEvent.dateTo = moment(internalEvent.dateFrom).add(eventInterval, 'minutes').toDate();
            internalEvent.used = false;
            this.currentEvent = internalEvent ;
            intervals.push(this.currentEvent);
        }

        return intervals;
    }

    setDay(day: Day, index ) {
        this.day = day;
        this.dayIndex = index;
    }

    getCurrentDay() {
        return this.day;
        
    }

    setWeek(week: Week, index ) {
        this.week = week;
        this.weekIndex = index;
    }

    getCurrentWeek() {
        return this.week;
    }

    getFreeEventsImple(day:Day){

        return day.intervals
    }

    getFreeEvents(day: Date, dayIndex, weekIndex) {
       this.workingHours.startDateTime = moment(day).startOf('day').add(8, 'hour').toDate();
       this.workingHours.endDateTime = moment(this.workingHours.startDateTime).add(12, 'hour').toDate();
       this.workingHours.duration = moment(this.workingHours.endDateTime).diff(moment(this.workingHours.startDateTime), 'hours');
       const freeEvents: CalendarEvent[] = [];
       for (let i = 0; i < 12; i++) {
       const freeEvent: CalendarEvent = new CalendarEvent();
       freeEvent.dateFrom = moment(this.workingHours.startDateTime).add(i, 'hours').toDate();
       freeEvent.dateTo = moment(freeEvent.dateFrom).add(1, 'hour').toDate();
       freeEvent.duration = 1;
       freeEvents.push(freeEvent);
       }

       return freeEvents.filter((item) => {
        // tslint:disable-next-line:prefer-for-of
        return this.checkItem( item, dayIndex, weekIndex, day );
      });
    }
    checkItem(item: CalendarEvent, dayIndex, weekIndex, date) {

        const bookedEvents: CalendarEvent[] = this.eventsService.getEventsByCalendarIdAndDay(
            this.calendar.id, date);
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < bookedEvents.length; i++) {
            if (moment(item.dateFrom).isSame(moment(bookedEvents[i].dateFrom))) {
                return false;
             }
        }
        return true;
    }
    bookEvent(event: CalendarEvent) {
        console.log (JSON.stringify(event))
        this.calendar.weeks[this.weekIndex].days[this.dayIndex].events.push(event);

    }
    getStudent(){
        return this.student
    }

    setStudent(student:Students){
        this.student = student;
    }

    getInstructor(){
        return this.instructor
    }

    setInstructor(instructor:Instructors){
        this.instructor = instructor;
    }
}
