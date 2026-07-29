import {Component, computed, inject} from '@angular/core';
import {CurrencyService} from '../../services/currency/currency.service';

@Component({
  selector: 'app-currency-changer-icon',
  imports: [],
  templateUrl: './currency-changer-icon.html',
  styleUrl: './currency-changer-icon.css',
})
export class CurrencyChangerIcon {
  currencyService = inject(CurrencyService);
  isAnimating = false;

  toggleCurrency() {
    this.isAnimating = true;

    if (this.currencyService.activeCurrency() === 'TOMAN'){
      this.currencyService.setCurrency('IRR');
    }else {
      this.currencyService.setCurrency('TOMAN');
    }

    // حذف کلاس انیمیشن بعد از اتمام
    setTimeout(() => {
      this.isAnimating = false;
    }, 600);
  }
  viewModel = computed(() => this.currencyService.activeCurrency());
}
