import { Routes } from '@angular/router';
import { ApplicantDashboardComponent } from './components/applicant-dashboard/applicant-dashboard.component';
import { PathwayCompleteComponent } from './components/pathway-complete/pathway-complete.component';

export const routes: Routes = [
	{ path: '', title: 'Applicant Dashboard', component: ApplicantDashboardComponent },
	{ path: 'complete', title: 'Pathway Complete', component: PathwayCompleteComponent },
	{ path: '**', redirectTo: '' }
];
