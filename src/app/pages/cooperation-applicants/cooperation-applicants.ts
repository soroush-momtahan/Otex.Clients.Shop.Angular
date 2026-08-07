import { Component } from '@angular/core';
import {CooperationList} from "../../features/cooperation/components/cooperation-list/cooperation-list";

@Component({
  selector: 'app-cooperation-applicants',
  imports: [CooperationList],
  templateUrl: './cooperation-applicants.html',
  styleUrl: './cooperation-applicants.css',
})
export class CooperationApplicants {}
