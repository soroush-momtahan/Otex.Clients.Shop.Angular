import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import {Cooperation} from './pages/cooperation/cooperation';
import { HeroSection } from './pages/home/components/hero-section/hero-section';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'cooperation', component: Cooperation },
  { path: 'hero', component: HeroSection },
  { path: '**', redirectTo: 'home' }
];
