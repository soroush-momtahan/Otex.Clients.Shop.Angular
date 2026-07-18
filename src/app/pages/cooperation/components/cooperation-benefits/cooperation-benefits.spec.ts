import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperationBenefits } from './cooperation-benefits';

describe('CooperationBenefits', () => {
  let component: CooperationBenefits;
  let fixture: ComponentFixture<CooperationBenefits>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CooperationBenefits],
    }).compileComponents();

    fixture = TestBed.createComponent(CooperationBenefits);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
