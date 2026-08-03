import {inject, Injectable} from '@angular/core';
import { ProblemDetails } from '../../../core/models/errors/problem-details';
import { delay, Observable, of, throwError } from 'rxjs';
import { TypeOfActivity } from '../enums/type-of-activity';
import {HttpClient} from '@angular/common/http';

export interface CooperationData {
  firstName: string;
  lastName: string;
  mobile: string;
  province: string;
  city: string;
  typeOfActivity: TypeOfActivity | null;
  description: string;
}

@Injectable({ providedIn: 'root' })
export class CooperationService {
  // استخدام گارسونِ اینترنتی
  private readonly http = inject(HttpClient);

  // اگر Aspire پروکسیِ انگولار را به صورت خودکار هندل کرده باشد (که معمولاً میکند)،
  // فقط کافیست آدرس را اینطور بنویسی. در غیر اینصورت آن را از environment.ts می‌خوانیم.
  private readonly apiUrl = '/api/cooperation';

  submitForm(data: CooperationData): Observable<void> {
    // ارسال درخواست POST واقعی به سمت YARP Gateway
    const result = this.http.post<void>(this.apiUrl, data);
    return result;
  }
}
