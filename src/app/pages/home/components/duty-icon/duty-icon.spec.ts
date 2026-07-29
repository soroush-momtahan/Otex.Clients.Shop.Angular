import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DutyIcon } from './duty-icon';

describe('DutyIcon', () => {
  let component: DutyIcon;
  let fixture: ComponentFixture<DutyIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DutyIcon],
    }).compileComponents();

    fixture = TestBed.createComponent(DutyIcon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
