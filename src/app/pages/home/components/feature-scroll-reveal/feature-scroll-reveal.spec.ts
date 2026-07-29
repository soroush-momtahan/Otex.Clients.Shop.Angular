import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureScrollReveal } from './feature-scroll-reveal';

describe('FeatureScrollReveal', () => {
  let component: FeatureScrollReveal;
  let fixture: ComponentFixture<FeatureScrollReveal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureScrollReveal],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureScrollReveal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
