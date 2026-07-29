import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyChangerIcon } from './currency-changer-icon';

describe('CurrencyChangerIcon', () => {
  let component: CurrencyChangerIcon;
  let fixture: ComponentFixture<CurrencyChangerIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrencyChangerIcon],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrencyChangerIcon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
