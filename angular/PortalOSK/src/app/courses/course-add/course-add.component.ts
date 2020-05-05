import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CoursesControllerService, Categories, Courses } from 'rest_client_1.0';
import { AmountService } from 'src/app/common/services/amount.service';
import { CategoriesService } from 'src/app/common/services/categories.service';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.scss']
})
export class CourseAddComponent implements OnInit {

  course: FormGroup;
  categories: Categories[];
  constructor(private bsModalRef: BsModalRef,
              private courseService: CoursesControllerService,
              private categoryService: CategoriesService,
              private amountService: AmountService) { }

  ngOnInit() {
    this.course = new FormGroup (
      {
        name: new FormControl('', [Validators.required]),
        categoriesId: new FormControl('', [Validators.required]),
        startDate: new FormControl(''),
        endDate: new FormControl(''),
        place: new FormControl('',[Validators.required]),
        price: new FormControl('',[Validators.required]),
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
     this.course.value.price = this.amountService.convertToMinorUnits(this.course.value.price)
    const courses: Courses = this.course.value;
    this.courseService.coursesControllerCreate(courses).subscribe(
      (response) => {
             this.bsModalRef.hide();
      }
    );
  }
  

}


