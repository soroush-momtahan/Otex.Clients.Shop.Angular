import { Component } from '@angular/core';
import {HeroSubtitle} from "../hero-subtitle/hero-subtitle";

@Component({
  selector: 'app-hero-section',
    imports: [
        HeroSubtitle
    ],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {}
