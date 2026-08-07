import { Component, signal } from '@angular/core';
import { TypeOfActivity } from '../../enums/type-of-activity';
export interface CooperationData {
  id: string; // شناسه منحصر به فرد
  firstName: string;
  lastName: string;
  mobile: string;
  province: string;
  city: string;
  typeOfActivity: TypeOfActivity | null;
  description: string;
}
@Component({
  selector: 'app-cooperation-list',
  imports: [],
  templateUrl: './cooperation-list.html',
  styleUrl: './cooperation-list.css',
})
export class CooperationList {
  // داده‌های نمونه (Mock Data)
  requests = signal<CooperationData[]>([
    {
      id: '1',
      firstName: 'علی',
      lastName: 'رضایی',
      mobile: '09123456789',
      province: 'تهران',
      city: 'تهران',
      typeOfActivity: TypeOfActivity.Mechanical,
      description: 'دارای تعمیرگاه تخصصی خودروهای داخلی.',
    },
    {
      id: '2',
      firstName: 'محمد',
      lastName: 'کریمی',
      mobile: '09151112233',
      province: 'خراسان رضوی',
      city: 'مشهد',
      typeOfActivity: TypeOfActivity.Store,
      description: 'فروشگاه لوازم یدکی در خیابان گاراژدارها.',
    },
    {
      id: '3',
      firstName: 'رضا',
      lastName: 'صادقی',
      mobile: '09139998877',
      province: 'اصفهان',
      city: 'اصفهان',
      typeOfActivity: TypeOfActivity.Other,
      description: 'پخش عمده قطعات خودرو.',
    },
  ]);

  // مدیریت مدال‌ها
  selectedRequest = signal<CooperationData | null>(null);
  requestToDelete = signal<CooperationData | null>(null);

  // متغیرهای مدیریت Swipe (لمس موبایل)
  private startX = 0;
  private currentX = 0;
  // نگهداری وضعیت ترانسفورم هر کارت به تفکیک آیدی
  activeSwipes = signal<Record<string, number>>({});

  // آستانه کشیدن برای اجرای عملیات (پیکسل)
  private readonly THRESHOLD = 100;

  // ==================== Touch Events (لاجیک Swipe) ====================
  onTouchStart(event: TouchEvent, id: string) {
    this.startX = event.touches[0].clientX;
    this.currentX = this.startX;
  }

  onTouchMove(event: TouchEvent, id: string) {
    this.currentX = event.touches[0].clientX;
    const diff = this.currentX - this.startX;

    // ایجاد حس سفتی و سنگینی با تقسیم بر 2.5 (Friction)
    const dampedDiff = diff / 2.5;

    // محدود کردن حداکثر کشش به 150 پیکسل
    const limitedDiff = Math.max(-150, Math.min(150, dampedDiff));

    this.activeSwipes.update((swipes) => ({ ...swipes, [id]: limitedDiff }));
  }

  onTouchEnd(id: string, request: CooperationData) {
    const finalX = this.activeSwipes()[id] || 0;

    if (finalX > this.THRESHOLD) {
      // کشیدن به راست کامل شد -> تماس
      this.callUser(request.mobile);
    } else if (finalX < -this.THRESHOLD) {
      // کشیدن به چپ کامل شد -> لغو/حذف
      this.openDeleteModal(request);
    }

    // بازگشت نرم کارت به سر جایش (Snap back)
    this.activeSwipes.update((swipes) => ({ ...swipes, [id]: 0 }));
  }

  // ==================== Actions ====================
  openDetails(request: CooperationData) {
    // جلوگیری از باز شدن مدال اگر کاربر در حال سوایپ بوده است
    const swipeOffset = Math.abs(this.activeSwipes()[request.id] || 0);
    if (swipeOffset < 10) {
      this.selectedRequest.set(request);
    }
  }

  closeDetails() {
    this.selectedRequest.set(null);
  }

  callUser(mobile: string) {
    window.location.href = `tel:${mobile}`;
  }

  openDeleteModal(request: CooperationData) {
    this.requestToDelete.set(request);
  }

  closeDeleteModal() {
    this.requestToDelete.set(null);
  }

  confirmDelete() {
    const id = this.requestToDelete()?.id;
    if (id) {
      this.requests.update((reqs) => reqs.filter((r) => r.id !== id));
    }
    this.closeDeleteModal();
  }

  // Helper برای گرفتن رنگ/متن نوع فعالیت
  getActivityInfo(type: TypeOfActivity | null) {
    switch (type) {
      case TypeOfActivity.Mechanical:
        return { label: 'مکانیک', color: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20' };
      case TypeOfActivity.Store:
        return { label: 'فروشگاه', color: 'text-amber-500 bg-amber-500/10 border-amber-500/20' };
      default:
        return { label: 'سایر', color: 'text-zinc-400 bg-zinc-400/10 border-zinc-400/20' };
    }
  }
}
