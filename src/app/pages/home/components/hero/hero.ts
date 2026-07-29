import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {}
