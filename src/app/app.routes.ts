import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import {Products} from './pages/products/products';
import {TestPage} from './pages/test-page/test-page';
import { ContactUs } from './pages/contact-us/contact-us';
import { QuestionAnswer } from './pages/question-answer/question-answer';
import { Happy } from './pages/happy/happy';
import { Shop } from './core/layouts/shop/shop';
import { Admin } from './core/layouts/admin/admin';
import { CooperationWithUs } from './pages/cooperation-with-us/cooperation-with-us';
import { CooperationApplicants } from './pages/cooperation-applicants/cooperation-applicants';
import { UserPanel } from './core/layouts/user-panel/user-panel';
import { UserQuickAccess } from './pages/user-quick-access/user-quick-access';

export const routes: Routes = [
  {
    path: '',
    component: Shop,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: Home },
      { path: 'products', component: Products },
      { path: 'contact-us', component: ContactUs },
      { path: 'faq', component: QuestionAnswer },
      { path: 'cooperation-with-us', component: CooperationWithUs },
      // می‌تونی redirect هم بذاری
      // { path: '', redirectTo: 'login', pathMatch: 'full' }
    ],
  },
  {
    path: 'user',
    component: UserPanel,
    children: [
      { path: '', redirectTo: 'panel', pathMatch: 'full' },
      { path: 'panel', component: UserQuickAccess },
    ],
  },
  {
    path: 'admin',
    component: Admin,
    children: [
      { path: '', redirectTo: 'panel', pathMatch: 'full' },
      { path: 'hero', component: TestPage },
      { path: 'happy', component: Happy },
      { path: 'cooperation-applicants', component: CooperationApplicants },
      // می‌تونی redirect هم بذاری
      // { path: '', redirectTo: 'login', pathMatch: 'full' }
    ],
  },

  { path: '**', redirectTo: 'home' },
];
