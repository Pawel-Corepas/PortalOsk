import { Component, OnInit } from '@angular/core';
import { CustomersService } from './customers.service';
import { Customer } from './customer';
import * as moment from 'moment/moment';
import { StatItem } from 'src/app/common/stats-bar/stats-bar-item/stat-item';
@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {
  customers: Customer[];
  stats: StatItem[];
  constructor(private customersService: CustomersService) { }

  ngOnInit() {
    this.customers = this.customersService.GetCustomers();
    this.stats = this.customersService.GetStats();
    console.log(this.stats);
  }
  formatDate(date: Date) {
    const newDateFormat = moment(date).format('L');
    return newDateFormat;
  }

}
