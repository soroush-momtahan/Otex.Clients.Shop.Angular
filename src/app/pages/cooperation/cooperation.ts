import {afterNextRender, afterRenderEffect, Component, HostListener, OnDestroy, OnInit, signal} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {HeroSubtitle} from './components/hero-subtitle/hero-subtitle';
import {form, FormField, required, submit} from '@angular/forms/signals';
import {HeroSection} from './components/hero-section/hero-section';
import {SubmittedCooperation} from './components/submitted-cooperation/submitted-cooperation';
import {CooperationBenefits} from './components/cooperation-benefits/cooperation-benefits';

interface CooperationData {
  province: string;
  city: string;
  activityType: string;
  description: string;
}

@Component({
  selector: 'app-cooperation',
  imports: [
    ReactiveFormsModule,
    FormField,
    HeroSection,
    SubmittedCooperation,
    CooperationBenefits
  ],
  templateUrl: './cooperation.html',
  styleUrl: './cooperation.css',
})
export class Cooperation {
  // 2. ساخت سیگنالِ مدل با مقادیر اولیه
  cooperationModel = signal<CooperationData>({
    province: '',
    city: '',
    activityType: '',
    description: ''
  });

  // 3. ایجاد فرم سیگنالی و تعریف قوانین اعتبارسنجی
  cooperationForm = form(this.cooperationModel, (fieldPath) => {
    required(fieldPath.province, { message: 'لطفاً استان خود را انتخاب کنید.' });
    required(fieldPath.city, { message: 'این فیلد نمی‌تواند خالی باشد.' });
    required(fieldPath.activityType, { message: 'لطفاً زمینه فعالیت مورد نظر خود را انتخاب کنید تا امکان ورود به مرحله بعد فراهم شود.' });
  });

  // وضعیت‌های مربوط به ظاهر صفحه
  isSubmitted = signal(false);
  isDesktop = signal(true); // پیش‌فرض برای SSR
  currentStep = signal(1);
  totalSteps = 3;

  constructor() {
    afterNextRender(() => {
      this.isDesktop.set(window.innerWidth >= 768);
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isDesktop.set(event.target.innerWidth >= 768);
  }

  // متدهای جابجایی بین مراحل (موبایل)
  nextStep() {
    if (this.currentStep() < this.totalSteps) {
      this.currentStep.update(s => s + 1);
    }
  }

  prevStep() {
    if (this.currentStep() > 1) {
      this.currentStep.update(s => s - 1);
    }
  }

  // 4. هندل کردن عملیات ثبت فرم با متد submit مخصوص Signal Forms
  onSubmit(event: Event) {
    event.preventDefault(); // جلوگیری از رفرش صفحه

    submit(this.cooperationForm, async () => {
      // این بخش فقط زمانی اجرا می‌شود که کل فرم Valid باشد
      const formData = this.cooperationModel();
      console.log('Sending data to server:', formData);

      // شبیه‌سازی ارسال موفقیت‌آمیز
      this.isSubmitted.set(true);
    });
  }
}
