import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorsDashboardComponent } from './instructors-dashboard.component';

describe('InstructorsDashboardComponent', () => {
  let component: InstructorsDashboardComponent;
  let fixture: ComponentFixture<InstructorsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
