import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CustomersService } from './customers.service';
import { Customer } from '../customer';
import * as moment from 'moment/moment';
import { StatItem } from 'src/app/common/stats-bar/stats-bar-item/stat-item';
import { Students } from 'rest_client_1.0/model/students';
import { StudentsControllerService, FilterRequest, StudentsPaymentsControllerService,
         ListPaymentsForStudentResponse, 
         Categories,
         CoursesControllerService} from 'rest_client_1.0';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { CustomerAddComponent } from '../customer-add/customer-add.component';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { FormGroup, FormControl } from '@angular/forms';
import { PaymentAddComponent } from 'src/app/payments/payment-add/payment-add.component';
import { CourseAssignComponent } from 'src/app/courses/course-assign/course-assign.component';
import { InstructorAssignComponent } from 'src/app/instructors/instructor-assign/instructor-assign.component';
import { LessonAddComponent } from 'src/app/lessons/lesson-add/lesson-add.component';
import { AmountService } from 'src/app/common/services/amount.service';
import { CategoriesService } from 'src/app/common/services/categories.service';
import { isArray } from 'util';
@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {
  customers: Customer[];
  students: Students[];
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
  constructor(private customersService: CustomersService,
              private studentsService: StudentsControllerService,
              private paymentsForStudentService: StudentsPaymentsControllerService,
              private courseService: CoursesControllerService,
              private amountService: AmountService,
              private modalService: BsModalService,
              private categoryService: CategoriesService) {
               
  }

  ngOnInit() {
   
    this.customers = this.customersService.GetCustomers();
    this.stats = this.customersService.GetStats();

    this.search = new FormGroup(
      {
        searchString: new FormControl('')
      }
    );
    this.refreshPage();
  }

  refreshPage() {
    this.pages = [];
    this.studentsService.studentsControllerFilterStudents(this.filter).subscribe(
      (response) => {
        console.log(response.page);
        this.total = response.page.total;
        const pageCount = Math.round(response.page.total / this.filter.limit);
        console.log(pageCount);
        console.log(response.page.total % this.filter.limit);
        if (response.page.total % this.filter.limit < 0 || response.page.total % this.filter.limit < this.filter.limit / 2) {
          for (let index = 0; index < pageCount + 1; index++) {
            this.pages.push(index + 1);
          }
        } else {
          for (let index = 0; index < pageCount; index++) {
            this.pages.push(index + 1);
          }
        }
        this.students = response.data;
        for (let index = 0; index < this.students.length; index++) {
          const student = this.students[index];
            this.getStudentCourseData(student, index)
        }
        
        this.stats[0].value= response.summary.candidates,
        this.stats[1].value= response.summary.customers,
        this.stats[2].value= response.summary.archivedCustomers
        this.getBalance();
        this.categories = this.categoryService.getCategories();
      }
    );
  }

  getCourseData(courseId,index, studentIndex){
    console.log(courseId)
    this.courseService.coursesControllerFindById(courseId).subscribe(
      (course) =>{
        console.log(course)
        this.students[studentIndex].courses[index] = course
      }
    )
   
}
  getStudentCourseData(student, studentIndex){

    for (let index = 0; index < student.courses.length; index++) {
      const course = student.courses[index];
      this.getCourseData(course, index, studentIndex)
      
    }
        console.log(this.students)
      
  }




  getPaginatedStudents(filter: FilterRequest) {
    console.log(this.filter);
    this.studentsService.studentsControllerFilterStudents(filter).subscribe(
      (response) => {
        this.students = response.data;
        for (let index = 0; index < this.students.length; index++) {
          const student = this.students[index];
            this.getStudentCourseData(student, index)
        }
        
        this.getBalance();
      }
    );
  }
  formatDate(date: Date) {
    const newDateFormat = moment(date).format('L');
    return newDateFormat;
  }

  addCustomer() {
    this.modalRef = this.modalService.show(CustomerAddComponent, {
      initialState: {
        data: event
      }
    });
    this.modalService.onHide
      .subscribe(
        () => {
          this.refreshPage();
        }
      );
  }
  showStudentDetails(student) {
    this.modalRef = this.modalService.show(CustomerDetailsComponent, {
      initialState: {
        data: student
      }
    });
    this.modalService.onHide
      .subscribe(
        () => {
          this.getPaginatedStudents(this.filter);
        }
      );

  }
  registerPayment(student) {
    this.modalRef = this.modalService.show(PaymentAddComponent, {
      initialState: {
        data: student
      }
    });
    this.modalService.onHide
      .subscribe(
        () => {
          this.getPaginatedStudents(this.filter);
        }
      );
  }

  getBalance() {
 
     for (let index = 0; index < this.students.length; index++) {
      const student = this.students[index];
      this.filter.studentsId = student._id;
      this.paymentsForStudentService.studentsPaymentsControllerFilterStudentPayments(student._id, this.filter).subscribe(
        (paymentResponse: ListPaymentsForStudentResponse) => {
          this.students[index].balance = this.amountService.getAmountInFormat(parseInt(paymentResponse.balance))
         }
      )
    }
  }

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
    this.modalRef = this.modalService.show(CourseAssignComponent, {
      initialState: {
        data: student
      }
    });
    this.modalService.onHide
      .subscribe(
        () => {
          this.getPaginatedStudents(this.filter);
        }
      );

  }

  assignInstructor(student) {
    this.modalRef = this.modalService.show(InstructorAssignComponent, {
      initialState: {
        data: student
      }
    });
    this.modalService.onHide
      .subscribe(
        () => {
          this.getPaginatedStudents(this.filter);
        }
      );

  }

  addLesson(student) {
    this.modalRef = this.modalService.show(LessonAddComponent, {
      initialState: {
        data: student
      }
    });
    this.modalService.onHide
      .subscribe(
        () => {
          this.getPaginatedStudents(this.filter);
        }
      );

  }

  getCategory(id) {
    for (let index = 0; index < this.categories.length; index++){
       if (this.categories[index]._id === id){
         return this.categories[index].symbol
       }
   }
  };
}
