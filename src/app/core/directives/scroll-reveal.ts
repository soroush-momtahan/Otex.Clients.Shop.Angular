import {afterNextRender, Directive, ElementRef, inject} from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
})
export class ScrollReveal {
  private el = inject(ElementRef);

  constructor() {
    // این بلاک فقط و فقط در محیط مرورگر اجرا می‌شود و به SSR آسیبی نمی‌زند
    afterNextRender(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // وقتی المان وارد صفحه شد، کلاس is-visible را به آن اضافه می‌کنیم
            entry.target.classList.add('is-visible');
            // قطع مانیتورینگ برای اینکه انیمیشن فقط یک‌بار اجرا شود
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1, // وقتی 10% از المان دیده شد انیمیشن اجرا شود
        rootMargin: '0px 0px -50px 0px'
      });

      observer.observe(this.el.nativeElement);
    });
  }
}
