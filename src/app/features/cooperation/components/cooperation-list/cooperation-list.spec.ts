import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperationList } from './cooperation-list';

describe('CooperationList', () => {
  let component: CooperationList;
  let fixture: ComponentFixture<CooperationList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CooperationList],
    }).compileComponents();

    fixture = TestBed.createComponent(CooperationList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
