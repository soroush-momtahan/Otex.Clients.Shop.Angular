import {Component, effect, ElementRef, inject, signal, viewChild} from '@angular/core';
import {NgTemplateOutlet} from '@angular/common';
import {NavbarService} from '../../services/navbar/navbar.service';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {Products} from '../../../pages/products/products';
import {FormsModule} from '@angular/forms';
import {CurrencyChangerIcon} from '../currency-changer-icon/currency-changer-icon';

@Component({
  selector: 'app-nav-bar',
  imports: [CurrencyChangerIcon, NgTemplateOutlet, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {
  navService = inject(NavbarService);
  searchInput = viewChild<ElementRef<HTMLInputElement>>('searchInput');

  constructor() {
    effect(() => {
      // اگر حالت سرچ فعال شد و اینپوت در DOM قرار گرفت
      if (this.navService.isSearchActive()) {
        const input = this.searchInput()?.nativeElement;
        if (input) {
          // استفاده از setTimeout کوتاه برای اطمینان از پایان رندر DOM
          setTimeout(() => input.focus(), 50);
        }
      }
    });
  }

  closeSearch() {
    this.navService.resetSearchbar();
  }

  protected readonly Products = Products;
}
