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
        console.log('getting events by calendarId:' + calendarId);
        console.log(this.events);
        const myevents: CalendarEvent [] = this.events.filter(
            (event: CalendarEvent) => {
                return event.calendarId === calendarId;
            }
        );

        console.log(myevents);
        return myevents;
    }

    getEventsByProductId(productId) {
        console.log('getting events by productId:' + productId);
        console.log(this.events);
        const myevents: CalendarEvent [] = this.events.filter(
            (event: CalendarEvent) => {
                return event.productId === productId;
            }
        );

        console.log(myevents);
        return myevents;
    }

    getEventsByCustomerId(customerId: string) {
        console.log('getting events by customerId:' + customerId);
        console.log(this.events);
        const myevents: CalendarEvent [] = this.events.filter(
            (event: CalendarEvent) => {
                return event.customerId === customerId;
            }
        );

        console.log(myevents);
        return myevents;
    }
    getEventsByCalendarIdAndDay(calendarId: string, day: Date) {
        console.log('getting events by calendarId:' + calendarId + ' and date:' + day);
        console.log(this.events);
        const myevents: CalendarEvent [] = this.events.filter(
            (event: CalendarEvent) => {
                return event.calendarId === calendarId
                && moment(event.dateFrom).isSame(day, 'day');
            }
        );

        console.log(myevents);
        return myevents;
    }
}
