import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavbarStateService {
  // وضعیت مخفی بودن کامل
  isHidden = signal<boolean>(false);

  // وضعیت بزرگ و باز بودن (Reachability/One UI)
  isExpanded = signal<boolean>(false);
}
