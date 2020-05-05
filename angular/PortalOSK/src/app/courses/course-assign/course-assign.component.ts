import { Component, OnInit, Input } from '@angular/core';
import { Students, StudentsControllerService, CoursesStudentsControllerService, Courses, FilterRequest } from 'rest_client_1.0';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-course-assign',
  templateUrl: './course-assign.component.html',
  styleUrls: ['./course-assign.component.scss']
})
export class CourseAssignComponent implements OnInit {

  students: Students[];
  @Input() data: Courses;
  filter:FilterRequest = {
    queryString: "",
    excludeCourses: [],
    excludeInstructors:[]
  }
  constructor(
    private studentsService: StudentsControllerService,
    private studentCourseService: CoursesStudentsControllerService,
    private bsModalRef: BsModalRef
   ) {
     
}

ngOnInit() {
  
  this.getStudents()
  }


getStudents(){

  this.filter.excludeCourses.push(this.data._id)
  this.studentsService.studentsControllerFilterStudents(this.filter).subscribe(
    (students) => {
      this.students = students.data;
      console.log(students)
    }
  )
}
 
  addToCourse(studentId, index){

    this.studentCourseService.coursesStudentsControllerCreate(this.data._id,{studentId: studentId}).subscribe(
      (res)=>{
        
        this.getStudents()
        this.bsModalRef.hide()
      }
    )

  }

}
