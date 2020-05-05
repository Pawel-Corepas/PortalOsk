import { EventTypeEnum } from './eventType';

export class CalendarEvent {
dateFrom: Date;
dateTo: Date;
duration: number;
description: string;
place: string;
createdBy: {
    creatorType: string
    creatorId: string
};
studentId: string;
courseId: string;
calendarId: string;
instructorId: string
type: EventTypeEnum;
used: boolean;
}
