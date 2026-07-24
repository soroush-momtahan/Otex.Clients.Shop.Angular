import { Component } from '@angular/core';
import { HeroSection } from '../home/components/hero-section/hero-section';

@Component({
  selector: 'app-test-page',
  imports: [HeroSection],
  templateUrl: './test-page.html',
  styleUrl: './test-page.css',
})
export class TestPage {}
