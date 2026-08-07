import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperationForm } from './cooperation-form';

describe('CooperationForm', () => {
  let component: CooperationForm;
  let fixture: ComponentFixture<CooperationForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CooperationForm],
    }).compileComponents();

    fixture = TestBed.createComponent(CooperationForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
