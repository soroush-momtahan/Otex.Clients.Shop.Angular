import { afterNextRender, Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginHintModalService {
  isOpen = signal<boolean>(false);

  constructor() {

    afterNextRender(() => {
      // گوش دادن به دکمه بازگشت (Back) مرورگر یا گوشی موبایل
      window.addEventListener('popstate', () => {
        // اگر دکمه بک زده شد و پاپ آپ باز بود، فقط پاپ آپ را ببند
        if (this.isOpen()) {
          this.isOpen.set(false);
        }
      });

      // (اختیاری و حرفه ای): بسته شدن پاپ آپ با زدن دکمه ESC در کیبورد کامپیوتر
      window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && this.isOpen()) {
          this.close();
        }
      });
    });
  }

  open() {
    if (!this.isOpen()) {
      this.isOpen.set(true);

      // جادوی اصلی اینجاست:
      // یک "تاریخچه مجازی" به مرورگر اضافه میکنیم بدون اینکه آدرس (URL) تغییر کند
      window.history.pushState({ modal: 'signup-modal' }, '', window.location.href);
    }
  }

  close() {
    if (this.isOpen()) {
      this.isOpen.set(false);

      // اگر کاربر به جای دکمه گوشی، روی دکمه ضربدر (X) کلیک کرد:
      // باید آن تاریخچه مجازی که ساخته بودیم را پاک کنیم تا دکمه بک گوشی خراب نشود
      if (window.history.state && window.history.state.modal === 'signup-modal') {
        window.history.back();
      }
    }
  }
}
