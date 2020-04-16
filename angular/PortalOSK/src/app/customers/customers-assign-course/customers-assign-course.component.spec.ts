import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersAssignCourseComponent } from './customers-assign-course.component';

describe('CustomersAssignCourseComponent', () => {
  let component: CustomersAssignCourseComponent;
  let fixture: ComponentFixture<CustomersAssignCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersAssignCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersAssignCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
