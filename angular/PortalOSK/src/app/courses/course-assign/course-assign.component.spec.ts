import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAssignComponent } from './course-assign.component';

describe('CourseAssignComponent', () => {
  let component: CourseAssignComponent;
  let fixture: ComponentFixture<CourseAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseAssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
