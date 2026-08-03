import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import {Cooperation} from './pages/cooperation/cooperation';
import { HeroSection } from './pages/home/components/hero-section/hero-section';
import {Products} from './pages/products/products';
import {TestPage} from './pages/test-page/test-page';
import { ContactUs } from './pages/contact-us/contact-us';
import { QuestionAnswer } from './pages/question-answer/question-answer';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'products', component: Products },
  { path: 'contact-us', component: ContactUs },
  { path: 'faq', component: QuestionAnswer },
  { path: 'cooperation-with-us', component: Cooperation },
  { path: 'hero', component: TestPage },
  { path: '**', redirectTo: 'home' }
];
