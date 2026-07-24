import {Component, signal} from '@angular/core';
import {ProductList} from '../../features/products/components/product-list/product-list';
import {IconPanel} from './components/icon-panel/icon-panel';
import {HeroHeader} from './components/hero-header/hero-header';
import {BannersSlider} from '../../features/banners/components/banners-slider/banners-slider';
import {SearchBar} from './components/search-bar/search-bar';
import {HeroSection} from './components/hero-section/hero-section';

@Component({
  selector: 'app-home',
  imports: [
    ProductList,
    IconPanel,
    HeroHeader,
    BannersSlider,
    SearchBar,
    HeroSection,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  searchBarValue = signal<string>('');
}
