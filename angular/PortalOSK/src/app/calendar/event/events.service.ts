import { Injectable } from '@angular/core';
import { CalendarEvent } from '../calendarEvent';
import * as moment from 'moment/moment';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class EventsService {
    events: CalendarEvent[] = [];

    constructor( private  httpClient:HttpClient) {
        
       
        
    }

    setEvents(events){
        this.events.push(events)
    }
    addEvent(event: CalendarEvent) {
        this.events.push(event);
    }

    getEvents() {
        return this.events;
    }

    getEventsByCalendarId(calendarId) {

        const myevents: CalendarEvent[] = this.events.filter(
            (event: CalendarEvent) => {
                return event.calendarId === "5e8cccc306c6fd1038c1ecfe";
            }
        );


        return myevents;
    }

    getEventsByProductId(productId) {

        const myevents: CalendarEvent[] = this.events.filter(
            (event: CalendarEvent) => {
                return event.courseId === "5e8cccc306c6fd1038c1ecfe";
            }
        );


        return myevents;
    }

    getEventsByCustomerId(customerId: string) {

        const myevents: CalendarEvent[] = this.events.filter(
            (event: CalendarEvent) => {
                return event.studentId === "5e8ccdc206c6fd1038c1ed06";
            }
        );


        return myevents;
    }
    getEventsByCalendarIdAndDay(calendarId: string, day: Date) {

        const myevents: CalendarEvent[] = this.events.filter(
            (event: CalendarEvent) => {
                return event.calendarId === "5e8cccc306c6fd1038c1ecfe"
                    && moment(event.dateFrom).isSame(day, 'day');
            }
        );


        return myevents;
    }


}

