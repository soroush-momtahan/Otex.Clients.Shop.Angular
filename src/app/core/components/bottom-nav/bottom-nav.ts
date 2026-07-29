import {Component, inject, model, signal} from '@angular/core';
import { LoginHintModalService } from '../../services/login-hint-modal/login-hint-modal.service';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-bottom-nav',
  imports: [
  ],
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
    { id: 'home', label: 'خانه'},
    { id: 'products', label: 'محصولات'},
    { id: 'wallet', label: 'کیف‌پول'},
    { id: 'cart', label: 'سبدخرید'},
    { id: 'profile', label: 'پروفایل'},
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
