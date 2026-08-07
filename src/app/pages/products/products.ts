import {Component, effect, inject, OnDestroy, signal, TemplateRef, viewChild} from '@angular/core';
import {BannersSlider} from "../../features/banners/components/banners-slider/banners-slider";
import {ProductList} from "../../features/products/components/product-list/product-list";
import {NavbarService} from '../../core/services/navbar/navbar.service';
import {ProductDutyIcons} from './components/product-duty-icons/product-duty-icons';
import {Warning} from './components/warning/warning';
import {Faq} from '../../core/components/faq/faq';
import {ConnectHub} from '../../core/components/connect-hub/connect-hub';
import { NavbarStateService } from '../../core/services/navbar/navbar-state.service';

@Component({
  selector: 'app-products',
  imports: [BannersSlider, ProductList, ProductDutyIcons, Warning, Faq, ConnectHub],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnDestroy {
  searchBarValue = signal<string>('');
  navbarService = inject(NavbarService);
  navState = inject(NavbarStateService);

  navService = inject(NavbarService);

  // گرفتن رفرنس قالب‌ها از HTML با استفاده از سیگنال‌های Angular 22
  customIcon = viewChild<TemplateRef<any>>('customIcon');
  pageTitle = viewChild<TemplateRef<any>>('pageTitle');
  customActions = viewChild<TemplateRef<any>>('customActions');

  constructor() {
    // تنظیم عنوان صفحه

    // استفاده از effect برای زمانی که Templateها در DOM آماده شدند
    effect(() => {
      const icon = this.customIcon();
      const actions = this.customActions();
      const title = this.pageTitle();

      if (icon) this.navService.pageIcon.set(icon);
      if (title) this.navService.pageTitle.set(title);
      if (actions) this.navService.pageActions.set(actions);
    });
  }

  onSaveProduct() {
    console.log('این فانکشن از دکمه داخل نوبار فراخوانی شد!');
  }

  openSearch() {
    this.navService.isSearchActive.set(true);
  }

  // **بسیار مهم**: هنگام خروج از صفحه باید نوبار را به حالت قبل برگردانید
  ngOnDestroy() {
    this.navService.reset();
  }
}
