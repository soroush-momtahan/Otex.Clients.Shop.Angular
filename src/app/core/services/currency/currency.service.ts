import {Injectable, signal} from '@angular/core';

export type CurrencyUnit = 'IRR' | 'TOMAN';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  activeCurrency = signal<CurrencyUnit>('TOMAN');

  setCurrency(unit: CurrencyUnit) {
    this.activeCurrency.set(unit);
  }
}
