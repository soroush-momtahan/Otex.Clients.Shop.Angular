import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectHub } from './connect-hub';

describe('ConnectHub', () => {
  let component: ConnectHub;
  let fixture: ComponentFixture<ConnectHub>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnectHub],
    }).compileComponents();

    fixture = TestBed.createComponent(ConnectHub);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
