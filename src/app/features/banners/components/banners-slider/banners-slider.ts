import { register } from 'swiper/element';
import {
  Autoplay,
  EffectCards,
  EffectCoverflow,
  EffectCreative,
  EffectFlip,
  Pagination,
} from 'swiper/modules';
import {
  afterNextRender,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  signal,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-banners-slider',
  imports: [],
  templateUrl: './banners-slider.html',
  styleUrl: './banners-slider.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BannersSlider {
  @ViewChild('swiperRef') swiperEl!: ElementRef;

  // لیست بنرها
  banners = signal([
    { id: 1, image: '/images/banners/banner-05.webp', title: '' },
    { id: 2, image: '/images/banners/banner-09.webp', title: '' },
    { id: 3, image: '/images/banners/banner-06.webp', title: '' },
    { id: 4, image: '/images/banners/banner-04.webp', title: '' },
    { id: 5, image: '/images/banners/banner-07.webp', title: '' },
    { id: 6, image: '/images/banners/banner-08.webp', title: '' },
    { id: 7, image: '/images/banners/banner-03.webp', title: '' },
    { id: 8, image: '/images/banners/banner-10.webp', title: '' },
    { id: 9, image: '/images/banners/banner-02.webp', title: '' },
    { id: 10, image: '/images/banners/banner-11.webp', title: '' },
  ]);

  constructor() {
    // 🔥 جادوی حل مشکل SSR: این بخش فقط روی مرورگر کلاینت اجرا می‌شود
    afterNextRender(() => {
      // 1. ثبت Swiper
      register();

      // 2. اعمال تنظیمات چون حالا DOM به طور کامل در دسترس است
      this.initSwiper();
    });
  }

  // متدهای ngOnInit و ngAfterViewInit را حذف کردیم و منطق را به اینجا آوردیم
  private initSwiper() {
    if (!this.swiperEl?.nativeElement) return;

    const swiperParams = {
      modules: [Autoplay, Pagination, EffectCoverflow, EffectCards, EffectCreative, EffectFlip],
      centeredSlides: true,
      slidesPerView: 1.1,
      spaceBetween: 15,
      loop: true,
      speed: 600,

      grabCursor: true,
      slidesPerGroup: 1,
      touchRatio: 0.8,
      longSwipesRatio: 0.3,

      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },

      pagination: {
        // نیازی به تعریف el نیست مگر اینکه دیو اختصاصی ساخته باشید
        clickable: true,
        dynamicBullets: true,
      },

      effect: 'coverflow',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
      },

      breakpoints: {
        640: { slidesPerView: 1.5, spaceBetween: 20 },
        1024: { slidesPerView: 2.2, spaceBetween: 30, depth: 200 },
      },
    };

    // اعمال تنظیمات و استارت اسلایدر
    Object.assign(this.swiperEl.nativeElement, swiperParams);
    this.swiperEl.nativeElement.initialize();
  }
}
