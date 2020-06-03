import { Component, OnInit } from '@angular/core';
import { CustomersService } from './customers.service';
import { Customer } from '../customer';
import * as moment from 'moment/moment';
import { StatItem } from 'src/app/common/stats-bar/stats-bar-item/stat-item';
import { FilterRequest, 
         Categories,
         Payments} from 'rest_client_1.0';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CustomerAddComponent } from '../customer-add/customer-add.component';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { FormGroup, FormControl } from '@angular/forms';
import { PaymentAddComponent } from 'src/app/payments/payment-add/payment-add.component';

import { InstructorAssignCourseComponent } from 'src/app/instructors/instructor-assign-course/instructor-assign-course.component';

import { AmountService } from 'src/app/common/services/amount.service';;
import { StudentsService } from '../students.service';
import { CustomersAssignCourseComponent } from '../customers-assign-course/customers-assign-course.component';

import { CalendarService } from 'src/app/calendar/org-calendar/calendar.service';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {
  customers: Customer[];
  students;
  categories: Categories[];
  stats: StatItem[];
  calModal: BsModalRef;
  eventModal:BsModalRef;
  addEventModal:BsModalRef;
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
  constructor(private customersService: CustomersService,
              private customerService:CustomerService,
              private amountService: AmountService,
              private modalService: BsModalService,
              private studentsInternalService: StudentsService,
              private calendarService: CalendarService,
              private router: Router) {
                
               
  }

  ngOnInit() {
    
    this.customers = this.customersService.GetCustomers();
    this.stats = this.customersService.GetStats();
    this.search = new FormGroup(
      {
        searchString: new FormControl('')
      }
    );
    this.studentsInternalService.reloadStudents()
    /*this.studentsInternalService.students.subscribe(
      (students) => {
        this.students = students
        console.log(students)
      }
    )*/

  this.students = this.studentsInternalService.students
  }

  refreshPage() {


  
        
       // this.getBalance();
       

  }

/*  getCourseData(courseId,index, studentIndex){
    console.log(courseId)
    this.courseService.coursesControllerFindById(courseId).subscribe(
      (course) =>{
        console.log(course)
        this.students[studentIndex].courses[index] = course
      }
    )
   
}*/

  sumPayments(payments: Payments[]){
    var balance =0;

    for (let index = 0; index < payments.length; index++) {
      const paymentAmount = payments[index].amount;
      balance=balance+paymentAmount
    }

    return this.amountService.getAmountInFormat(balance)
  }
 /* getStudentCourseData(student, studentIndex){

    for (let index = 0; index < student.courses.length; index++) {
      const course = student.courses[index];
      this.getCourseData(course, index, studentIndex)
      
    }
        console.log(this.students)
      
  }
*/

  formatDate(date: Date) {
    const newDateFormat = moment(date).format('L');
    return newDateFormat;
  }

  addCustomer() {
    this.calModal = this.modalService.show(CustomerAddComponent, {
      initialState: {
        data: event
      },
      class:"myDialog"
    });
    this.modalService.onHide
      .subscribe(
        () => {
          this.refreshPage();
        }
      );
  }
  showStudentDetails(student) {

   // this.router.navigate(['/customers/details']);
    this.customerService.setStudent(student)
    
    this.calModal = this.modalService.show(CustomerDetailsComponent, {
      initialState: {
        data: student
      },
      class:"myDialog"
    });
    this.modalService.onHide
      .subscribe(
        () => {
         
        }
      );/**/

  }
  registerPayment(student) {
    this.calModal = this.modalService.show(PaymentAddComponent, {
      initialState: {
        data: student
      }
    });
    this.modalService.onHide
      .subscribe(
        () => {
          this.studentsInternalService.reloadStudents()
        }
      );
  }

 /* getBalance() {
 
     for (let index = 0; index < this.students.length; index++) {
      const student = this.students[index];
      this.filter.studentsId = student._id;
      this.paymentsForStudentService.studentsPaymentsControllerFilterStudentPayments(student._id, this.filter).subscribe(
        (paymentResponse: ListPaymentsForStudentResponse) => {
          this.students[index].balance = this.amountService.getAmountInFormat(parseInt(paymentResponse.balance))
         }
      )
    }
  }*/

  goToPage(page: number) {

    if (page === 1) {
      this.filter.offset = 0;
      this.refreshPage();
    } else {
      this.filter.offset = this.filter.limit * (page - 1);
      this.refreshPage();
    }
  }

  Search() {
    this.filter.queryString = this.search.value.searchString;
    this.filter.offset = 0;
    this.refreshPage();
  }

  OnPageSizeChange(event) {
    this.filter.limit = event;
    this.filter.offset = 0;
    this.refreshPage();
  }

  assignCourse(student) {
    this.calModal = this.modalService.show(CustomersAssignCourseComponent, {
      initialState: {
        data: student
      },
      
      
    });
    this.modalService.onHide
      .subscribe(
        () => {
         
        }
      );

  }

  assignInstructor(student) {
    this.calModal = this.modalService.show(InstructorAssignCourseComponent, {
      initialState: {
        data: student
      }
    });
    this.modalService.onHide
      .subscribe(
        () => {
          
        }
      );

  }

  addLesson(student) {
    this.calendarService.setStudent(student)
    this.router.navigate(['org/calendar'])
  }

/*  getCategory(id) {
    for (let index = 0; index < this.categories.length; index++){
       if (this.categories[index]._id === id){
         return this.categories[index].symbol
       }
   }
  };*/
}
