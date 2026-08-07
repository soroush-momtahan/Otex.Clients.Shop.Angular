import { Component, computed, effect, inject, signal, untracked } from '@angular/core';
import { NgClass } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
type MobileMenuState = 'icon' | 'peek' | 'open';
@Component({
  selector: 'app-profile-slidebar',
  imports: [NgClass],
  templateUrl: './profile-slidebar.html',
  styleUrl: './profile-slidebar.css',
})
export class ProfileSlidebar {
  private breakpointObserver = inject(BreakpointObserver);

  isHovered = signal<boolean>(false);
  isPinned = signal<boolean>(false);
  isSubmenuOpen = signal<boolean>(false);
  mobileMenuState = signal<MobileMenuState>('icon');

  // SSR-Safe Breakpoints
  isMobile = toSignal(
    this.breakpointObserver.observe('(max-width: 767.98px)').pipe(map((r) => r.matches)),
    { initialValue: false },
  );

  isTablet = toSignal(
    this.breakpointObserver
      .observe('(min-width: 768px) and (max-width: 1023.98px)')
      .pipe(map((r) => r.matches)),
    { initialValue: false },
  );

  isDesktop = toSignal(
    this.breakpointObserver.observe('(min-width: 1024px)').pipe(map((r) => r.matches)),
    { initialValue: true }, // دسکتاپ به عنوان پیش‌فرض SSR
  );

  // محاسبه عرض نهایی بصری (آیا سایدبار باید بزرگ دیده شود؟)
  isExpanded = computed(() => {
    if (this.isMobile()) return this.mobileMenuState() === 'open';
    return this.isPinned() || this.isHovered();
  });

  constructor() {
    effect(() => {
      const desktop = this.isDesktop();
      const tablet = this.isTablet();

      untracked(() => {
        if (desktop) {
          // در lg به بالا: خودکار پین می‌شود
          this.isPinned.set(true);
          this.mobileMenuState.set('icon');
        } else if (tablet) {
          // در md تا lg: خودکار از حالت پین خارج (Unpinned) می‌شود
          this.isPinned.set(false);
          this.mobileMenuState.set('icon');
        }
      });
    });
  }

  togglePin() {
    this.isPinned.update((v) => !v);
  }

  onSidebarEnter() {
    if (!this.isMobile()) this.isHovered.set(true);
  }

  onSidebarLeave() {
    if (!this.isMobile()) this.isHovered.set(false);
  }

  // هندل کردن دکمه شناور در سمت چپ
  handleMobileFloatClick(event: Event) {
    event.stopPropagation();
    if (this.mobileMenuState() === 'icon') {
      this.mobileMenuState.set('peek'); // کلیک اول: نمایش متن
    } else if (this.mobileMenuState() === 'peek') {
      this.mobileMenuState.set('open'); // کلیک دوم: باز شدن منو اصلی
    }
  }

  closeMobileMenu() {
    this.mobileMenuState.set('icon'); // ریست شدن به حالت فقط آیکون
  }

  // متد تغییر وضعیت زیرمنو
  toggleSubmenu(event: Event) {
    event.preventDefault();
    // وقتی کاربر روی زیرمنو کلیک کرد، اگر سایدبار جمع است، ابتدا آن را باز کن (اختیاری)
    if (!this.isExpanded()) {
      this.isHovered.set(true);
    }
    this.isSubmenuOpen.update((v) => !v);
  }
}
