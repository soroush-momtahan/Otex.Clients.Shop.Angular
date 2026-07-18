import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import {Cooperation} from './pages/cooperation/cooperation';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'cooperation', component: Cooperation },
  { path: '**', redirectTo: 'home' }
];
