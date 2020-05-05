import { Component, OnInit, Input } from '@angular/core';
import { Courses, CoursesControllerService, CoursesStudentsControllerService, Students, FilterRequest } from 'rest_client_1.0';
import { BsModalRef } from 'ngx-bootstrap/modal';
import * as moment from 'moment/moment';
import { StudentsService } from '../students.service';
@Component({
  selector: 'app-customers-assign-course',
  templateUrl: './customers-assign-course.component.html',
  styleUrls: ['./customers-assign-course.component.scss']
})
export class CustomersAssignCourseComponent implements OnInit {
  courses: Courses [];
  @Input() data: Students;

  filter:FilterRequest = {
    queryString: "",
    excludeCourses: [],
    excludeInstructors:[]
  }
  
  constructor(
    private coursesService: CoursesControllerService,
    private studentCourseService: CoursesStudentsControllerService,
    private studentsService: StudentsService,
    private bsModalRef: BsModalRef
   ) {
     
}

ngOnInit() {
  
  this.getCourses()
  }

  getCourses(){
      this.filter.excludeCourses.push(this.data._id)
      this.coursesService.coursesControllerFind(this.filter).subscribe(
        (courses) => {
          this.courses = courses.data
          console.log(this.courses)
        }
      )
  }

  formatDate(date: Date) {
    const newDateFormat = moment(date).format('L');
    return newDateFormat;
  }

  addToCourse(course, index){
    console.log(course,{studentId:this.data._id})
      this.studentCourseService.coursesStudentsControllerCreate(course ,{studentId:this.data._id}).subscribe(
        () => {
          this.studentsService.reloadStudents();
          this.bsModalRef.hide();
        }
      )
  }

}
