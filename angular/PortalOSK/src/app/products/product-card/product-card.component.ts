import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { OrgCalendarComponent } from 'src/app/calendar/org-calendar/org-calendar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService, private router:Router) {}

  ngOnInit() {
  }

  openModalCalendar() {
  //  this.modalRef = this.modalService.show(OrgCalendarComponent);
  this.router.navigate(['/customer/booking'])
  }
}
