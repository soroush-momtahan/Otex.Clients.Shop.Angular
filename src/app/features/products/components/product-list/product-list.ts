import { Component, computed, inject, input } from '@angular/core';
import {
  getAdvancedFilteredProducts,
  getInitialProductCard,
  ProductCardModel,
} from '../../models/product-card.model';
import { ProductService } from '../../services/product.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductCard } from '../product-card/product-card';

interface ProductListViewModel {
  isLoading: boolean;
  hasError: boolean;
  errorMessage: string | null;
  isEmpty: boolean;
  products: ProductCardModel[];
}

@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  private productService = inject(ProductService);
  searchQuery = input('');

  // productsResource = rxResource({
  //   // ۱. در rxResource به جای loader باید از کلمه stream استفاده کنید
  //   stream: () => this.productService.getProducts(),
  //   // ۲. اختصاص مقدار پیش‌فرض، مشکل تایپ اسکریپت (products: {}) را کاملاً حل می‌کند
  //   // به این ترتیب تایپ‌اسکریپت می‌فهمد که ولیو در بدترین حالت یک آرایه خالی از محصولات است
  //   defaultValue: [] as ProductCardModel[],
  // });

  viewModel = computed<ProductListViewModel>(() => {
    // const isLoading = false && this.productsResource.isLoading();
    // const error = false && this.productsResource.error();

    const isLoading = false;
    const error = false;

    // حالا دیتای ما به طور قطع آرایه‌ای از ProductCardModel است (هیچ‌وقت undefined یا آبجکت خالی نیست)
    // const products = this.productsResource.value();
    const products = getAdvancedFilteredProducts(getInitialProductCard(), this.searchQuery()).sort(
      (a, b) => a.order - b.order,
    );
    return {
      isLoading,
      hasError: !!error,
      errorMessage: error ? 'متأسفانه در دریافت لیست محصولات خطایی رخ داد.' : null,
      products,
      isEmpty: !isLoading && !error && products.length === 0,
    };
  });

  retryFetch() {
    // this.productsResource.reload();
  }
}
