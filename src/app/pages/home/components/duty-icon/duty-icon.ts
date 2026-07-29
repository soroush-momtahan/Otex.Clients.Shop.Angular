import {Component, ViewEncapsulation} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

interface DutyModel {
  id: number;
  title: string;
  subtitle: string;
  bgImage: string;
  svgIcon: SafeHtml;
}
@Component({
  selector: 'app-duty-icon',
  imports: [],
  templateUrl: './duty-icon.html',
  styleUrl: './duty-icon.css',
  encapsulation: ViewEncapsulation.None
})
export class DutyIcon {
  models: DutyModel[] = [];

  constructor(private sanitizer: DomSanitizer) {
    this.models = [
      {
        id: 1,
        title: 'لیست قیمت',
        subtitle: 'مشاهده قیمت‌های فروش عمده و خرد',
        bgImage: 'images/duty-price-list-2.jpeg', // آدرس عکسی که در مرحله بعد می‌سازیم
        svgIcon: this.getSafeSvg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`)
      },
      {
        id: 2,
        title: 'همکاری با ما',
        subtitle: 'پیوستن به خانواده بزرگ نمایندگان اُتکس',
        bgImage: 'images/handshake.jpg',
        svgIcon: this.getSafeSvg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>`)
      },
      {
        id: 3,
        title: 'راهنمای سایت',
        subtitle: 'آموزش خرید و استفاده از خدمات',
        bgImage: 'images/duty-guide.jpeg',
        svgIcon: this.getSafeSvg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>`)
      },
      {
        id: 4,
        title: 'تماس با ما',
        subtitle: 'پشتیبانی و ارتباط با کارشناسان',
        bgImage: 'images/duty-contact-us.jpeg',
        svgIcon: this.getSafeSvg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /></svg>`)
      }
    ];
  }

  // متدی برای امن کردن تگ‌های SVG جهت نمایش در HTML
  private getSafeSvg(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}
