import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cooperation } from './cooperation';

describe('Cooperation', () => {
  let component: Cooperation;
  let fixture: ComponentFixture<Cooperation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cooperation],
    }).compileComponents();

    fixture = TestBed.createComponent(Cooperation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
