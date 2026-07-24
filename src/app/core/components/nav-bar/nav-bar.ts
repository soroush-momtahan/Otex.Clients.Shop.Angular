import { Component } from '@angular/core';
import { HeroHeader } from '../../../pages/home/components/hero-header/hero-header';
import { HeroTitle } from '../../../pages/home/components/hero-title/hero-title';
import {CurrencyChangerIcon} from '../../../pages/home/components/currency-changer-icon/currency-changer-icon';

@Component({
  selector: 'app-nav-bar',
  imports: [HeroHeader, HeroTitle, CurrencyChangerIcon],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {}
