import {Component, signal} from '@angular/core';
import {BannersSlider} from "../../features/banners/components/banners-slider/banners-slider";
import {IconPanel} from "../home/components/icon-panel/icon-panel";
import {ProductList} from "../../features/products/components/product-list/product-list";
import {SearchBar} from "../home/components/search-bar/search-bar";

@Component({
  selector: 'app-products',
    imports: [
        BannersSlider,
        IconPanel,
        ProductList,
        SearchBar
    ],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  searchBarValue = signal<string>('');
}
