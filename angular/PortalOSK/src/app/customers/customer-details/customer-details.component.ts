import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap';
import { StudentsControllerService, Students } from 'rest_client_1.0';
import { defaultLocaleWeekdaysShort } from 'ngx-bootstrap/chronos/locale/locale.class';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit, AfterContentInit {
  student: FormGroup;
  @Input() data: Students;

  constructor(private bsModalRef: BsModalRef,
              private studentsService: StudentsControllerService) { }

  ngOnInit() {
       this.student = new FormGroup (
      {
        name: new FormControl(this.data.name , [ Validators.required]),
        surname: new FormControl(this.data.surname, [Validators.required]),
        personalIdentificationNumber: new FormControl(this.data.personalIdentificationNumber),
        birthPlace: new FormControl(this.data.birthPlace),
        postalCode: new FormControl(this.data.postalCode),
        town: new FormControl(this.data.town),
        street: new FormControl(this.data.street),
        mobileNumber: new FormControl(this.data.mobileNumber),
        email: new FormControl(this.data.email),
        courseCategory: new FormControl(this.data.courseCategory)
      }
    );
       this.student.disable();
  }
  ngAfterContentInit() {
    console.log(this.data.name);
  }

  isSelected(event) {
   if (event === this.data.courseCategory) {
     return true;
   } else {
    return false;
   }
  }

  onCancel() {
    console.log('used');
    this.bsModalRef.hide();
  }
  onCancelEdit() {
    this.student.disable();
  }
  onEdit() {
    this.student.enable();
  }
  onSubmitEdit() {
    console.log('zapisuje zmiany');
    const students: Students = this.student.value;
    this.studentsService.studentsControllerReplaceById(this.data.id, students).subscribe(
      (response) => {
        console.log(response);
        this.bsModalRef.hide();
      }
    );
  }
}
