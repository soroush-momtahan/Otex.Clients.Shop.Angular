import { Component } from '@angular/core';
import {CooperationForm} from '../../features/cooperation/components/cooperation-form/cooperation-form';

@Component({
  selector: 'app-test-page',
  imports: [
    CooperationForm
  ],
  templateUrl: './test-page.html',
  styleUrl: './test-page.css',
})
export class TestPage {}
