import { Component } from '@angular/core';
import { BottomNav } from '../../components/bottom-nav/bottom-nav';
import { Footer } from '../../components/footer/footer';
import { LoginHintModal } from '../../components/login-hint-modal/login-hint-modal';
import { NavBar } from '../../components/nav-bar/nav-bar';
import { RouterOutlet } from '@angular/router';
import { Profile } from '../../../features/profile/profile';
import { ProfileSlidebar } from '../../../features/profile/profile-slidebar/profile-slidebar';

@Component({
  selector: 'app-admin',
  imports: [BottomNav, RouterOutlet, ProfileSlidebar],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {}
