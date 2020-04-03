import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { StudentsControllerService, Students, Categories } from 'rest_client_1.0';
import { CategoriesService } from 'src/app/common/services/categories.service';


@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {
  student: FormGroup;
  categories: Categories [];
  constructor(private bsModalRef: BsModalRef,
              private studentsService: StudentsControllerService,
              private categoryService: CategoriesService) { }

  ngOnInit() {

        this.categories = this.categoryService.getCategories();

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
        categoriesId: new FormControl('')
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
