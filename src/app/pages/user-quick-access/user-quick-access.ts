import { Component } from '@angular/core';
import {Profile} from "../../features/profile/profile";

@Component({
  selector: 'app-user-quick-access',
  imports: [Profile],
  templateUrl: './user-quick-access.html',
  styleUrl: './user-quick-access.css',
})
export class UserQuickAccess {}
