import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconPanel } from './icon-panel';

describe('IconPanel', () => {
  let component: IconPanel;
  let fixture: ComponentFixture<IconPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconPanel],
    }).compileComponents();

    fixture = TestBed.createComponent(IconPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
