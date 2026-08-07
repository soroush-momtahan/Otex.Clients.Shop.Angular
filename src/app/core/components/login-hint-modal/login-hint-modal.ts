import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, signal } from '@angular/core';
import {LoginHintModalService} from '../../services/login-hint-modal/login-hint-modal.service';

@Component({
  selector: 'app-login-hint-modal',
  imports: [],
  templateUrl: './login-hint-modal.html',
  styleUrl: './login-hint-modal.css',
  standalone: true,
})
export class LoginHintModal {
  public loginHintModal = inject(LoginHintModalService);

  // آرایه های عکس شما که قبلا داشتیم...
  col1 = signal([
    '/images/lents/lent-08.webp',
    '/images/disc/disk-01.webp',
    '/images/disc/disk-04.webp',
    // تکرار برای لوپ
    '/images/lents/lent-08.webp',
    '/images/disc/disk-05.webp',
    '/images/disc/disk-04.webp',
  ]);

  col2 = signal([
    '/images/lents/lent-09.webp',
    '/images/disc/disk-02.webp',
    '/images/lents/lent-04.webp',
    // تکرار برای لوپ
    '/images/lents/lent-09.webp',
    '/images/disc/disk-05.webp',
    '/images/lents/lent-05.webp',
  ]);

  col3 = signal([
    '/images/lents/lent-06.webp',
    '/images/disc/disk-03.webp',
    '/images/lents/lent-03.webp',
    // تکرار برای لوپ
    '/images/lents/lent-06.webp',
    '/images/disc/disk-03.webp',
    '/images/lents/lent-03.webp',
  ]);

  close() {
    this.loginHintModal.close();
  }

  open() {
    this.loginHintModal.open();
  }
}
