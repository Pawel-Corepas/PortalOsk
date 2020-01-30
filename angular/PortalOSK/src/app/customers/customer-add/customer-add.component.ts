import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { StudentsControllerService, Students } from 'rest_client_1.0';


@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {
  student: FormGroup;
  constructor(private bsModalRef: BsModalRef,
              private studentsService: StudentsControllerService) { }

  ngOnInit() {
    this.student = new FormGroup (
      {
        name: new FormControl('', [Validators.required]),
        surname: new FormControl('', [Validators.required]),
        personalIdentificationNumber: new FormControl(''),
        birthPlace: new FormControl(''),
        postalCode: new FormControl(''),
        town: new FormControl(''),
        street: new FormControl(''),
        mobileNumber: new FormControl(''),
        email: new FormControl(''),
        courseCategory: new FormControl('')
      }
    );
  }

  onCancel() {
    console.log('used');
    this.bsModalRef.hide();
  }

  onSubmit() {
    console.log(this.student.value);
    const students: Students = this.student.value;
    this.studentsService.studentsControllerCreate(students).subscribe(
      (response) => {
        console.log(response);
        this.bsModalRef.hide();
      }
    );
  }

}
