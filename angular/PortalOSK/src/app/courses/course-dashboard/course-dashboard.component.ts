import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { FilterRequest, CoursesControllerService, Courses, Categories } from 'rest_client_1.0';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { CourseAddComponent } from '../course-add/course-add.component';
import { LessonAddComponent } from 'src/app/lessons/lesson-add/lesson-add.component';
import { CourseAssignComponent } from '../course-assign/course-assign.component';
import { CourseDetailsComponent } from '../course-details/course-details.component';
import { AmountService } from 'src/app/common/services/amount.service';
import { CategoriesService } from 'src/app/common/services/categories.service';

@Component({
  selector: 'app-course-dashboard',
  templateUrl: './course-dashboard.component.html',
  styleUrls: ['./course-dashboard.component.scss']
})
export class CourseDashboardComponent implements OnInit {

  courses: Courses[];
  categories: Categories[];
  modalRef: BsModalRef;
  search: FormGroup;
  pageSizes: number[] = [10, 20, 50, 100];
  filter: FilterRequest = {
    limit: 20,
    offset: 0,
    queryString: '',
    studentsId: null
  };
  total;

  pages = [];
  constructor(private categoryService: CategoriesService,
    private coursesService: CoursesControllerService,
    private modalService: BsModalService,
    private amountService: AmountService) {
  }

  ngOnInit() {
    this.refreshCourses()

   

    this.search = new FormGroup(
      {
        searchString: new FormControl('')
      }
    );

   
  }

  formatDate(date: Date) {
    const newDateFormat = moment(date).format('L');
    return newDateFormat;
  }

  formatAmount (amount: number){
    return this.amountService.getAmountInFormat(amount);
  }

  refreshCourses() {
    this.coursesService.coursesControllerFind(this.filter).subscribe(
      (response) => {
        console.log(response.page);
        this.total = response.page.total;
        const pageCount = Math.round(response.page.total / this.filter.limit);
        console.log(pageCount);
        console.log(response.page.total % this.filter.limit);
        if (response.page.total % this.filter.limit < 0 || response.page.total % this.filter.limit < this.filter.limit / 2) {
          for (let index = 0; index < pageCount + 1; index++) {
            this.pages.push(index + 1);
          }
        } else {
          for (let index = 0; index < pageCount; index++) {
            this.pages.push(index + 1);
          }
        }

        this.courses = response.data
        this.categories = this.categoryService.getCategories();
      }
    );
  }
  Search() {
    this.filter.queryString = this.search.value.searchString;
    this.filter.offset = 0;
    this.refreshCourses();
  }

  addCourse() {
    this.modalRef = this.modalService.show(CourseAddComponent, {
      initialState: {
        data: event
      }
    });
    this.modalService.onHide
      .subscribe(
        () => {
          this.refreshCourses()
        }
      );
  }

  showCourseDetails(course) {
    this.modalRef = this.modalService.show(CourseDetailsComponent, {
      initialState: {
        data: course
      }
    });
    this.modalService.onHide
      .subscribe(
        () => {
          //this.refreshPage();
        }
      );
  };
  assignStudent(course) {
    this.modalRef = this.modalService.show(CourseAssignComponent, {
      initialState: {
        data: course
      }
    });
    this.modalService.onHide
      .subscribe(
        () => {
          //this.refreshPage();
        }
      );
  };
  addLesson(course) {
    this.modalRef = this.modalService.show(LessonAddComponent, {
      initialState: {
        data: course
      }
    });
    this.modalService.onHide
      .subscribe(
        () => {
          //this.refreshPage();
        }
      );
  };
  assignCourse(course) {
    this.modalRef = this.modalService.show(CourseAssignComponent, {
      initialState: {
        data: event
      }
    });
    this.modalService.onHide
      .subscribe(
        () => {
          //this.refreshPage();
        }
      );
  };
getCategory(id) {
   for (let index = 0; index < this.categories.length; index++){
      if (this.categories[index]._id === id){
        return this.categories[index].symbol
      }
  }
};

}
