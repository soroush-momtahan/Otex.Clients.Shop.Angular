import {afterNextRender, afterRenderEffect, Component, HostListener, signal} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {HeroSection} from './components/hero-section/hero-section';
import {SubmittedCooperation} from './components/submitted-cooperation/submitted-cooperation';
import {CooperationBenefits} from './components/cooperation-benefits/cooperation-benefits';
import {CooperationForm} from '../../features/cooperation/components/cooperation-form/cooperation-form';

@Component({
  selector: 'app-cooperation',
  imports: [
    ReactiveFormsModule,
    HeroSection,
    SubmittedCooperation,
    CooperationBenefits,
    CooperationForm
  ],
  templateUrl: './cooperation.html',
  styleUrl: './cooperation.css',
})
export class Cooperation {

  isSubmitted = signal(false);
  isDesktop = signal(true);

  constructor() {
    afterNextRender(() => {
      this.isDesktop.set(window.innerWidth >= 768);
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isDesktop.set(event.target.innerWidth >= 768);
  }
}
