import { CalendarEvent } from './calendarEvent';

export class Day {
    date: Date;
    events: CalendarEvent[];
    freeEventsCount: number;
}
