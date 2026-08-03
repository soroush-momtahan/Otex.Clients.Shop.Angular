import { Component, signal } from '@angular/core';
import { Profile } from '../../features/profile/profile';
import { ProfileSlidebar } from '../../features/profile/profile-slidebar/profile-slidebar';

@Component({
  selector: 'app-test-page',
  imports: [Profile, ProfileSlidebar],
  templateUrl: './test-page.html',
  styleUrl: './test-page.css',
})
export class TestPage {
  hasActiveOrder = signal(true);
}
