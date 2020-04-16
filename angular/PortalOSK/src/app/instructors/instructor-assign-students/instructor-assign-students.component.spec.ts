import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorAssignStudentsComponent } from './instructor-assign-students.component';

describe('InstructorAssignStudentsComponent', () => {
  let component: InstructorAssignStudentsComponent;
  let fixture: ComponentFixture<InstructorAssignStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorAssignStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorAssignStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
