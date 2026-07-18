import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittedCooperation } from './submitted-cooperation';

describe('SubmittedCooperation', () => {
  let component: SubmittedCooperation;
  let fixture: ComponentFixture<SubmittedCooperation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmittedCooperation],
    }).compileComponents();

    fixture = TestBed.createComponent(SubmittedCooperation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
