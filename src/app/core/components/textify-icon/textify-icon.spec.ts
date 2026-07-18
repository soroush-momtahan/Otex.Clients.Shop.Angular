import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextifyIcon } from './textify-icon';

describe('TextifyIcon', () => {
  let component: TextifyIcon;
  let fixture: ComponentFixture<TextifyIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextifyIcon],
    }).compileComponents();

    fixture = TestBed.createComponent(TextifyIcon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
