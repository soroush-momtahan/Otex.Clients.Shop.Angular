import {Component, signal} from '@angular/core';
import {DutyIcon} from './components/duty-icon/duty-icon';
import {FeatureScrollReveal} from './components/feature-scroll-reveal/feature-scroll-reveal';
import {Hero} from './components/hero/hero';
import {FadeProductList} from '../../features/products/components/fade-product-list/fade-product-list';
import {Faq} from '../../core/components/faq/faq';
import {ConnectHub} from '../../core/components/connect-hub/connect-hub';
import { CooperationWithUs } from '../../features/cooperation/components/cooperation-with-us/cooperation-with-us';

@Component({
  selector: 'app-home',
  imports: [
    DutyIcon,
    FeatureScrollReveal,
    Hero,
    FadeProductList,
    Faq,
    ConnectHub,
    CooperationWithUs,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  searchBarValue = signal<string>('');
}
