import {Component} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { CooperationForm } from '../../features/cooperation/components/cooperation-form/cooperation-form';

@Component({
  selector: 'app-cooperation-with-us',
  imports: [ReactiveFormsModule, CooperationForm],
  templateUrl: './cooperation.html',
  styleUrl: './cooperation.css',
})
export class Cooperation {}
