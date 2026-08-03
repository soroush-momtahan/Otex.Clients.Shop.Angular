import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperationWithUs } from './cooperation-with-us';

describe('CooperationWithUs', () => {
  let component: CooperationWithUs;
  let fixture: ComponentFixture<CooperationWithUs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CooperationWithUs],
    }).compileComponents();

    fixture = TestBed.createComponent(CooperationWithUs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
