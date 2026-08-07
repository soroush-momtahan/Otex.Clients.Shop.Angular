import { Component, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterEvent,
  RouterOutlet,
} from '@angular/router';
import { ScrollMemoryService } from './core/services/scroll/scroll-memory.service';
import { isPlatformBrowser } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('Otex.Clients.Shop.Angular');
  // سرویس را تزریق می‌کنیم
  private scrollMemory = inject(ScrollMemoryService);
  isLoading = signal<boolean>(false);
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);

  ngOnInit() {
    // سیستم حافظه اسکرول را روشن می‌کنیم
    this.scrollMemory.init();
  }
  constructor() {
    // 💡 شرط حیاتی برای SSR: این بلاک فقط در مرورگر کاربر اجرا می‌شود
    if (isPlatformBrowser(this.platformId)) {

      this.router.events
        .pipe(takeUntilDestroyed()) // پایان خودکار سابسکریپشن برای جلوگیری از نشت حافظه
        .subscribe((event) => {

          // شروع جابه‌جایی بین صفحات
          if (event instanceof NavigationStart) {
            // 💡 ترفند طلایی برای SSR:
            // اگر id برابر 1 باشد یعنی کاربر صفحه را رفرش کرده یا تازه وارد سایت شده.
            // در این حالت لودینگ را نشان نده (چون سرور HTML را ساخته است).
            // if (event.id === 1) {
            //   return;
            // }
            this.isLoading.set(true);
          }

          // پایان جابه‌جایی (موفق، لغو شده یا دارای خطا)
          if (
            event instanceof NavigationEnd ||
            event instanceof NavigationCancel ||
            event instanceof NavigationError
          ) {
            // مکث کوتاه برای دیده شدن انیمیشن جذاب شما
            setTimeout(() => {
              this.isLoading.set(false);
            }, 800); // زمان را به 800 میلی‌ثانیه افزایش دادم تا چرخش ساعت شنی بهتر دیده شود
          }

        });
    }
  }
}
