import {Component, inject, PLATFORM_ID, signal} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-hero-subtitle',
  imports: [],
  templateUrl: './hero-subtitle.html',
  styleUrl: './hero-subtitle.css',
})
export class HeroSubtitle {
  // کلماتی که میخواهیم بینشان جابجا شویم
  words = [
    'به خانواده بزرگ لنت اُتکس بپیوندید',
    'کیفیت، دقت و اعتماد؛ پایه‌های شراکت ما',
    'با هم برای فردایی ایمن‌تر و پر سودتر'
  ];

  // سیگنال برای متنی که در لحظه نمایش داده میشود (شروع با کلمه اول)
  displayedText = signal<string>(this.words[0]);

  private currentWordIndex = 0;
  private isDeleting = false;
  private platformId = inject(PLATFORM_ID);

  ngOnInit() {
    // فقط در مرورگر اجرا شود (برای جلوگیری از خطای SSR)
    if (isPlatformBrowser(this.platformId)) {
      // شروع انیمیشن با 2 ثانیه تاخیر اولیه
      setTimeout(() => this.typeEffect(), 2000);
    }
  }

  private typeEffect() {
    const currentWord = this.words[this.currentWordIndex];
    const text = this.displayedText();

    if (this.isDeleting) {
      // حالت پاک کردن (Backspace): یک حرف کم کن
      this.displayedText.set(currentWord.substring(0, text.length - 1));
    } else {
      // حالت تایپ کردن: یک حرف اضافه کن
      this.displayedText.set(currentWord.substring(0, text.length + 1));
    }

    // سرعت تایپ و پاک کردن (میلی ثانیه)
    let typingSpeed = this.isDeleting ? 100 : 150;

    // بررسی پایان تایپ یا پایان پاک کردن
    if (!this.isDeleting && this.displayedText() === currentWord) {
      // کلمه کامل نوشته شده: 2.5 ثانیه مکث کن بعد شروع به پاک کردن کن
      typingSpeed = 2500;
      this.isDeleting = true;
    } else if (this.isDeleting && this.displayedText() === '') {
      // کلمه کامل پاک شده: برو کلمه بعدی و نیم ثانیه مکث کن
      this.isDeleting = false;
      this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
      typingSpeed = 500;
    }

    setTimeout(() => this.typeEffect(), typingSpeed);
  }
}
