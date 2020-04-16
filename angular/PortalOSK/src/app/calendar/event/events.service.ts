import { Injectable } from '@angular/core';
import { CalendarEvent } from '../calendarEvent';
import * as moment from 'moment/moment';


@Injectable()
export class EventsService {
    events: CalendarEvent[] = [];

    addEvent(event: CalendarEvent) {
        this.events.push(event);
    }

    getEvents() {
        return this.events;
    }

    getEventsByCalendarId(calendarId) {

        const myevents: CalendarEvent[] = this.events.filter(
            (event: CalendarEvent) => {
                return event.calendarId === calendarId;
            }
        );


        return myevents;
    }

    getEventsByProductId(productId) {

        const myevents: CalendarEvent[] = this.events.filter(
            (event: CalendarEvent) => {
                return event.courseId === productId;
            }
        );


        return myevents;
    }

    getEventsByCustomerId(customerId: string) {

        const myevents: CalendarEvent[] = this.events.filter(
            (event: CalendarEvent) => {
                return event.studentId === customerId;
            }
        );


        return myevents;
    }
    getEventsByCalendarIdAndDay(calendarId: string, day: Date) {

        const myevents: CalendarEvent[] = this.events.filter(
            (event: CalendarEvent) => {
                return event.calendarId === calendarId
                    && moment(event.dateFrom).isSame(day, 'day');
            }
        );


        return myevents;
    }


}

