import {Component, computed, inject, input} from '@angular/core';
import {ProductCardModel} from '../../models/product-card.model';
import {getInStockStatusConfig, InStockStatusConfig} from './style-configs/in-stock-status.config';
import {PRICE_TYPE_MAP, PriceTypeConfig} from './style-configs/price-type.config';
import {NgOptimizedImage} from '@angular/common';
import {CurrencyService} from '../../../../core/services/currency/currency.service';
import {ProductPriceType} from '../../enums/product-price-type';
import {CurrencyIcon} from '../../../../core/components/currency-icon/currency-icon';

interface ProductCardViewModel {
  isCompact: boolean;
  product: ProductCardModel;
  activeStyleConfig: InStockStatusConfig | PriceTypeConfig;
  isAvailable: boolean,
  formatedPayablePrice: string,
  formatedOriginalPrice: string,
  hasDiscount: boolean;
}

@Component({
  selector: 'app-product-card',
  imports: [
    CurrencyIcon,
    NgOptimizedImage,
    CurrencyIcon
  ],
  templateUrl: './product-card.html',
  standalone: true,
  styleUrl: './product-card.css',
})
export class ProductCard {
  activeCurrencyService = inject(CurrencyService);
  productData = input.required<ProductCardModel>();
  isCompact = input(true);
  viewModel = computed<ProductCardViewModel>(() => {
    const isCompact = this.isCompact()
    const product = this.productData();
    const formatedPayablePrice = this.activeCurrencyService.activeCurrency() === 'TOMAN' ?
      (Number(product.payablePrice)/10).toLocaleString("en-US") :
      Number(product.payablePrice).toLocaleString("en-US");
    const formatedOriginalPrice = this.activeCurrencyService.activeCurrency() === 'TOMAN'?
      (Number(product.originalPrice)/10).toLocaleString("en-US") :
      Number(product.originalPrice).toLocaleString("en-US");
    const hasDiscount = product.discountPercent !== 0;
    const isAvailable = product.isAvailable;
    let activeStyleConfig: PriceTypeConfig | InStockStatusConfig;
    if (product.isAvailable) {
      activeStyleConfig = PRICE_TYPE_MAP[product.priceType] || PRICE_TYPE_MAP[ProductPriceType.Base];
    } else {
      activeStyleConfig = getInStockStatusConfig(false);
    }
    return {
      isCompact,
      product,
      activeStyleConfig,
      isAvailable,
      formatedPayablePrice,
      formatedOriginalPrice,
      hasDiscount,
    }
  });
}
