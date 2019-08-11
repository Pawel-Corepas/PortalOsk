import { Injectable } from '@angular/core';
import { CalendarMonth } from '../calendar-month';
import * as moment from 'moment/moment';
import { Week } from '../week';
import { Day } from '../day';
import { getDay } from 'ngx-bootstrap';
import { WorkingHours } from '../working-hours';
import { CalendarEvent } from '../calendarEvent';
import { diff, addedDiff, deletedDiff, updatedDiff, detailedDiff } from 'deep-object-diff';

@Injectable()
export class CalendarService {

    calendarMoment = moment(new Date());
    calendar: CalendarMonth;
    day: Day;
    week: Week;
    workingHours: WorkingHours = new WorkingHours();
    dayIndex;
    weekIndex;

    getCalendar(date: Date) {
        if (this.calendar === undefined) {
            this.calendar = new CalendarMonth ();
            moment.locale('pl');
            this.calendar.name = moment(date).format('MMMM');
            this.calendar.year = moment(date).format('YYYY');
            this.calendar.numberOfDays = moment(date).daysInMonth();
            this.calendar.weeks = this.getWeeks(date);
        }
        return this.calendar;
    }

    getWeeks(date: Date) {

        const weeks: Week[] = [];
        const monthStartDay = moment(date).startOf('month').toDate();
        for (let i = 0; i < 5; i++) {
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
            days.push(day);
        }

        return days;
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

    getFreeEvents(dayIndex, weekIndex) {
       this.workingHours.startDateTime = moment(new Date()).startOf('day').add(8, 'hour').toDate();
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
        return this.checkItem( item, dayIndex, weekIndex );
      });
    }
    checkItem(item: CalendarEvent, dayIndex, weekIndex) {

        const bookedEvents: CalendarEvent[] = this.getBookedEvents(dayIndex, weekIndex);
       
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < bookedEvents.length; i++) {
            if (moment(item.dateFrom).isSame(moment(bookedEvents[i].dateFrom))) {
                return false;
             }
        }
        return true;
    }
    bookEvent(event: CalendarEvent) {
        this.calendar.weeks[this.weekIndex].days[this.dayIndex].events.push(event);
    }

    getBookedEvents(dayIndex, weekIndex) {
        return this.calendar.weeks[weekIndex].days[dayIndex].events;
    }
}
