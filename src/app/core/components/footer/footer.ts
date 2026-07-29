import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  // year = signal('');
  // constructor() {
  //   const now = new Date();
  //   this.year.set(new Intl.DateTimeFormat('fa-IR-u-nu-latn', {
  //       year: 'numeric',
  //     }).format(now).toString())
  // }
}
