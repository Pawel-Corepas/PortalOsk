import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentsPaymentsControllerService, Payments, Students } from 'rest_client_1.0';

@Component({
  selector: 'app-payment-add',
  templateUrl: './payment-add.component.html',
  styleUrls: ['./payment-add.component.scss']
})
export class PaymentAddComponent implements OnInit {

  payment: FormGroup;
  @Input() data: Students;
  constructor(private bsModalRef: BsModalRef,
              private paymentsService: StudentsPaymentsControllerService) { }

  ngOnInit() {
    console.log(this.data);
    this.payment = new FormGroup (
      {
        amount: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
        studentsId: new FormControl(this.data.id),
        date:  new FormControl(new Date()),
        paidBy: new FormControl(this.data.name + ' ' + this.data.surname),
        paidTo: new FormControl('Grzegorz Biś')
      }
    );
  }

  onCancel() {
    console.log('used');
    this.bsModalRef.hide();
  }

  onSubmit() {
    console.log(this.payment.value);
    const payments: Payments = this.payment.value;
    this.paymentsService.studentsPaymentsControllerCreate(this.data.id, payments).subscribe(
      (response) => {
        console.log(response);
        this.bsModalRef.hide();
      }
    );
  }

}
