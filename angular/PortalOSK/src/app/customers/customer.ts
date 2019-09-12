import { LinkedList } from 'ngx-bootstrap';
import { Link } from 'src/app/link';
import { Product } from 'src/app/products/product';

export class Customer {
    id: string;
    firstName: string;
    lastName: string;
    avatarUri: string;
    mobileNumber: string;
    userAccountBalance: number;
    lessonsCount: number;
    lastLessonDate: Date;
    products: Product [];
    status: CustomerStatus;
    links: Link[];
}
