import { afterNextRender, Component, computed, HostListener, inject, signal } from '@angular/core';
import { form, FormField, maxLength, minLength, pattern, required } from '@angular/forms/signals';
import { CooperationStore } from '../../store/cooperation.store';
import { TypeOfActivity } from '../../enums/type-of-activity';

@Component({
  selector: 'app-cooperation-with-us',
  imports: [FormField],
  providers: [CooperationStore],
  templateUrl: './cooperation-with-us.html',
  styleUrl: './cooperation-with-us.css',
})
export class CooperationWithUs {
  // استخدام مدیر میز هوشمند
  readonly store = inject(CooperationStore);

  protected readonly TypeOfActivity = TypeOfActivity;

  // اطلاعات فرم (تک‌منبع حقیقت برای فیلدها در سطح کامپوننت)
  // در Signal Forms بهترین کار این است که Model در خود کامپوننت بماند تا دوطرفه راحت بایند شود
  cooperationModel = signal({
    firstName: '',
    lastName: '',
    mobile: '',
    province: '',
    city: '',
    typeOfActivity: null as TypeOfActivity | null,
    description: '',
  });

  cooperationForm = form(this.cooperationModel, (path) => {
    // نام
    required(path.firstName, { message: 'وارد کردن نام الزامی است' });
    minLength(path.firstName, 2, { message: 'نام نباید کمتر از ۳ کاراکتر باشد' });
    maxLength(path.firstName, 100, { message: 'نام نباید بیشتر از ۱۰۰ کاراکتر باشد' });

    // نام خانوادگی
    required(path.lastName, { message: 'وارد کردن نام خانوادگی الزامی است' });
    minLength(path.lastName, 3, { message: 'نام خانوادگی نباید کمتر از ۳ کاراکتر باشد' });
    maxLength(path.lastName, 100, { message: 'نام خانوادگی نباید بیشتر از ۱۰۰ کاراکتر باشد' });

    // استان
    required(path.province, { message: 'وارد کردن استان الزامی است' });

    // شهر
    required(path.city, { message: 'وارد کردن شهر الزامی است' });

    // شماره موبایل (دقیقاً ۱۱ رقم)
    required(path.mobile, { message: 'شماره موبایل الزامی است' });
    pattern(path.mobile, /^\d{11}$/, { message: 'شماره موبایل باید دقیقاً ۱۱ رقم باشد' });

    // حوزه فعالیت
    required(path.typeOfActivity, { message: 'لطفاً یک حوزه فعالیت را انتخاب کنید' });
  });

  // اعتبارسنجی‌ها
  step1Valid = computed(() => {
    const f = this.cooperationForm;
    return f.firstName().valid() && f.lastName().valid() && f.mobile().valid();
  });

  step2Valid = computed(() => {
    const f = this.cooperationForm;
    return f.province().valid() && f.city().valid();
  });

  step3Valid = computed(() => this.cooperationForm.typeOfActivity().valid());

  nextStep() {
    this.store.setStepErrorsVisibility(true);

    const step = this.store.currentStep();
    if (step === 1 && !this.step1Valid()) return;
    if (step === 2 && !this.step2Valid()) return;
    if (step === 3 && !this.step3Valid()) return;

    this.store.nextStep(); // اگر همه چیز اوکی بود، به استور بگو بره مرحله بعد
  }

  prevStep() {
    this.store.prevStep();
  }

  selectActivity(activity: TypeOfActivity) {
    this.cooperationModel.update((m) => ({ ...m, typeOfActivity: activity }));
  }

  submitForm(event?: Event) {
    if (event) event.preventDefault();

    if (this.cooperationForm().invalid()) {
      // اینجا یک ارور موقت محلی ایجاد میکنیم چون هنوز به سرور نرفته
      return;
    }

    // استخراج دیتای نهایی و ارسال به متد Submit در Store
    const finalData = this.cooperationModel();
    this.store.submit(finalData);
  }
}
