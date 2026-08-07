import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserQuickAccess } from './user-quick-access';

describe('UserQuickAccess', () => {
  let component: UserQuickAccess;
  let fixture: ComponentFixture<UserQuickAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserQuickAccess],
    }).compileComponents();

    fixture = TestBed.createComponent(UserQuickAccess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
