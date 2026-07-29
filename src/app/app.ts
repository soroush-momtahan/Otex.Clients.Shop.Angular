import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BottomNav} from './core/components/bottom-nav/bottom-nav';
import {LoginHintModal} from './core/components/login-hint-modal/login-hint-modal';
import {NavBar} from './core/components/nav-bar/nav-bar';
import {Footer} from './core/components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [LoginHintModal, BottomNav, RouterOutlet, NavBar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Otex.Clients.Shop.Angular');
}
