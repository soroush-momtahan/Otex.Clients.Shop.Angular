import { Component, inject } from '@angular/core';
import {BottomNav} from "../../components/bottom-nav/bottom-nav";
import {Footer} from "../../components/footer/footer";
import { LoginHintModal } from '../../components/login-hint-modal/login-hint-modal';
import { NavBar } from '../../components/nav-bar/nav-bar';
import {RouterOutlet} from "@angular/router";
import { TestNav } from '../../components/test-nav/test-nav';
import { NavbarStateService } from '../../services/navbar/navbar-state.service';

@Component({
  selector: 'app-shop',
  imports: [BottomNav, Footer, LoginHintModal, NavBar, RouterOutlet, TestNav],
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export class Shop {
  navState = inject(NavbarStateService);
}
