import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperationApplicants } from './cooperation-applicants';

describe('CooperationApplicants', () => {
  let component: CooperationApplicants;
  let fixture: ComponentFixture<CooperationApplicants>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CooperationApplicants],
    }).compileComponents();

    fixture = TestBed.createComponent(CooperationApplicants);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
