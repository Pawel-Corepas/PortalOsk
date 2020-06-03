import { Component, OnInit, Input } from '@angular/core';
import { Payments } from 'rest_client_1.0/model/models';
import { PaymentsControllerService } from 'rest_client_1.0';
import { AmountService } from 'src/app/common/services/amount.service';

@Component({
  selector: 'app-payments-dashboard',
  templateUrl: './payments-dashboard.component.html',
  styleUrls: ['./payments-dashboard.component.scss']
})
export class PaymentsDashboardComponent implements OnInit {

  @Input() payments: Payments []
  constructor(private paymentService: PaymentsControllerService,
              private amountService: AmountService) { }

  ngOnInit() {
    this.paymentService.paymentsControllerFind().subscribe(
      (payments) => {
        this.payments = payments
      }
    )
  }

}
