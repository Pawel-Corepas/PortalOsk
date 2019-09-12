import { CalendarEvent } from '../calendar/calendarEvent';


export class Product {
    name: string;
    id: string;
    description: string;
    category: ProductCategory;
    theoryEvents: CalendarEvent[];
    practiceEvents: CalendarEvent[];
    constructor(name, id, description, category, theoryEvents, practiceEvents) {
        this.name = name;
        this.id = id;
        this.description = description;
        this.category = category;
        this.theoryEvents = theoryEvents;
        this.practiceEvents = practiceEvents;

    }
}
