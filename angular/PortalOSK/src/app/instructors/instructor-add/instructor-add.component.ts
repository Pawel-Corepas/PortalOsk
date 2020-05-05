import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Categories, Instructors, InstuctorsControllerService } from 'rest_client_1.0';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CategoriesService } from 'src/app/common/services/categories.service';
import { AmountService } from 'src/app/common/services/amount.service';

@Component({
  selector: 'app-instructor-add',
  templateUrl: './instructor-add.component.html',
  styleUrls: ['./instructor-add.component.scss']
})
export class InstructorAddComponent implements OnInit {


  instructor: FormGroup;
  categories: Categories[];
  constructor(private bsModalRef: BsModalRef,
              private instructorsService: InstuctorsControllerService,
              private categoryService: CategoriesService,
              private amountService: AmountService) { }

  ngOnInit() {
    this.instructor = new FormGroup (
      {
        name: new FormControl('', [Validators.required]),
        surname: new FormControl('', [Validators.required]),
        categories: new FormControl('', [Validators.required]),
        email: new FormControl('',[Validators.required]),
        mobileNumber: new FormControl('',[Validators.required]),
        licenceIdentifier: new FormControl('',[Validators.required]),
        description: new FormControl('')
      }
    );
          this.categories = this.categoryService.getCategories();
  }

  onCancel() {
    console.log('used');
    this.bsModalRef.hide();
  }

  onSubmit() {
    const instructors: Instructors = this.instructor.value;
    console.log(instructors)
    this.instructorsService.instuctorsControllerCreate(instructors).subscribe(
      (response) => {
             this.bsModalRef.hide();
      }
    );
  }
  
}
