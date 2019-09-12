import { Injectable } from '@angular/core';
import { Product } from './product';
import { CalendarService } from '../calendar/org-calendar/calendar.service';
import { CalendarEvent } from '../calendar/calendarEvent';

@Injectable()
export class ProductService {
product: Product = new Product ('Kurs Lipcowy 10.07.2019', '1', '', 'KATEGORIA_B', [], []);
products: Product [] = [];

constructor(private calendarService: CalendarService) {

}

getProducts() {
    this.products.push(this.product);
    return this.products;
}

setProductEvents(event: CalendarEvent) {
 this.product.practiceEvents.push(event);
}

getProductEvents() {
    return this.product.practiceEvents;
}
}
