// تعریف ساختار میز هوشمند
import { ProblemDetails } from '../../../core/models/errors/problem-details';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { computed, inject } from '@angular/core';
import { CooperationData, CooperationService } from '../services/cooperation.service';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { catchError, EMPTY, pipe, switchMap, tap } from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';

type CooperationState = {
  currentStep: number;
  showStepErrors: boolean;
  isSubmitting: boolean;
  serverError: ProblemDetails | null;
};

const initialState: CooperationState = {
  currentStep: 1,
  showStepErrors: false,
  isSubmitting: false,
  serverError: null,
};

export const CooperationStore = signalStore(
  withState(initialState),

  withComputed((store) => ({
    // ماشین حساب هوشمند ما درصد پیشرفت را حساب می‌کند
    progressPercentage: computed(() => {
      if (store.currentStep() === 5) return 100;
      return ((store.currentStep() - 1) / 3) * 100;
    }),
  })),

  withMethods((store, cooperationService = inject(CooperationService)) => ({
    // متدهای مربوط به مدیریت مراحل (UI State)
    setStepErrorsVisibility(show: boolean) {
      patchState(store, { showStepErrors: show });
    },

    nextStep() {
      patchState(store, (state) => ({
        currentStep: state.currentStep < 5 ? state.currentStep + 1 : state.currentStep,
        showStepErrors: false,
        serverError: null,
      }));
    },

    prevStep() {
      patchState(store, (state) => ({
        currentStep: state.currentStep > 1 ? state.currentStep - 1 : state.currentStep,
        showStepErrors: false,
        serverError: null,
      }));
    },

    // مهم‌ترین بخش: ارسال اطلاعات به سرور با rxMethod
    // این متد مثل یک گارسون حرفه‌ای عمل میکند و جلوی کلیک‌های تکراری را میگیرد
    submit: rxMethod<CooperationData>(
      pipe(
        // ۱. قبل از ارسال: وضعیت لودینگ روشن، ارورها پاک
        tap(() => patchState(store, { isSubmitting: true, serverError: null })),

        // ۲. ارسال به سرور
        switchMap((formData) =>
          cooperationService.submitForm(formData).pipe(
            // ۳. موفقیت: رفتن به مرحله ۵ (تشکر) و خاموش کردن لودینگ
            tap(() => patchState(store, { currentStep: 5, isSubmitting: false })),

            // ۴. شکست: گرفتن خطای ProblemDetails از سرور
            catchError((err: HttpErrorResponse) => {
              const problem: ProblemDetails = err.error?.type ? err.error : {
                type: 'NetworkError',
                title: 'خطای ارتباط با سرور',
                status: err.status || 500,
                detail: 'سرور در دسترس نیست یا خطای شبکه‌ای رخ داده است.',
                traceId: 'unknown'
              };
              patchState(store, { serverError: problem, isSubmitting: false });
              return EMPTY; // پایان دادن به جریان خطا بدون کرش کردن برنامه
            }),
          ),
        ),
      ),
    ),
  })),
);
