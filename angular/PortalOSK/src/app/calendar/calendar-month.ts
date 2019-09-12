import { NumberValueAccessor } from '@angular/forms';
import { Week } from './week';

export class CalendarMonth {
id: string;
name: string;
year: string;
weeks: Week [];
numberOfDays: number;
}
