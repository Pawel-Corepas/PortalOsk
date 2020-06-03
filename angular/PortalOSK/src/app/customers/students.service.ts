import { Injectable } from '@angular/core';
import { Students } from 'rest_client_1.0/model/students';
import { StudentsControllerService } from 'rest_client_1.0';
import { Observable, Subject } from 'rxjs';
import { CoursesService } from '../courses/courses.service';

@Injectable ()
export class StudentsService {
    //students = new Subject<Students[]>();
        students
    constructor(  private studentService: StudentsControllerService,
                private coursesService: CoursesService) {
        this.reloadStudents()
        
    }

    reloadStudents(){
    /*    this.studentService.studentsControllerFind().subscribe(
            (students) => {
                
                this.students.next(students)
                
                console.log(this.students)
            }
        )*/

        this.students = [
            {
                "instructors": [
                    {
                        "categories": [
                            "5e8ccd0e06c6fd1038c1ecff"
                        ],
                        "students": [
                            null,
                            "5e8ccdc206c6fd1038c1ed06",
                            "5e8e23f7a0fade1de8ea7bba",
                            "5e937f9fd0dbd1090450cff6",
                            "5e91cbc4a611e10c7098e5ed"
                        ],
                        "courses": [
                            "5e90df7972fcf42550271900",
                            "5eb043da24c7a95d141a4fc5"
                        ],
                        "_id": "5e938da1fc994247e0f99425",
                        "name": "Sławomir",
                        "surname": "Markiewicz",
                        "licenceIdentifier": "ERA154",
                        "mobileNumber": "607584698",
                        "email": "slawek@elcar.pl",
                        "__v": 7
                    },
                    {
                        "categories": [
                            "5e8ccd0e06c6fd1038c1ecff",
                            "5e8ccd1e06c6fd1038c1ed00"
                        ],
                        "students": [
                            "5e8ccdc206c6fd1038c1ed06",
                            "5e937f9fd0dbd1090450cff6",
                            "5e91cbc4a611e10c7098e5ed"
                        ],
                        "courses": [
                            "5e90df7972fcf42550271900",
                            "5e8e2837c984024b80a5e1e6"
                        ],
                        "_id": "5e9475ed8c449829c090dabd",
                        "name": "Paweł",
                        "surname": "Skórniewski",
                        "licenceIdentifier": "ERA016",
                        "mobileNumber": "607584697",
                        "email": "skorniewski.pawel@gmail.com",
                        "__v": 5
                    }
                ],
                "courses": [
                    {
                        "students": [
                            "5e8ccdc206c6fd1038c1ed06",
                            "5e90df2b72fcf425502718ff",
                            "5e91cbc4a611e10c7098e5ed",
                            "5e937f9fd0dbd1090450cff6",
                            "5e8e23f7a0fade1de8ea7bba"
                        ],
                        "instructors": [],
                        "_id": "5e8cccc306c6fd1038c1ecfe",
                        "name": "Moj drugi testowy kurs",
                        "startDate": "2020-03-28T00:00:00.000Z",
                        "endDate": null,
                        "description": "Opis mojego kursu",
                        "place": "Radomsko",
                        "price": 2000,
                        "category": {
                            "_id": "5e8ccc9a06c6fd1038c1ecfc",
                            "symbol": "T",
                            "description": "Ciągniki Rolnicze",
                            "__v": 0
                        },
                        "__v": 5
                    },
                    {
                        "students": [
                            "5e8ccdc206c6fd1038c1ed06",
                            "5e91cbc4a611e10c7098e5ed",
                            "5e90df2b72fcf425502718ff",
                            "5e8e23f7a0fade1de8ea7bba"
                        ],
                        "instructors": [
                            "5e9475ed8c449829c090dabd",
                            "5e938da1fc994247e0f99425"
                        ],
                        "_id": "5e90df7972fcf42550271900",
                        "name": "Trzeci",
                        "startDate": "2020-04-10T00:00:00.000Z",
                        "endDate": null,
                        "description": "",
                        "place": "Radomsko",
                        "price": 200000,
                        "category": {
                            "_id": "5e8ccd4206c6fd1038c1ed02",
                            "symbol": "C+E",
                            "description": "Samochody Cieżarowe z Przyczepami",
                            "__v": 0
                        },
                        "__v": 6
                    },
                    {
                        "students": [
                            "5e8e23f7a0fade1de8ea7bba",
                            "5e90df2b72fcf425502718ff",
                            "5e8ccdc206c6fd1038c1ed06"
                        ],
                        "instructors": [
                            "5e9475ed8c449829c090dabd"
                        ],
                        "_id": "5e8e2837c984024b80a5e1e6",
                        "name": "Drugi Kurs",
                        "startDate": "2020-04-08T00:00:00.000Z",
                        "endDate": null,
                        "description": "",
                        "place": "Radomsko",
                        "price": 300000,
                        "category": {
                            "_id": "5e8ccd1e06c6fd1038c1ed00",
                            "symbol": "B",
                            "description": "Samochody Osobowe",
                            "__v": 0
                        },
                        "__v": 4
                    },
                    {
                        "students": [
                            "5e8ccdc206c6fd1038c1ed06",
                            "5e8e23f7a0fade1de8ea7bba",
                            "5eb0434224c7a95d141a4fc2"
                        ],
                        "instructors": [
                            "5e938da1fc994247e0f99425"
                        ],
                        "_id": "5eb043da24c7a95d141a4fc5",
                        "name": "Kurs Majowy",
                        "startDate": "2020-05-04T00:00:00.000Z",
                        "endDate": null,
                        "description": "",
                        "place": "Place",
                        "price": 150000,
                        "category": {
                            "_id": "5e8ccd1e06c6fd1038c1ed00",
                            "symbol": "B",
                            "description": "Samochody Osobowe",
                            "__v": 0
                        },
                        "__v": 4
                    }
                ],
                "payments": [
                    {
                        "date": "2020-04-08T17:56:03.635Z",
                        "_id": "5e8e105147d1474200b407af",
                        "description": "",
                        "paidBy": "Paweł Skórniewski",
                        "paidTo": "Grzegorz Biś",
                        "student": "5e8ccdc206c6fd1038c1ed06",
                        "course": "5e8cccc306c6fd1038c1ecfe",
                        "amount": 120000,
                        "__v": 0
                    },
                    {
                        "date": "2020-04-08T18:13:38.029Z",
                        "_id": "5e8e145ed8bf960b048fb5d5",
                        "description": "",
                        "paidBy": "Paweł Skórniewski",
                        "paidTo": "Grzegorz Biś",
                        "student": "5e8ccdc206c6fd1038c1ed06",
                        "course": "5e8cccc306c6fd1038c1ecfe",
                        "amount": 12000,
                        "__v": 0
                    },
                    {
                        "date": "2020-04-08T18:17:57.349Z",
                        "_id": "5e8e155dd8bf960b048fb5d6",
                        "description": "",
                        "paidBy": "Paweł Skórniewski",
                        "paidTo": "Grzegorz Biś",
                        "student": "5e8ccdc206c6fd1038c1ed06",
                        "course": "5e8cccc306c6fd1038c1ecfe",
                        "amount": 8000,
                        "__v": 0
                    },
                    {
                        "date": "2020-04-08T18:19:17.610Z",
                        "_id": "5e8e15add8bf960b048fb5d7",
                        "description": "",
                        "paidBy": "Paweł Skórniewski",
                        "paidTo": "Grzegorz Biś",
                        "student": "5e8ccdc206c6fd1038c1ed06",
                        "course": "5e8cccc306c6fd1038c1ecfe",
                        "amount": 10000,
                        "__v": 0
                    },
                    {
                        "date": "2020-04-08T18:21:14.943Z",
                        "_id": "5e8e1620d8bf960b048fb5d8",
                        "description": "",
                        "paidBy": "Paweł Skórniewski",
                        "paidTo": "Grzegorz Biś",
                        "student": "5e8ccdc206c6fd1038c1ed06",
                        "course": "5e8cccc306c6fd1038c1ecfe",
                        "amount": 50000,
                        "__v": 0
                    },
                    {
                        "date": "2020-05-04T19:39:05.855Z",
                        "_id": "5eb06f8424c7a95d141a4fcd",
                        "description": "",
                        "paidBy": "Paweł Skórniewski",
                        "paidTo": "Grzegorz Biś",
                        "student": "5e8ccdc206c6fd1038c1ed06",
                        "course": "5e8cccc306c6fd1038c1ecfe",
                        "amount": 10000,
                        "__v": 0
                    }
                ],
                "_id": "5e8ccdc206c6fd1038c1ed06",
                "name": "Paweł",
                "surname": "Skórniewski",
                "personalIdentificationNumber": "83120315236",
                "birthPlace": "Radomsko",
                "postalCode": "97-512",
                "town": "Kodrąb",
                "street": "Zakrzew 69",
                "mobileNumber": "607584698",
                "email": "skorniewski.pawel@gmail.com",
                "categoriesId": "5e8ccd5806c6fd1038c1ed04",
                "__v": 12
            },
            {
                "instructors": [
                    {
                        "categories": [
                            "5e8ccd0e06c6fd1038c1ecff"
                        ],
                        "students": [
                            null,
                            "5e8ccdc206c6fd1038c1ed06",
                            "5e8e23f7a0fade1de8ea7bba",
                            "5e937f9fd0dbd1090450cff6",
                            "5e91cbc4a611e10c7098e5ed"
                        ],
                        "courses": [
                            "5e90df7972fcf42550271900",
                            "5eb043da24c7a95d141a4fc5"
                        ],
                        "_id": "5e938da1fc994247e0f99425",
                        "name": "Sławomir",
                        "surname": "Markiewicz",
                        "licenceIdentifier": "ERA154",
                        "mobileNumber": "607584698",
                        "email": "slawek@elcar.pl",
                        "__v": 7
                    }
                ],
                "courses": [
                    {
                        "students": [
                            "5e8e23f7a0fade1de8ea7bba",
                            "5e90df2b72fcf425502718ff",
                            "5e8ccdc206c6fd1038c1ed06"
                        ],
                        "instructors": [
                            "5e9475ed8c449829c090dabd"
                        ],
                        "_id": "5e8e2837c984024b80a5e1e6",
                        "name": "Drugi Kurs",
                        "startDate": "2020-04-08T00:00:00.000Z",
                        "endDate": null,
                        "description": "",
                        "place": "Radomsko",
                        "price": 300000,
                        "category": {
                            "_id": "5e8ccd1e06c6fd1038c1ed00",
                            "symbol": "B",
                            "description": "Samochody Osobowe",
                            "__v": 0
                        },
                        "__v": 4
                    },
                    {
                        "students": [
                            "5e8ccdc206c6fd1038c1ed06",
                            "5e91cbc4a611e10c7098e5ed",
                            "5e90df2b72fcf425502718ff",
                            "5e8e23f7a0fade1de8ea7bba"
                        ],
                        "instructors": [
                            "5e9475ed8c449829c090dabd",
                            "5e938da1fc994247e0f99425"
                        ],
                        "_id": "5e90df7972fcf42550271900",
                        "name": "Trzeci",
                        "startDate": "2020-04-10T00:00:00.000Z",
                        "endDate": null,
                        "description": "",
                        "place": "Radomsko",
                        "price": 200000,
                        "category": {
                            "_id": "5e8ccd4206c6fd1038c1ed02",
                            "symbol": "C+E",
                            "description": "Samochody Cieżarowe z Przyczepami",
                            "__v": 0
                        },
                        "__v": 6
                    },
                    {
                        "students": [
                            "5e8ccdc206c6fd1038c1ed06",
                            "5e90df2b72fcf425502718ff",
                            "5e91cbc4a611e10c7098e5ed",
                            "5e937f9fd0dbd1090450cff6",
                            "5e8e23f7a0fade1de8ea7bba"
                        ],
                        "instructors": [],
                        "_id": "5e8cccc306c6fd1038c1ecfe",
                        "name": "Moj drugi testowy kurs",
                        "startDate": "2020-03-28T00:00:00.000Z",
                        "endDate": null,
                        "description": "Opis mojego kursu",
                        "place": "Radomsko",
                        "price": 2000,
                        "category": {
                            "_id": "5e8ccc9a06c6fd1038c1ecfc",
                            "symbol": "T",
                            "description": "Ciągniki Rolnicze",
                            "__v": 0
                        },
                        "__v": 5
                    },
                    {
                        "students": [
                            "5e8ccdc206c6fd1038c1ed06",
                            "5e8e23f7a0fade1de8ea7bba",
                            "5eb0434224c7a95d141a4fc2"
                        ],
                        "instructors": [
                            "5e938da1fc994247e0f99425"
                        ],
                        "_id": "5eb043da24c7a95d141a4fc5",
                        "name": "Kurs Majowy",
                        "startDate": "2020-05-04T00:00:00.000Z",
                        "endDate": null,
                        "description": "",
                        "place": "Place",
                        "price": 150000,
                        "category": {
                            "_id": "5e8ccd1e06c6fd1038c1ed00",
                            "symbol": "B",
                            "description": "Samochody Osobowe",
                            "__v": 0
                        },
                        "__v": 4
                    }
                ],
                "payments": [
                    {
                        "date": "2020-04-12T20:51:21.405Z",
                        "_id": "5e937f51d0dbd1090450cff5",
                        "description": "",
                        "paidBy": "Anna Skórniewska",
                        "paidTo": "Grzegorz Biś",
                        "student": "5e8e23f7a0fade1de8ea7bba",
                        "course": "5e8e2837c984024b80a5e1e6",
                        "amount": 100000,
                        "__v": 0
                    }
                ],
                "_id": "5e8e23f7a0fade1de8ea7bba",
                "name": "Anna",
                "surname": "Skórniewska",
                "personalIdentificationNumber": "99865321546",
                "birthPlace": "Sdarako",
                "postalCode": "97-895",
                "town": "Radomsok",
                "street": "Zakrzew",
                "mobileNumber": "607584698",
                "email": "skorniewska.pawe@gmaoil.com",
                "categoriesId": "5e8ccd0e06c6fd1038c1ecff",
                "__v": 6
            },
            {
                "instructors": [],
                "courses": [
                    {
                        "students": [
                            "5e8ccdc206c6fd1038c1ed06",
                            "5e90df2b72fcf425502718ff",
                            "5e91cbc4a611e10c7098e5ed",
                            "5e937f9fd0dbd1090450cff6",
                            "5e8e23f7a0fade1de8ea7bba"
                        ],
                        "instructors": [],
                        "_id": "5e8cccc306c6fd1038c1ecfe",
                        "name": "Moj drugi testowy kurs",
                        "startDate": "2020-03-28T00:00:00.000Z",
                        "endDate": null,
                        "description": "Opis mojego kursu",
                        "place": "Radomsko",
                        "price": 2000,
                        "category": {
                            "_id": "5e8ccc9a06c6fd1038c1ecfc",
                            "symbol": "T",
                            "description": "Ciągniki Rolnicze",
                            "__v": 0
                        },
                        "__v": 5
                    },
                    {
                        "students": [
                            "5e8e23f7a0fade1de8ea7bba",
                            "5e90df2b72fcf425502718ff",
                            "5e8ccdc206c6fd1038c1ed06"
                        ],
                        "instructors": [
                            "5e9475ed8c449829c090dabd"
                        ],
                        "_id": "5e8e2837c984024b80a5e1e6",
                        "name": "Drugi Kurs",
                        "startDate": "2020-04-08T00:00:00.000Z",
                        "endDate": null,
                        "description": "",
                        "place": "Radomsko",
                        "price": 300000,
                        "category": {
                            "_id": "5e8ccd1e06c6fd1038c1ed00",
                            "symbol": "B",
                            "description": "Samochody Osobowe",
                            "__v": 0
                        },
                        "__v": 4
                    },
                    {
                        "students": [
                            "5e8ccdc206c6fd1038c1ed06",
                            "5e91cbc4a611e10c7098e5ed",
                            "5e90df2b72fcf425502718ff",
                            "5e8e23f7a0fade1de8ea7bba"
                        ],
                        "instructors": [
                            "5e9475ed8c449829c090dabd",
                            "5e938da1fc994247e0f99425"
                        ],
                        "_id": "5e90df7972fcf42550271900",
                        "name": "Trzeci",
                        "startDate": "2020-04-10T00:00:00.000Z",
                        "endDate": null,
                        "description": "",
                        "place": "Radomsko",
                        "price": 200000,
                        "category": {
                            "_id": "5e8ccd4206c6fd1038c1ed02",
                            "symbol": "C+E",
                            "description": "Samochody Cieżarowe z Przyczepami",
                            "__v": 0
                        },
                        "__v": 6
                    }
                ],
                "payments": [],
                "_id": "5e90df2b72fcf425502718ff",
                "name": "Madzia",
                "surname": "Skórniewska",
                "personalIdentificationNumber": "895521452022",
                "birthPlace": "drasd",
                "postalCode": "97-520",
                "town": "Radomsko",
                "street": "Zakrzew",
                "mobileNumber": "607584698",
                "email": "skorniewska.madzia@gmail.com",
                "categoriesId": "5e8ccd3706c6fd1038c1ed01",
                "__v": 3
            },
            {
                "instructors": [
                    {
                        "categories": [
                            "5e8ccd0e06c6fd1038c1ecff"
                        ],
                        "students": [
                            null,
                            "5e8ccdc206c6fd1038c1ed06",
                            "5e8e23f7a0fade1de8ea7bba",
                            "5e937f9fd0dbd1090450cff6",
                            "5e91cbc4a611e10c7098e5ed"
                        ],
                        "courses": [
                            "5e90df7972fcf42550271900",
                            "5eb043da24c7a95d141a4fc5"
                        ],
                        "_id": "5e938da1fc994247e0f99425",
                        "name": "Sławomir",
                        "surname": "Markiewicz",
                        "licenceIdentifier": "ERA154",
                        "mobileNumber": "607584698",
                        "email": "slawek@elcar.pl",
                        "__v": 7
                    },
                    {
                        "categories": [
                            "5e8ccd0e06c6fd1038c1ecff",
                            "5e8ccd1e06c6fd1038c1ed00"
                        ],
                        "students": [
                            "5e8ccdc206c6fd1038c1ed06",
                            "5e937f9fd0dbd1090450cff6",
                            "5e91cbc4a611e10c7098e5ed"
                        ],
                        "courses": [
                            "5e90df7972fcf42550271900",
                            "5e8e2837c984024b80a5e1e6"
                        ],
                        "_id": "5e9475ed8c449829c090dabd",
                        "name": "Paweł",
                        "surname": "Skórniewski",
                        "licenceIdentifier": "ERA016",
                        "mobileNumber": "607584697",
                        "email": "skorniewski.pawel@gmail.com",
                        "__v": 5
                    },
                    {
                        "categories": [
                            "5e8ccd4206c6fd1038c1ed02"
                        ],
                        "students": [
                            "5e91cbc4a611e10c7098e5ed"
                        ],
                        "courses": [],
                        "_id": "5e9f5723b0ddf31a486df3ab",
                        "name": "Madzia",
                        "surname": "Skórniewska",
                        "licenceIdentifier": "ERA9856",
                        "mobileNumber": "608598785",
                        "email": "madzia@outlook.com",
                        "__v": 1
                    }
                ],
                "courses": [
                    {
                        "students": [
                            "5e8ccdc206c6fd1038c1ed06",
                            "5e90df2b72fcf425502718ff",
                            "5e91cbc4a611e10c7098e5ed",
                            "5e937f9fd0dbd1090450cff6",
                            "5e8e23f7a0fade1de8ea7bba"
                        ],
                        "instructors": [],
                        "_id": "5e8cccc306c6fd1038c1ecfe",
                        "name": "Moj drugi testowy kurs",
                        "startDate": "2020-03-28T00:00:00.000Z",
                        "endDate": null,
                        "description": "Opis mojego kursu",
                        "place": "Radomsko",
                        "price": 2000,
                        "category": {
                            "_id": "5e8ccc9a06c6fd1038c1ecfc",
                            "symbol": "T",
                            "description": "Ciągniki Rolnicze",
                            "__v": 0
                        },
                        "__v": 5
                    },
                    {
                        "students": [
                            "5e8ccdc206c6fd1038c1ed06",
                            "5e91cbc4a611e10c7098e5ed",
                            "5e90df2b72fcf425502718ff",
                            "5e8e23f7a0fade1de8ea7bba"
                        ],
                        "instructors": [
                            "5e9475ed8c449829c090dabd",
                            "5e938da1fc994247e0f99425"
                        ],
                        "_id": "5e90df7972fcf42550271900",
                        "name": "Trzeci",
                        "startDate": "2020-04-10T00:00:00.000Z",
                        "endDate": null,
                        "description": "",
                        "place": "Radomsko",
                        "price": 200000,
                        "category": {
                            "_id": "5e8ccd4206c6fd1038c1ed02",
                            "symbol": "C+E",
                            "description": "Samochody Cieżarowe z Przyczepami",
                            "__v": 0
                        },
                        "__v": 6
                    }
                ],
                "payments": [],
                "_id": "5e91cbc4a611e10c7098e5ed",
                "name": "Julcia",
                "surname": "Skórniewska",
                "personalIdentificationNumber": "89785421547",
                "birthPlace": "Radomsko",
                "postalCode": "97-555",
                "town": "Radomsko",
                "street": "Zakrzew69",
                "mobileNumber": "604587598",
                "email": "jula@mail.com",
                "categoriesId": "5e8ccd3706c6fd1038c1ed01",
                "__v": 5
            },
            {
                "instructors": [
                    {
                        "categories": [
                            "5e8ccd0e06c6fd1038c1ecff"
                        ],
                        "students": [
                            null,
                            "5e8ccdc206c6fd1038c1ed06",
                            "5e8e23f7a0fade1de8ea7bba",
                            "5e937f9fd0dbd1090450cff6",
                            "5e91cbc4a611e10c7098e5ed"
                        ],
                        "courses": [
                            "5e90df7972fcf42550271900",
                            "5eb043da24c7a95d141a4fc5"
                        ],
                        "_id": "5e938da1fc994247e0f99425",
                        "name": "Sławomir",
                        "surname": "Markiewicz",
                        "licenceIdentifier": "ERA154",
                        "mobileNumber": "607584698",
                        "email": "slawek@elcar.pl",
                        "__v": 7
                    },
                    {
                        "categories": [
                            "5e8ccd0e06c6fd1038c1ecff",
                            "5e8ccd1e06c6fd1038c1ed00"
                        ],
                        "students": [
                            "5e8ccdc206c6fd1038c1ed06",
                            "5e937f9fd0dbd1090450cff6",
                            "5e91cbc4a611e10c7098e5ed"
                        ],
                        "courses": [
                            "5e90df7972fcf42550271900",
                            "5e8e2837c984024b80a5e1e6"
                        ],
                        "_id": "5e9475ed8c449829c090dabd",
                        "name": "Paweł",
                        "surname": "Skórniewski",
                        "licenceIdentifier": "ERA016",
                        "mobileNumber": "607584697",
                        "email": "skorniewski.pawel@gmail.com",
                        "__v": 5
                    }
                ],
                "courses": [
                    {
                        "students": [
                            "5e8ccdc206c6fd1038c1ed06",
                            "5e90df2b72fcf425502718ff",
                            "5e91cbc4a611e10c7098e5ed",
                            "5e937f9fd0dbd1090450cff6",
                            "5e8e23f7a0fade1de8ea7bba"
                        ],
                        "instructors": [],
                        "_id": "5e8cccc306c6fd1038c1ecfe",
                        "name": "Moj drugi testowy kurs",
                        "startDate": "2020-03-28T00:00:00.000Z",
                        "endDate": null,
                        "description": "Opis mojego kursu",
                        "place": "Radomsko",
                        "price": 2000,
                        "category": {
                            "_id": "5e8ccc9a06c6fd1038c1ecfc",
                            "symbol": "T",
                            "description": "Ciągniki Rolnicze",
                            "__v": 0
                        },
                        "__v": 5
                    }
                ],
                "payments": [
                    {
                        "date": "2020-05-04T19:43:36.381Z",
                        "_id": "5eb0708e24c7a95d141a4fd1",
                        "description": "",
                        "paidBy": "Julian Jaskólski",
                        "paidTo": "Grzegorz Biś",
                        "student": "5e937f9fd0dbd1090450cff6",
                        "course": "5e8cccc306c6fd1038c1ecfe",
                        "amount": 100000,
                        "__v": 0
                    }
                ],
                "_id": "5e937f9fd0dbd1090450cff6",
                "name": "Julian",
                "surname": "Jaskólski",
                "personalIdentificationNumber": "98653265987",
                "birthPlace": "Radomsko",
                "postalCode": "22-584",
                "town": "Radomsko",
                "street": "Pruszkow",
                "mobileNumber": "987456321",
                "email": "ulek@gaoi.pc",
                "categoriesId": "5e8ccc9a06c6fd1038c1ecfc",
                "__v": 4
            },
            {
                "instructors": [],
                "courses": [
                    {
                        "students": [
                            "5e8ccdc206c6fd1038c1ed06",
                            "5e8e23f7a0fade1de8ea7bba",
                            "5eb0434224c7a95d141a4fc2"
                        ],
                        "instructors": [
                            "5e938da1fc994247e0f99425"
                        ],
                        "_id": "5eb043da24c7a95d141a4fc5",
                        "name": "Kurs Majowy",
                        "startDate": "2020-05-04T00:00:00.000Z",
                        "endDate": null,
                        "description": "",
                        "place": "Place",
                        "price": 150000,
                        "category": {
                            "_id": "5e8ccd1e06c6fd1038c1ed00",
                            "symbol": "B",
                            "description": "Samochody Osobowe",
                            "__v": 0
                        },
                        "__v": 4
                    }
                ],
                "payments": [
                    {
                        "date": "2020-05-04T19:40:29.692Z",
                        "_id": "5eb06fdd24c7a95d141a4fcf",
                        "description": "",
                        "paidBy": "Janek Dzbanek",
                        "paidTo": "Grzegorz Biś",
                        "student": "5eb0434224c7a95d141a4fc2",
                        "course": "5eb043da24c7a95d141a4fc5",
                        "amount": 100000,
                        "__v": 0
                    }
                ],
                "_id": "5eb0434224c7a95d141a4fc2",
                "name": "Janek",
                "surname": "Dzbanek",
                "personalIdentificationNumber": "86598695869",
                "birthPlace": "",
                "postalCode": "",
                "town": "",
                "street": "",
                "mobileNumber": "68574858965",
                "email": "jane@dzbanek.com",
                "categoriesId": "5e8ccd3706c6fd1038c1ed01",
                "__v": 2
            },
            {
                "instructors": [],
                "courses": [],
                "payments": [],
                "_id": "5ed7d2124640423e64d5ead3",
                "name": "Kacper",
                "surname": "Wrucha",
                "personalIdentificationNumber": "9854785464",
                "birthPlace": "Rodziałe",
                "postalCode": "97-528",
                "town": "Masasll",
                "street": "adsasd",
                "mobileNumber": "6076544564",
                "email": "kacper.mail@gmail.com",
                "categoriesId": "5e8ccc9a06c6fd1038c1ecfc",
                "__v": 0
            },
            {
                "instructors": [],
                "courses": [],
                "payments": [],
                "_id": "5ed7d47903f0bd3a3cb2797b",
                "name": "Leszcz",
                "surname": "Lesław",
                "personalIdentificationNumber": "",
                "birthPlace": "",
                "postalCode": "97-825",
                "town": "5adasd",
                "street": "",
                "mobileNumber": "4654654",
                "email": "asdasd@adsas.pl",
                "categoriesId": "",
                "__v": 0
            }
        
        
        ]
        
    }

}
