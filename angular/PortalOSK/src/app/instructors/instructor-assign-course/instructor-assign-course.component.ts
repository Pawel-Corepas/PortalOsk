import { Component, OnInit, Input } from '@angular/core';
import { Courses, Instructors, FilterRequest, CoursesControllerService, CoursesInstructorsControllerService } from 'rest_client_1.0';
import { InstructorsService } from '../instructors.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import * as moment from 'moment';

@Component({
  selector: 'app-instructor-assign-course',
  templateUrl: './instructor-assign-course.component.html',
  styleUrls: ['./instructor-assign-course.component.scss']
})
export class InstructorAssignCourseComponent implements OnInit {
  courses: Courses [];
  @Input() data: Instructors;

  filter:FilterRequest = {
    queryString: "",
    excludeCourses: [],
    excludeInstructors:[]
  }
  
  constructor(
    private coursesService: CoursesControllerService,
    private instructorsCoursesService: CoursesInstructorsControllerService,
    private instructorsService: InstructorsService,
    private bsModalRef: BsModalRef
   ) {
     
}

ngOnInit() {
  
  this.getCourses()
  }

  getCourses(){
      this.filter.excludeInstructors.push(this.data._id)
      this.coursesService.coursesControllerFind(this.filter).subscribe(
        (courses) => {
          this.courses = courses.data
          console.log(this.courses)
        }
      )
  }

  addToCourse(course, index){
        this.instructorsCoursesService.coursesInstructorsControllerCreate(course ,{instructorsId:this.data._id}).subscribe(
        () => {
          this.instructorsService.reloadInstructors();
          this.bsModalRef.hide();
        }
      )
  }
  formatDate(date: Date) {
    const newDateFormat = moment(date).format('L');
    return newDateFormat;
  }

}
