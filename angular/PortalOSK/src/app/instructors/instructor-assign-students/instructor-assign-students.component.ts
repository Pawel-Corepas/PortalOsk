import { Component, OnInit, Input } from '@angular/core';
import { Students, Instructors, StudentsControllerService, InstructorsStudentsControllerService, FilterRequestPartial } from 'rest_client_1.0';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-instructor-assign-students',
  templateUrl: './instructor-assign-students.component.html',
  styleUrls: ['./instructor-assign-students.component.scss']
})
export class InstructorAssignStudentsComponent implements OnInit {
  students: Students[];
  @Input() data: Instructors;
  filter: FilterRequestPartial = {
    excludeCourses: [],
    excludeInstructors: []
  }
  constructor(
    private studentsService: StudentsControllerService,
    private instructorsService: InstructorsStudentsControllerService,
    private bsModalRef: BsModalRef
  ) {

  }

  ngOnInit() {

    this.getStudents()
  }


  getStudents() {
    this.filter.excludeInstructors.push(this.data._id)
    this.studentsService.studentsControllerFilterStudents(this.filter).subscribe(
      (students) => {
        this.students = students.data;
        console.log(students)
      }
    )
  }

  addToCourse(studentId, index) {

    this.instructorsService.instructorsStudentsControllerCreate(this.data._id, { studentsId: studentId }).subscribe(
      (res) => {

        this.getStudents()
        this.bsModalRef.hide()
      }
    )

  }

  addToInstructor(studentId, index) {
    this.instructorsService.instructorsStudentsControllerCreate(this.data._id, { studentsId: studentId }).subscribe(
      (res) => {

        this.getStudents()
        this.bsModalRef.hide()
      }
    )
  }

}
