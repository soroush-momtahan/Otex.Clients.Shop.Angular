import { Component } from '@angular/core';
import {ScrollReveal} from '../../../../core/directives/scroll-reveal';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-feature-scroll-reveal',
  imports: [ScrollReveal, NgOptimizedImage],
  templateUrl: './feature-scroll-reveal.html',
  styleUrl: './feature-scroll-reveal.css',
})
export class FeatureScrollReveal {}
