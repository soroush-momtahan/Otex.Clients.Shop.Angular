import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {getInitialProductCard, ProductCardModel} from '../models/product-card.model';
import {map, Observable, timeout} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  http = inject(HttpClient);

  getMockProducts() : ProductCardModel[] {
    return getInitialProductCard();
  }
  getProducts() : Observable<ProductCardModel[]> {
    return this.http.get<ProductCardModel[] | null>(`http://localhost:3000/products`).pipe(
      timeout(8000),
      map(response => response ? response : [])
    );
  }
}
