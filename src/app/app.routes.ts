import { Routes } from '@angular/router';
import { CourseLibraryComponent } from './pages/course-library/course-library.component';
import { MyLearningComponent } from './pages/my-learning/my-learning.component';
import { ApplicantLoginComponent } from './pages/applicant-login/applicant-login.component';
import { EmployeeLoginComponent } from './pages/employee-login/employee-login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/employee-login', pathMatch: 'full' },
  { path: 'course-library', component: CourseLibraryComponent },
  { path: 'my-learning', component: MyLearningComponent },
  { path: 'applicant-login', component: ApplicantLoginComponent },
  { path: 'employee-login', component: EmployeeLoginComponent },
];
