import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Courses, CoursesControllerService, Categories } from 'rest_client_1.0';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CategoriesService } from 'src/app/common/services/categories.service';
import * as moment from 'moment';
import { AmountService } from 'src/app/common/services/amount.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  course: FormGroup;
  categories: Categories[];
  @Input() data: Courses;

  constructor(private bsModalRef: BsModalRef,
              private courseService: CoursesControllerService,
              private categoriesService: CategoriesService,
              private amountService: AmountService) { }

  ngOnInit() {
        this.categories = this.categoriesService.getCategories();
       this.course = new FormGroup (
        {
          name: new FormControl(this.data.name, [Validators.required]),
          startDate: new FormControl(moment(this.data.startDate).format( 'YYYY-MM-DD')),
          endDate: new FormControl(this.data.endDate),
          place: new FormControl(this.data.place,[Validators.required]),
          price: new FormControl(this.data.price,[Validators.required]),
          description: new FormControl(this.data.description),
          categoriesId: new FormControl(this.data.categoriesId, [Validators.required])
   
        }
    );
       this.course.disable();
       console.log(this.data)
       console.log(this.course)
  }


   onCancel() {
    console.log('used');
    this.bsModalRef.hide();
  }
  onCancelEdit() {
    this.course.disable();
  }
  onEdit() {
    this.course.enable();
  }

  isSelected(categoryId) {
  
    if (categoryId === this.data.categoriesId) {
      return true;
    } else {
     return false;
    }
   }

   formatAmount(amount){
      return this.amountService.getAmountInFormat(amount)
   }
}
