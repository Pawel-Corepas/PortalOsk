import { EventTypeEnum } from './eventType';

export class CalendarEvent {
dateFrom: Date;
dateTo: Date;
duration: number;
description: string;
createdBy: string;
studentId: string;
courseId: string;
calendarId: string;
instructorId: string
type: EventTypeEnum;
used: boolean;
}
