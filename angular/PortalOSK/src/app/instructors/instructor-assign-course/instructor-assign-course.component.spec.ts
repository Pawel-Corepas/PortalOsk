import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorAssignCourseComponent } from './instructor-assign-course.component';

describe('InstructorAssignCourseComponent', () => {
  let component: InstructorAssignCourseComponent;
  let fixture: ComponentFixture<InstructorAssignCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorAssignCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorAssignCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
