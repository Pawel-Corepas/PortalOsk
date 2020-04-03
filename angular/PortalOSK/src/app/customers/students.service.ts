import { Injectable } from '@angular/core';
import { Students } from 'rest_client_1.0/model/students';
import { StudentsControllerService } from 'rest_client_1.0';
import { Observable } from 'rxjs';

@Injectable ()
export class StudentsService {
    students: Students[];

    constructor(  private studentService: StudentsControllerService) {
        this.reloadStudents()
        const studentsList = Observable.create(
            (observer) => {
                observer.next(this.students)
            }
        
        )
    }

    reloadStudents(){
        this.studentService.studentsControllerFind().subscribe(
            (students) => {
                this.students = students
            }
        )
    }

}
