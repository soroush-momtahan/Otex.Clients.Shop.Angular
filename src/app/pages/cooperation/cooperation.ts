import {Component} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HeroSection} from './components/hero-section/hero-section';
import {Cooperations} from '../../features/cooperation/components/cooperations/cooperations';

@Component({
  selector: 'app-cooperation',
  imports: [
    ReactiveFormsModule,
    HeroSection,
    Cooperations
  ],
  templateUrl: './cooperation.html',
  styleUrl: './cooperation.css',
})
export class Cooperation {


}
