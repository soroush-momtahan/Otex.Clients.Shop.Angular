import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSlidebar } from './profile-slidebar';

describe('ProfileSlidebar', () => {
  let component: ProfileSlidebar;
  let fixture: ComponentFixture<ProfileSlidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileSlidebar],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileSlidebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
