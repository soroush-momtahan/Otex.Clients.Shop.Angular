import {Component, inject, model, signal} from '@angular/core';
import { LoginHintModalService } from '../../services/login-hint-modal/login-hint-modal.service';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-bottom-nav',
  imports: [],
  templateUrl: './bottom-nav.html',
  styleUrl: './bottom-nav.css',
})
export class BottomNav {
  private router = inject(Router);
  private modalService = inject(LoginHintModalService)
  private authService: AuthService = inject(AuthService);
  activeTab = model<string>('home');

  // لیست آیتم های منو
  navItems = signal([
    { id: 'home', label: 'خانه', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { id: 'cart', label: 'سبد خرید', icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' },
    { id: 'profile', label: 'پروفایل', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
  ]);

  checkLoginAndSetActiveAndNavigate(tabId: string) {
    if (this.authService.isAnonymous() && (tabId === "cart" || tabId === "profile")) {
      this.modalService.open();
    }
    else {
      this.activeTab.set(tabId);
      this.router.navigate([`/${tabId}`]);
    }
  }
}
