import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNav } from './test-nav';

describe('TestNav', () => {
  let component: TestNav;
  let fixture: ComponentFixture<TestNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestNav],
    }).compileComponents();

    fixture = TestBed.createComponent(TestNav);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
