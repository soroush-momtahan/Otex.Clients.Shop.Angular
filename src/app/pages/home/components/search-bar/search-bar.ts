import {Component, input, model, signal} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  placeholder = input('جستجو...');
  inputValue = model('');
  isFocused = signal(false);

  clear() {
    this.inputValue.set('');
  }
}
