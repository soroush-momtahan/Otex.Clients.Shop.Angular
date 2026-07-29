// navbar.service.ts
import {Injectable, model, signal, TemplateRef} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  searchBarQuery = signal('');
  // اگر title خالی باشد، لوگوی پیش‌فرض نشان داده می‌شود
  pageTitle = signal<TemplateRef<any> | null>(null);

  // برای رندر کردن آیکون صفحه (سمت راست)
  pageIcon = signal<TemplateRef<any> | null>(null);

  // برای رندر کردن دکمه‌های اختصاصی (سمت چپ)
  pageActions = signal<TemplateRef<any> | null>(null);

  // سیگنال جدید برای وضعیت جستجو
  isSearchActive = signal<boolean>(false);

  // این متد هنگام خروج از صفحه صدا زده می‌شود تا نوبار به حالت پیش‌فرض برگردد
  reset() {
    this.pageTitle.set(null);
    this.pageIcon.set(null);
    this.pageActions.set(null);
    this.isSearchActive.set(false); // ریست کردن جستجو هنگام خروج از صفحه
    this.searchBarQuery.set('');
  }
  resetSearchbar(){
    this.isSearchActive.set(false);
    this.searchBarQuery.set('');
  }
}
