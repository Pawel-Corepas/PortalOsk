import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-org-calendar',
  templateUrl: './org-calendar.component.html',
  styleUrls: ['./org-calendar.component.scss']
})
export class OrgCalendarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  backToCustomerDashboard(){
    this.router.navigate(['customer/dashboard'])
  }
}
