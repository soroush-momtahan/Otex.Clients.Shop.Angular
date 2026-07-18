import { Component } from '@angular/core';
import {CurrencyChangerIcon} from '../currency-changer-icon/currency-changer-icon';
import { HeroTitle } from '../hero-title/hero-title';

@Component({
  selector: 'app-hero-header',
  imports: [CurrencyChangerIcon, HeroTitle],
  templateUrl: './hero-header.html',
  styleUrl: './hero-header.css',
})
export class HeroHeader {}
