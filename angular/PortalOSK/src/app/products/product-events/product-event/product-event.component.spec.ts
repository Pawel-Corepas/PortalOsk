import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEventComponent } from './product-event.component';

describe('ProductEventComponent', () => {
  let component: ProductEventComponent;
  let fixture: ComponentFixture<ProductEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
