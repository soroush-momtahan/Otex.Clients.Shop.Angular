import {Component, computed, input, output, signal} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {FieldTree, form, FormField, required, submit} from '@angular/forms/signals';
import {CooperationFormModel} from '../../models/cooperation-form-model';

interface CooperationViewModel {
  cooperationForm: FieldTree<CooperationFormModel>,
  isDesktop: boolean;
  currentStep: number;
  totalStep: number;
}

@Component({
  selector: 'app-cooperation-form',
  imports: [
    ReactiveFormsModule,
    FormField
  ],
  templateUrl: './cooperation-form.html',
  styleUrl: './cooperation-form.css',
})
export class CooperationForm {
  cooperationFormModel = signal<CooperationFormModel>({
    province: '',
    city: '',
    activityType: '',
    description: ''
  });

  cooperationForm = form(this.cooperationFormModel, (fieldPath) => {
    required(fieldPath.province, { message: 'لطفاً استان خود را انتخاب کنید.' });
    required(fieldPath.city, { message: 'این فیلد نمی‌تواند خالی باشد.' });
    required(fieldPath.activityType, { message: 'لطفاً زمینه فعالیت مورد نظر خود را انتخاب کنید تا امکان ورود به مرحله بعد فراهم شود.' });
  });

  formSubmittedEvent = output<boolean>();

  isDesktop = input.required<boolean>(); // پیش‌فرض برای SSR
  currentStep = signal(1);
  totalSteps = 3;


  viewmodel = computed<CooperationViewModel>(() => {
    const cooperationForm:FieldTree<CooperationFormModel> = this.cooperationForm;
    const isDesktop = this.isDesktop();
    const currentStep = this.currentStep();
    const totalStep = this.totalSteps;
    return {
      cooperationForm,
      isDesktop,
      currentStep,
      totalStep
    }
  });


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

  onSubmit(event: Event) {
    event.preventDefault();

    submit(this.cooperationForm, async () => {
      // این بخش فقط زمانی اجرا می‌شود که کل فرم Valid باشد
      const formData = this.cooperationFormModel();
      console.log('Sending data to server:', formData);

      // شبیه‌سازی ارسال موفقیت‌آمیز
      this.formSubmittedEvent.emit(true);
    });
  }
}
