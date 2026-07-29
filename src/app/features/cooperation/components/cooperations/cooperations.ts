import {afterNextRender, Component, HostListener, signal} from '@angular/core';
import {CooperationBenefits} from "../cooperation-benefits/cooperation-benefits";
import {CooperationForm} from "../cooperation-form/cooperation-form";
import {SubmittedCooperation} from "../submitted-cooperation/submitted-cooperation";

@Component({
  selector: 'app-cooperations',
    imports: [
        CooperationBenefits,
        CooperationForm,
        SubmittedCooperation
    ],
  templateUrl: './cooperations.html',
  styleUrl: './cooperations.css',
})
export class Cooperations {
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
