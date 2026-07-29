import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDutyIcons } from './product-duty-icons';

describe('ProductDutyIcons', () => {
  let component: ProductDutyIcons;
  let fixture: ComponentFixture<ProductDutyIcons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDutyIcons],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDutyIcons);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
