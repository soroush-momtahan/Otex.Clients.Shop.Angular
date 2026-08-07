import { Component } from '@angular/core';
import {BottomNav} from "../../components/bottom-nav/bottom-nav";
import {ProfileSlidebar} from "../../../features/profile/profile-slidebar/profile-slidebar";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-panel',
  imports: [BottomNav, ProfileSlidebar, RouterOutlet],
  templateUrl: './user-panel.html',
  styleUrl: './user-panel.css',
})
export class UserPanel {}
