import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannersSlider } from './banners-slider';

describe('BannersSlider', () => {
  let component: BannersSlider;
  let fixture: ComponentFixture<BannersSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannersSlider],
    }).compileComponents();

    fixture = TestBed.createComponent(BannersSlider);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
