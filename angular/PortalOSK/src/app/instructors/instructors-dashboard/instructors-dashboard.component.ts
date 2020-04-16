import { Component, OnInit } from '@angular/core';
import { InstructorAddComponent } from '../instructor-add/instructor-add.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { Instructors, Categories, FilterRequest } from 'rest_client_1.0';
import { StatItem } from 'src/app/common/stats-bar/stats-bar-item/stat-item';
import { InstructorsService } from '../instructors.service';
import { PaymentAddComponent } from 'src/app/payments/payment-add/payment-add.component';
import { LessonAddComponent } from 'src/app/lessons/lesson-add/lesson-add.component';
import { CustomersAssignCourseComponent } from 'src/app/customers/customers-assign-course/customers-assign-course.component';
import { InstructorDetailsComponent } from '../instructor-details/instructor-details.component';
import { InstructorAssignCourseComponent } from '../instructor-assign-course/instructor-assign-course.component';
import { InstructorAssignStudentsComponent } from '../instructor-assign-students/instructor-assign-students.component';

@Component({
  selector: 'app-instructors-dashboard',
  templateUrl: './instructors-dashboard.component.html',
  styleUrls: ['./instructors-dashboard.component.scss']
})
export class InstructorsDashboardComponent implements OnInit {

  instructors: Instructors[];
  categories: Categories[];
  stats: StatItem[];
  modalRef: BsModalRef;
  search: FormGroup;
  pageSizes: number[] = [10, 20, 50, 100];
  filter: FilterRequest = {
    limit: 20,
    offset: 0,
    queryString: '',
    studentsId: null
  };
  total;

  pages = [];
  constructor(private instructorsService: InstructorsService,
              private modalService: BsModalService,
          ) {
               
  }

  ngOnInit() {
    
      this.search = new FormGroup(
      {
        searchString: new FormControl('')
      }
    );
    this.instructorsService.reloadInstructors()
    this.instructorsService.instructors.subscribe(
      (instructors) => {
        this.instructors = instructors
        console.log(instructors)
      }
    )
  }


  addInstructor(){
      this.modalRef = this.modalService.show(InstructorAddComponent, {
        initialState: {
          data: event
        }
      });
      this.modalService.onHide
        .subscribe(
          () => {
           
          }
        );
    }
  
    showInstructorDetails(instructor){
      this.modalRef = this.modalService.show(InstructorDetailsComponent, {
        initialState: {
          data: instructor
        }
      });
      this.modalService.onHide
        .subscribe(
          () => {
           
          }
        );
    }

    registerPayment(instructor){
      this.modalRef = this.modalService.show(PaymentAddComponent, {
        initialState: {
          data: instructor
        }
      });
      this.modalService.onHide
        .subscribe(
          () => {
           
          }
        );
    }

    addLesson(instructor){
      this.modalRef = this.modalService.show(LessonAddComponent, {
        initialState: {
          data: instructor
        }
      });
      this.modalService.onHide
        .subscribe(
          () => {
           
          }
        );
    }

    assignCourse(instructor){
      this.modalRef = this.modalService.show(InstructorAssignCourseComponent, {
        initialState: {
          data: instructor
        }
      });
      this.modalService.onHide
        .subscribe(
          () => {
           
          }
        );
    }

    assignStudent(instructor){
      this.modalRef = this.modalService.show(InstructorAssignStudentsComponent, {
        initialState: {
          data: instructor
        }
      });
      this.modalService.onHide
        .subscribe(
          () => {
           
          }
        );
    }

}
