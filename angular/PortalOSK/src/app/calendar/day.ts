import { CalendarEvent } from './calendarEvent';

export class Day {
    date: Date;
    events: CalendarEvent[];
    intervals: CalendarEvent[];
    freeEventsCount: number;
}
