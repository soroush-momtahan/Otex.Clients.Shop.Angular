import { Component } from '@angular/core';
import { Faq } from '../../core/components/faq/faq';

@Component({
  selector: 'app-question-answer',
  imports: [Faq],
  templateUrl: './question-answer.html',
  styleUrl: './question-answer.css',
})
export class QuestionAnswer {}
