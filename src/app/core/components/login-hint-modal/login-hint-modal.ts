import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, signal } from '@angular/core';
import {LoginHintModalService} from '../../services/login-hint-modal/login-hint-modal.service';

@Component({
  selector: 'app-login-hint-modal',
  imports: [],
  templateUrl: './login-hint-modal.html',
  styleUrl: './login-hint-modal.css',
  standalone: true
})
export class LoginHintModal {
  public loginHintModal = inject(LoginHintModalService);

  // آرایه های عکس شما که قبلا داشتیم...
  col1 = signal([
    '/images/lent-01.png',
    '/images/disk-01.png',
    '/images/disk-04.png',
    // تکرار برای لوپ
    '/images/lent-01.png',
    '/images/disk-01.png',
    '/images/disk-04.png',
  ]);

  col2 = signal([
    '/images/lent-02.png',
    '/images/disk-02.png',
    '/images/lent-04.png',
    // تکرار برای لوپ
    '/images/lent-02.png',
    '/images/disk-02.png',
    '/images/lents-01.png',
  ]);

  col3 = signal([
    '/images/lents-02.png',
    '/images/disk-03.png',
    '/images/lent-03.png',
    // تکرار برای لوپ
    '/images/lents-02.png',
    '/images/disk-03.png',
    '/images/lent-03.png',
  ]);

  close() {
    this.loginHintModal.close();
  }

  open() {
    this.loginHintModal.open();
  }
}
