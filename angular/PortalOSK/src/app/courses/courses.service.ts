import { Injectable } from '@angular/core';
import {  Courses, CoursesControllerService, FilterRequest } from 'rest_client_1.0';
import { Subject } from 'rxjs';

@Injectable ()
export class CoursesService {
    courses = new Subject<Courses[]>();
    filter: FilterRequest = {
        limit: 20,
        offset: 0,
        queryString: "",
        studentsId: null
      };
    constructor(  private coursesService: CoursesControllerService) {
        
        
    }

    reloadCourses(){
        this.coursesService.coursesControllerFind().subscribe(
            (courses) => {
                this.courses.next(courses.data)
            }
        )
    }

    getCourseById(courseId){
         let course;
         function getCourse(course) {
            return course._id == courseId;
          }
        let courses = this.courses.subscribe(
            (coursesData) => {
                console.log(coursesData)
                course = coursesData.find(getCourse)
                
            }
        )
        return course
    }

  
}
