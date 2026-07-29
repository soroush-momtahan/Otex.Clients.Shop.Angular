import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cooperations } from './cooperations';

describe('Cooperations', () => {
  let component: Cooperations;
  let fixture: ComponentFixture<Cooperations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cooperations],
    }).compileComponents();

    fixture = TestBed.createComponent(Cooperations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
