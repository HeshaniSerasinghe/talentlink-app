// src/app/applicant.routes.ts
import { Routes } from '@angular/router';
import { ApplicantLayoutComponent } from './layouts/applicant-layout/applicant-layout.component';
import { ModulePageComponent } from './components/module-page/module-page.component';
import { QuizPageComponent } from './components/quiz-page/quiz-page.component';
import { ApplicantDashboardComponent } from './components/applicant-dashboard/applicant-dashboard.component';
import { PathwayCompleteComponent } from './components/pathway-complete/pathway-complete.component';

export const routes: Routes = [
	{
		path: '',
		component: ApplicantLayoutComponent,
		children: [
				{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
				{ path: 'dashboard', component: ApplicantDashboardComponent },
			{ path: 'modules', component: ModulePageComponent },
			{ path: 'quiz', component: QuizPageComponent },
				{ path: 'pathway', component: PathwayCompleteComponent },
		],
	},
];
