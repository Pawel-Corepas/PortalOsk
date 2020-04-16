import { Injectable } from '@angular/core';
import { Students } from 'rest_client_1.0/model/students';
import { StudentsControllerService } from 'rest_client_1.0';
import { Observable, Subject } from 'rxjs';
import { CoursesService } from '../courses/courses.service';

@Injectable ()
export class StudentsService {
    students = new Subject<Students[]>();
   
    constructor(  private studentService: StudentsControllerService,
                private coursesService: CoursesService) {
        this.reloadStudents()
        
    }

    reloadStudents(){
        this.studentService.studentsControllerFind().subscribe(
            (students) => {
                
                this.students.next(students)
                
                console.log(this.students)
            }
        )
        
    }

}
