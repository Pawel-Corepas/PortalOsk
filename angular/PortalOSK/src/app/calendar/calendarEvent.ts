import { EventTypeEnum } from './eventType';

export class CalendarEvent {
dateFrom: Date;
dateTo: Date;
duration: number;
description: string;
createdBy: string;
customerId: string;
productId: string;
calendarId: string;
type: EventTypeEnum;
used: boolean;
}
