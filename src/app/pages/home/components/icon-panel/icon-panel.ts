import { Component } from '@angular/core';
import {TextifyIcon} from '../../../../core/components/textify-icon/textify-icon';
import {RouterLink} from '@angular/router';
import {Cooperation} from '../../../cooperation/cooperation';

@Component({
  selector: 'app-icon-panel',
  imports: [TextifyIcon, RouterLink],
  templateUrl: './icon-panel.html',
  styleUrl: './icon-panel.css',
})
export class IconPanel {
  protected readonly Cooperation = Cooperation;
}
