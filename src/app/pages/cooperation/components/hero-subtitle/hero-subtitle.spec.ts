import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSubtitle } from './hero-subtitle';

describe('HeroSubtitle', () => {
  let component: HeroSubtitle;
  let fixture: ComponentFixture<HeroSubtitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSubtitle],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroSubtitle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
