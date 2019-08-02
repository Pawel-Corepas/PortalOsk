import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { StatItem } from 'src/app/common/stats-bar/stats-bar-item/stat-item';

@Injectable()
export class CustomersService {

    stats:StatItem[] =[
        {
            name:"Kandydaci",
            value:"24",
            class:"fa fa-address-book stats-item-box"
        },
        {
            name:"Kursansi na Kursie",
            value:"44",
            class:"fa fa-users stats-item-box"
        },  
        {
            name:"Ukończyli Kurs",
            value:"1224",
            class:"fa fa-address-card stats-item-box"
        }
    ]
    
    customers: Customer[] = [
        {
            id: "1",
            firstName: "Grzegorz",
            lastName: "Biś",
            avatarUri: "/assets/img/user.jpg",
            mobileNumber: "698564758",
            userAccountBalance: -1900.00,
            lessonsCount: 12,
            lastLessonDate: new Date("2019-12-07"),
            links: [
                {
                    resourceType: "COURSES",
                    resourceId: "1",
                    resourceUri: "/organizations/6/customers/6/courses"
                },
                {
                    resourceType: "PAYMENTS",
                    resourceId: null,
                    resourceUri: "/organizations/1/customers/6/payments"
                },
                {
                    resourceType: "EVENTS",
                    resourceId: null,
                    resourceUri: "/organizations/1/customers/6/events"
                },
                {
                    resourceType: "INSTRUCTORS",
                    resourceId: null,
                    resourceUri: "/organizations/1/customer/6/instructors"
                }
            ]
        },
        {
            id: "2",
            firstName: "Paweł",
            lastName: "Skórniewski",
            avatarUri: "/assets/img/user.jpg",
            mobileNumber: "698564758",
            userAccountBalance: -1900.00,
            lessonsCount: 12,
            lastLessonDate: new Date("2019-12-07"),
            links: [
                {
                    resourceType: "COURSES",
                    resourceId: "1",
                    resourceUri: "/organizations/6/customers/6/courses"
                },
                {
                    resourceType: "PAYMENTS",
                    resourceId: null,
                    resourceUri: "/organizations/1/customers/6/payments"
                },
                {
                    resourceType: "EVENTS",
                    resourceId: null,
                    resourceUri: "/organizations/1/customers/6/events"
                },
                {
                    resourceType: "INSTRUCTORS",
                    resourceId: null,
                    resourceUri: "/organizations/1/customer/6/instructors"
                }
            ]
        },
        {
            id: "3",
            firstName: "Łukasz",
            lastName: "Kaźmierczak",
            avatarUri: "/assets/img/user.jpg",
            mobileNumber: "698564758",
            userAccountBalance: -1900.00,
            lessonsCount: 12,
            lastLessonDate: new Date("2019-12-07"),
            links: [
                {
                    resourceType: "COURSES",
                    resourceId: "1",
                    resourceUri: "/organizations/6/customers/6/courses"
                },
                {
                    resourceType: "PAYMENTS",
                    resourceId: null,
                    resourceUri: "/organizations/1/customers/6/payments"
                },
                {
                    resourceType: "EVENTS",
                    resourceId: null,
                    resourceUri: "/organizations/1/customers/6/events"
                },
                {
                    resourceType: "INSTRUCTORS",
                    resourceId: null,
                    resourceUri: "/organizations/1/customer/6/instructors"
                }
            ]
        }
    ];

    GetCustomers(){
        return this.customers
    }

    GetStats(){
        return this.stats
    }
}