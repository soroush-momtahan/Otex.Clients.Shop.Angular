import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FadeProductList } from './fade-product-list';

describe('FadeProductList', () => {
  let component: FadeProductList;
  let fixture: ComponentFixture<FadeProductList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FadeProductList],
    }).compileComponents();

    fixture = TestBed.createComponent(FadeProductList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
