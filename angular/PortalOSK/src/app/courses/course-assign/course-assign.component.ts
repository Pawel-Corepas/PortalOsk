import { Component, OnInit, Input } from '@angular/core';
import { Students, StudentsControllerService, CoursesStudentsControllerService, Courses } from 'rest_client_1.0';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-course-assign',
  templateUrl: './course-assign.component.html',
  styleUrls: ['./course-assign.component.scss']
})
export class CourseAssignComponent implements OnInit {

  students: Students[];
  modalRef: BsModalRef;
  @Input() data: Courses;
  
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


  this.studentsService.studentsControllerFind(this.data._id).subscribe(
    (students) => {
      this.students = students;
      console.log(students)
    }
  )
}
 
  addToCourse(studentId, index){

    this.studentCourseService.coursesStudentsControllerCreate(this.data._id,{studentId: studentId}).subscribe(
      (res)=>{
        
        this.getStudents()
      }
    )

  }

}
