// import {Component, inject, model, signal} from '@angular/core';
// import { LoginHintModalService } from '../../services/login-hint-modal/login-hint-modal.service';
// import {Router} from '@angular/router';
// import {AuthService} from '../../services/auth/auth.service';
//
// @Component({
//   selector: 'app-bottom-nav',
//   imports: [
//   ],
//   templateUrl: './bottom-nav.html',
//   styleUrl: './bottom-nav.css',
// })
// export class BottomNav {
//   private router = inject(Router);
//   private modalService = inject(LoginHintModalService)
//   private authService: AuthService = inject(AuthService);
//   activeTab = model<string>('home');
//
//   // لیست آیتم های منو
//   navItems = signal([
//     { id: 'home', label: 'خانه'},
//     { id: 'products', label: 'محصولات'},
//     { id: 'wallet', label: 'کیف‌پول'},
//     { id: 'cart', label: 'سبدخرید'},
//     { id: 'profile', label: 'پروفایل'},
//   ]);
//
//   checkLoginAndSetActiveAndNavigate(tabId: string) {
//     if (this.authService.isAnonymous() && (tabId === "cart" || tabId === "profile")) {
//       this.modalService.open();
//     }
//     else {
//       this.activeTab.set(tabId);
//       this.router.navigate([`/${tabId}`]);
//     }
//   }
// }

import { Component, inject, signal, OnInit, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { LoginHintModalService } from '../../services/login-hint-modal/login-hint-modal.service';
import { AuthService } from '../../services/auth/auth.service';

// تعریف یک اینترفیس برای تمیزی بیشتر
export interface NavItem {
  id: string;
  label: string;
  path: string;
  authRequired?: boolean;
}

@Component({
  selector: 'app-bottom-nav',
  standalone: true,
  templateUrl: './bottom-nav.html',
  styleUrl: './bottom-nav.css',
})
export class BottomNav implements OnInit {
  private router = inject(Router);
  private modalService = inject(LoginHintModalService);
  private authService = inject(AuthService);
  private destroyRef = inject(DestroyRef); // برای جلوگیری از مصرف حافظه در گوش دادن به روتر

  // مقدار اولیه 'home' است اما در ngOnInit بلافاصله بر اساس URL آپدیت می‌شود
  activeTab = signal<string>('home');

  // آرایه به صورت Signal تعریف شده و مسیر/نیاز به لاگین به آن اضافه شده است
  navItems = signal<NavItem[]>([
    { id: 'home', label: 'خانه', path: '/home' },
    { id: 'products', label: 'محصولات', path: '/products' },
    { id: 'wallet', label: 'کیف‌پول', path: '/wallet' },
    { id: 'cart', label: 'سبدخرید', path: '/cart', authRequired: true },
    { id: 'profile', label: 'پروفایل', path: '/profile', authRequired: true },
  ]);

  ngOnInit() {
    // ۱. تنظیم تب فعال در لحظه لود/رفرش صفحه
    this.updateActiveTab(this.router.url);

    // ۲. گوش دادن به تغییرات URL برای آپدیت تب فعال در صورت دکمه بک زدن در مرورگر
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((event: any) => {
        this.updateActiveTab(event.urlAfterRedirects);
      });
  }

  // متدی برای پیدا کردن تب فعال از روی URL
  private updateActiveTab(url: string): void {
    const matchedItem = this.navItems().find((item) => url.includes(item.id));
    if (matchedItem) {
      this.activeTab.set(matchedItem.id);
    }
  }

  // تابع شما با منطق مقیاس‌پذیرتر
  checkLoginAndSetActiveAndNavigate(tabId: string) {
    const item = this.navItems().find((i) => i.id === tabId);
    if (!item) return;

    // بررسی لاگین بر اساس پراپرتی authRequired
    if (item.authRequired && this.authService.isAnonymous()) {
      this.modalService.open();
      return;
    }

    // تنظیم تب و انتقال به صفحه جدید
    this.activeTab.set(item.id);
    this.router.navigate([item.path]);
  }
}
