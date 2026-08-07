import {
  Component,
  DestroyRef,
  DOCUMENT,
  effect,
  ElementRef,
  inject,
  NgZone,
  signal,
  viewChild,
  afterNextRender, // <--- اضافه شد
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { NavbarService } from '../../services/navbar/navbar.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Products } from '../../../pages/products/products';
import { FormsModule } from '@angular/forms';
import { CurrencyChangerIcon } from '../currency-changer-icon/currency-changer-icon';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { auditTime, distinctUntilChanged, fromEvent, map, pairwise } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  imports: [CurrencyChangerIcon, NgTemplateOutlet, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {
  navService = inject(NavbarService);
  private document = inject(DOCUMENT);
  private zone = inject(NgZone);
  private destroyRef = inject(DestroyRef);

  searchInput = viewChild<ElementRef<HTMLInputElement>>('searchInput');

  isHidden = signal<boolean>(false);

  constructor() {
    // 1. SSR Best Practice:
    // این تابع به انگولار می‌گوید: "این بلاک کد را فقط و فقط روی مرورگر (کلاینت) و بعد از رندر شدن DOM اجرا کن"
    // بنابراین سمت سرور (Node.js) اصلا وارد این بخش نمی‌شود و خطای Window Not Defined نمی‌گیریم.
    afterNextRender(() => {
      this.initSmartScroll();
    });

    // 2. خبر خوب: effect در انگولار ذاتا فقط در مرورگر (Client-side) اجرا می‌شود!
    // پس این بخش به طور پیش‌فرض برای SSR کاملا ایمن است.
    effect(() => {
      if (this.navService.isSearchActive()) {
        const input = this.searchInput()?.nativeElement;
        if (input) {
          setTimeout(() => input.focus(), 50);
        }
      }
    });
  }

  /* Best Practice: پیاده‌سازی اسکرول هوشمند با پرفورمنس بالا (SSR Safe) */
  private initSmartScroll(): void {
    // گرفتن آبجکت window به صورت ایمن از طریق تزریق DOCUMENT
    const defaultView = this.document.defaultView;
    if (!defaultView) return; // اگر به هر دلیلی window وجود نداشت (مثلا روی سرور)، خارج شو

    this.zone.runOutsideAngular(() => {
      // استفاده از defaultView به جای window
      fromEvent(defaultView, 'scroll')
        .pipe(
          auditTime(50),

          map(() => this.document.documentElement.scrollTop || this.document.body.scrollTop),

          pairwise(),

          map(([prev, curr]) => {
            if (curr < 50) return false;
            return curr > prev;
          }),

          distinctUntilChanged(),

          takeUntilDestroyed(this.destroyRef),
        )
        .subscribe((shouldHide) => {
          this.zone.run(() => {
            this.isHidden.set(shouldHide);
          });
        });
    });
  }

  closeSearch() {
    this.navService.resetSearchbar();
  }

  protected readonly Products = Products;
}
