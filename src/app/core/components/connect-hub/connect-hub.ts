import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-connect-hub',
  imports: [],
  templateUrl: './connect-hub.html',
  styleUrl: './connect-hub.css',
})
export class ConnectHub {
  // تب پیش‌فرض روی تماس تنظیم شده است
  activeTab = signal<'contact' | 'social' | 'agencies'>('contact');

  changeTab(tab: 'contact' | 'social' | 'agencies') {
    this.activeTab.set(tab);
  }
}
