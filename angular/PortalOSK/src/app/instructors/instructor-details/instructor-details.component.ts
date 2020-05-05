import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Categories, Instructors, InstuctorsControllerService } from 'rest_client_1.0';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CategoriesService } from 'src/app/common/services/categories.service';
import { InstructorsService } from '../instructors.service';

@Component({
  selector: 'app-instructor-details',
  templateUrl: './instructor-details.component.html',
  styleUrls: ['./instructor-details.component.scss']
})
export class InstructorDetailsComponent implements OnInit {

  instructor: FormGroup;
  categories: Categories[];
  @Input() data: Instructors;

  constructor(private bsModalRef: BsModalRef,
              private instructorsService: InstuctorsControllerService,
              private categoriesService: CategoriesService,
              private instructorsInternalService: InstructorsService) { }

  ngOnInit() {
      this.categories = this.categoriesService.getCategories();
       this.instructor = new FormGroup (
      {
        name: new FormControl(this.data.name, [Validators.required]),
        surname: new FormControl(this.data.surname, [Validators.required]),
        categories: new FormControl(this.data.categories, [Validators.required]),
        email: new FormControl(this.data.email,[Validators.required]),
        mobileNumber: new FormControl(this.data.mobileNumber,[Validators.required]),
        licenceIdentifier: new FormControl(this.data.licenceIdentifier,[Validators.required]),
        description: new FormControl('')
      }
    );
       this.instructor.disable();
       console.log(this.instructor)
  }
  ngAfterContentInit() {
    console.log(this.data.name);
  }

  isSelected(categoryId) {

    for (let index = 0; index < this.data.categories.length; index++) {
      const element = this.data.categories[index];
      if (categoryId === this.data.categories[index]._id) {
        return true;
      } else {
       
      }
    }
    return false;
  }

  onCancel() {
    console.log('used');
    this.bsModalRef.hide();
  }
  onCancelEdit() {
    this.instructor.disable();
  }
  onEdit() {
    this.instructor.enable();

  }
  onSubmitEdit() {
    console.log('zapisuje zmiany');
    const instructors: Instructors = this.instructor.value;
    this.instructorsService.instuctorsControllerReplaceById(this.data._id, instructors).subscribe(
      (response) => {
        this.instructorsInternalService.reloadInstructors()
        this.bsModalRef.hide();
      }
    );
  }

}
