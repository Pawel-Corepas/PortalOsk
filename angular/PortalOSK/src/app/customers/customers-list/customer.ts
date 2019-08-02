import { LinkedList } from 'ngx-bootstrap';
import { Link } from 'src/app/link';

export class Customer{
    id: string;
    firstName: string;
    lastName: string;
    avatarUri: string;
    mobileNumber: string;
    userAccountBalance: number;
    lessonsCount: number;
    lastLessonDate: Date;
    links: Link[];
}