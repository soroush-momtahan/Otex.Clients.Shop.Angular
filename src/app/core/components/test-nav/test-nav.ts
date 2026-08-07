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
  afterNextRender,
  Renderer2,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { NavbarService } from '../../services/navbar/navbar.service';
import { Router, NavigationStart, RouterLink, RouterLinkActive } from '@angular/router';
import { Products } from '../../../pages/products/products';
import { FormsModule } from '@angular/forms';
import { CurrencyChangerIcon } from '../currency-changer-icon/currency-changer-icon';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { auditTime, filter, fromEvent, map, pairwise } from 'rxjs';
import { NavbarStateService } from '../../services/navbar/navbar-state.service';

@Component({
  selector: 'app-test-nav',
  imports: [CurrencyChangerIcon, NgTemplateOutlet, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './test-nav.html',
  styleUrl: './test-nav.css',
})
export class TestNav {
  // navService = inject(NavbarService);
  // navState = inject(NavbarStateService); // جایگزین سیگنال‌های داخلی شد
  // private renderer = inject(Renderer2);
  //
  // private document = inject(DOCUMENT);
  // private zone = inject(NgZone);
  // private destroyRef = inject(DestroyRef);
  //
  // searchInput = viewChild<ElementRef<HTMLInputElement>>('searchInput');
  //
  // constructor() {
  //   afterNextRender(() => {
  //     this.initSmartScrollAndPull();
  //   });
  //
  //   effect(() => {
  //     if (this.navService.isSearchActive()) {
  //       const input = this.searchInput()?.nativeElement;
  //       if (input) {
  //         setTimeout(() => input.focus(), 50);
  //       }
  //     }
  //   });
  // }
  //
  // private initSmartScrollAndPull(): void {
  //   const defaultView = this.document.defaultView;
  //   if (!defaultView) return;
  //
  //   this.zone.runOutsideAngular(() => {
  //     let closeScrollY = 0; // متغیری برای ذخیره نقطه‌ای که منو بسته شد
  //
  //     fromEvent(defaultView, 'scroll')
  //       .pipe(
  //         auditTime(15),
  //         map(() => this.document.documentElement.scrollTop || this.document.body.scrollTop),
  //         pairwise(),
  //         takeUntilDestroyed(this.destroyRef),
  //       )
  //       .subscribe(([prev, curr]) => {
  //         this.zone.run(() => {
  //           // منطق اسکرول به پایین
  //           if (curr > prev) {
  //             // اگر منو باز است، فقط آن را ببند و نقطه اسکرول را ثبت کن
  //             if (this.navState.isExpanded()) {
  //               this.navState.isExpanded.set(false);
  //               closeScrollY = curr;
  //             }
  //             // اگر بسته است و حداقل 120 پیکسل از زمان بستن گذشته است، حالا غیبش کن!
  //             else if (curr > 50 && curr > closeScrollY + 120) {
  //               this.navState.isHidden.set(true);
  //             }
  //           }
  //           // منطق اسکرول به بالا
  //           else if (curr < prev) {
  //             this.navState.isHidden.set(false); // سریع ظاهر شو
  //
  //             // اگر نزدیک سقف نیستیم، باز نشو
  //             if (curr > 20) {
  //               this.navState.isExpanded.set(false);
  //             }
  //           }
  //         });
  //       });
  //
  //     // منطق کشش با انگشت (بدون تغییر)
  //     let touchStartY = 0;
  //     const PULL_THRESHOLD = 90;
  //
  //     fromEvent<TouchEvent>(this.document, 'touchstart', { passive: true })
  //       .pipe(takeUntilDestroyed(this.destroyRef))
  //       .subscribe((e) => (touchStartY = e.touches[0].clientY));
  //
  //     fromEvent<TouchEvent>(this.document, 'touchmove', { passive: true })
  //       .pipe(takeUntilDestroyed(this.destroyRef))
  //       .subscribe((e) => {
  //         if (defaultView.innerWidth < 768) {
  //           const currentScroll =
  //             this.document.documentElement.scrollTop || this.document.body.scrollTop;
  //           if (currentScroll <= 0) {
  //             const pullDistance = e.touches[0].clientY - touchStartY;
  //             if (pullDistance > PULL_THRESHOLD) {
  //               this.zone.run(() => {
  //                 this.navState.isExpanded.set(true);
  //                 this.navState.isHidden.set(false);
  //               });
  //             }
  //           }
  //         }
  //       });
  //   });
  // }
  //
  // closeSearch() {
  //   this.navService.resetSearchbar();
  // }
  //
  // protected readonly Products = Products;

  navService = inject(NavbarService);
  navState = inject(NavbarStateService);

  private document = inject(DOCUMENT);
  private zone = inject(NgZone);
  private destroyRef = inject(DestroyRef);
  private renderer = inject(Renderer2); // برای مدیریت ایمن استایل‌های Body
  private router = inject(Router);

  searchInput = viewChild<ElementRef<HTMLInputElement>>('searchInput');
  private scrollLockTimeout: any;

  // constructor() {
  //   afterNextRender(() => {
  //     this.initSmartScrollAndPull();
  //   });
  //
  //   // ==========================================
  //   // جادوی قفل اسکرول (Scroll Lock)
  //   // ==========================================
  //   effect(() => {
  //     if (this.navState.isExpanded()) {
  //       // وقتی منو باز است، اسکرول کل صفحه قفل می‌شود
  //       this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
  //       clearTimeout(this.scrollLockTimeout);
  //     } else {
  //       // وقتی بسته شد، با ۳۰۰ میلی‌ثانیه تاخیر (به اندازه زمان انیمیشن بسته شدن) اسکرول باز می‌شود
  //       this.scrollLockTimeout = setTimeout(() => {
  //         this.renderer.removeStyle(this.document.body, 'overflow');
  //       }, 300);
  //     }
  //   });
  //
  //   effect(() => {
  //     if (this.navService.isSearchActive()) {
  //       const input = this.searchInput()?.nativeElement;
  //       if (input) setTimeout(() => input.focus(), 50);
  //     }
  //   });
  // }

  constructor() {
    // ==========================================
    // رفع مشکل رفتن به صفحه جدید (Router Reset)
    // ==========================================
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationStart),
        takeUntilDestroyed(),
      )
      .subscribe(() => {
        // ۱. به محض کلیک روی یک لینک، نوار را ببند
        this.navState.isExpanded.set(false);
        // ۲. مطمئن شو که نوار در صفحه جدید قابل دیدن است (مخفی نیست)
        this.navState.isHidden.set(false);
        // ۳. برای اطمینان ۱۰۰ درصدی، قفل اسکرول را در همان لحظه و بدون تاخیر نابود کن
        this.renderer.removeStyle(this.document.body, 'overflow');
        clearTimeout(this.scrollLockTimeout);
      });

    afterNextRender(() => {
      this.initSmartScrollAndPull();
    });

    // جادوی قفل اسکرول (Scroll Lock)
    effect(
      () => {
        if (this.navState.isExpanded()) {
          this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
          clearTimeout(this.scrollLockTimeout);
        } else {
          this.scrollLockTimeout = setTimeout(() => {
            this.renderer.removeStyle(this.document.body, 'overflow');
          }, 300);
        }
      },
      // { allowSignalWrites: true },
    ); // اجازه آپدیت در افکت (در نسخه‌های جدید انگولار)

    // فوکوس سرچ‌بار
    effect(() => {
      if (this.navService.isSearchActive()) {
        const input = this.searchInput()?.nativeElement;
        if (input) setTimeout(() => input.focus(), 50);
      }
    });
  }

  private initSmartScrollAndPull(): void {
    const defaultView = this.document.defaultView;
    if (!defaultView) return;

    this.zone.runOutsideAngular(() => {
      // ۱. منطق اسکرول هوشمند (فقط وقتی صفحه قفل نیست کار می‌کند)
      fromEvent(defaultView, 'scroll')
        .pipe(
          auditTime(15),
          map(() => this.document.documentElement.scrollTop || this.document.body.scrollTop),
          pairwise(),
          takeUntilDestroyed(this.destroyRef),
        )
        .subscribe(([prev, curr]) => {
          this.zone.run(() => {
            // مخفی شدن هنگام اسکرول به پایین
            if (curr > 50 && curr > prev) {
              this.navState.isHidden.set(true);
            }
            // ظاهر شدن هنگام اسکرول به بالا
            else if (curr < prev) {
              this.navState.isHidden.set(false);
            }
          });
        });

      // ۲. منطق تاچ و کشش (Touch Gestures)
      let touchStartY = 0;
      const PULL_THRESHOLD = 90;

      fromEvent<TouchEvent>(this.document, 'touchstart', { passive: true })
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((e) => (touchStartY = e.touches[0].clientY));

      fromEvent<TouchEvent>(this.document, 'touchmove', { passive: true })
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((e) => {
          const currentY = e.touches[0].clientY;
          const diff = currentY - touchStartY; // مثبت = کشش به پایین | منفی = کشش به بالا

          // الف: اگر منو باز است و کاربر انگشتش را به بالا کشید (حتی ۳۰ پیکسل) -> سریع ببندش
          if (this.navState.isExpanded()) {
            if (diff < -30) {
              this.zone.run(() => this.navState.isExpanded.set(false));
            }
          }
          // ب: اگر منو بسته است و در بالای صفحه هستیم -> با کشش زیاد بازش کن
          else if (defaultView.innerWidth < 1024) {
            const currentScroll =
              this.document.documentElement.scrollTop || this.document.body.scrollTop;
            if (currentScroll <= 0 && diff > PULL_THRESHOLD) {
              this.zone.run(() => {
                this.navState.isExpanded.set(true);
                this.navState.isHidden.set(false);
              });
            }
          }
        });
    });
  }

  closeSearch() {
    this.navService.resetSearchbar();
  }

  protected readonly Products = Products;
}

