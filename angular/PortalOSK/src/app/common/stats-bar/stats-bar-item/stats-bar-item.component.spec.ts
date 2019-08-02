import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsBarItemComponent } from './stats-bar-item.component';

describe('StatsBarItemComponent', () => {
  let component: StatsBarItemComponent;
  let fixture: ComponentFixture<StatsBarItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsBarItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsBarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
