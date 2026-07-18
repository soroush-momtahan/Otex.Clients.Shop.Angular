import {Component, computed, inject} from '@angular/core';
import { CurrencyService, CurrencyUnit } from '../../services/currency/currency.service';


@Component({
  selector: 'app-currency-icon',
  imports: [],
  templateUrl: './currency-icon.html',
  styleUrl: './currency-icon.css',
})
export class CurrencyIcon {
  activeCurrencyService = inject(CurrencyService);
  viewModel = computed<CurrencyUnit>(() => {
    return this.activeCurrencyService.activeCurrency();
  })
}
