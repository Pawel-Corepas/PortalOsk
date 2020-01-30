import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CustomersService } from './customers.service';
import { Customer } from '../customer';
import * as moment from 'moment/moment';
import { StatItem } from 'src/app/common/stats-bar/stats-bar-item/stat-item';
import { Students } from 'rest_client_1.0/model/students';
import { StudentsControllerService, FilterRequest, StudentsPaymentsControllerService,
         ListPaymentsForStudentResponse } from 'rest_client_1.0';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { CustomerAddComponent } from '../customer-add/customer-add.component';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { FormGroup, FormControl } from '@angular/forms';
import { PaymentAddComponent } from 'src/app/payments/payment-add/payment-add.component';
@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {
  customers: Customer[];
  students: Students[];
  stats: StatItem[];
  modalRef: BsModalRef;
  search: FormGroup;
  pageSizes: number[] = [10, 20, 50, 100];
  filter: FilterRequest = {
    limit: 20,
    offset: 0,
    queryString: ''
  };
  total;

  pages = [];
  constructor(private customersService: CustomersService,
              private studentsService: StudentsControllerService,
              private paymentsForStudentService: StudentsPaymentsControllerService,
              private router: Router,
              private modalService: BsModalService) {
                this.refreshPage();
  }

  ngOnInit() {
    this.customers = this.customersService.GetCustomers();
    this.stats = this.customersService.GetStats();

    this.search = new FormGroup(
      {
        searchString: new FormControl('')
      }
    );
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
      }
    );
  }

  getPaginatedStudents(filter: FilterRequest) {
    console.log(this.filter);
    this.studentsService.studentsControllerFilterStudents(filter).subscribe(
      (response) => {
        this.students = response.data;
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

  getBalance(id: number) {
  let balance = '0';
  this.paymentsForStudentService.studentsPaymentsControllerFilterStudentPayments(id, this.filter).subscribe(
      (paymentResponse: ListPaymentsForStudentResponse) => {
        console.log(paymentResponse.totalPaid);
        balance = paymentResponse.totalPaid;
      }
    );
  return balance;
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
}
