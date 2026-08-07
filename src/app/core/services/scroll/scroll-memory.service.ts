import { Injectable, inject } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollMemoryService {
  private router = inject(Router);

  // این ابزار داخلی انگولار برای مدیریت اسکرول است که از window.scrollTo بهتر است
  private viewportScroller = inject(ViewportScroller);

  // یک Map برای نگهداری موقعیت اسکرول هر URL (محور X و Y)
  private positions = new Map<string, [number, number]>();

  init(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart || event instanceof NavigationEnd))
      .subscribe((event) => {
        // ۱. کاربر روی یک تب کلیک کرده و در حال خروج از صفحه فعلی هستیم
        if (event instanceof NavigationStart) {
          // موقعیت دقیق اسکرول در این لحظه را با کلید URL فعلی ذخیره کن
          this.positions.set(this.router.url, this.viewportScroller.getScrollPosition());
        }

        // ۲. کاربر وارد صفحه جدید شده است
        else if (event instanceof NavigationEnd) {
          const savedPosition = this.positions.get(event.urlAfterRedirects);

          // استفاده از setTimeout بسیار مهم است!
          // به انگولار اجازه می‌دهیم DOM صفحه جدید را رندر کند تا صفحه ارتفاع بگیرد، سپس اسکرول می‌کنیم
          setTimeout(() => {
            if (savedPosition) {
              this.viewportScroller.scrollToPosition(savedPosition); // برو به جای قبلی
            } else {
              this.viewportScroller.scrollToPosition([0, 0]); // اگر دفعه اوله، برو بالای صفحه
            }
          }, 50);
        }
      });
  }
}
