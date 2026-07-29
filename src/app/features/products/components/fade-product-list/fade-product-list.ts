import { Component } from '@angular/core';
import {getTopScrollingProducts} from '../../models/product-card.model';
import {ProductCard} from '../product-card/product-card';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-fade-product-list',
  imports: [
    ProductCard,
    RouterLink
  ],
  templateUrl: './fade-product-list.html',
  styleUrl: './fade-product-list.css',
})
export class FadeProductList {
  protected readonly getTopScrollingProducts = getTopScrollingProducts;
}
