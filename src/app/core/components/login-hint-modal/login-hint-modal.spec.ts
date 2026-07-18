import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginHintModal } from './login-hint-modal';

describe('LoginHintModal', () => {
  let component: LoginHintModal;
  let fixture: ComponentFixture<LoginHintModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginHintModal],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginHintModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
