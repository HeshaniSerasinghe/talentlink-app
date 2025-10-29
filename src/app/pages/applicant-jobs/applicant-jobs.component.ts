import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JobsService, Job } from '../../core/services/jobs.service';

@Component({
  selector: 'app-applicant-jobs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './applicant-jobs.component.html',
  styleUrls: ['./applicant-jobs.component.css']
})
export class ApplicantJobsComponent {
  jobs: Job[] = [];

  constructor(private jobsService: JobsService) {
    this.jobs = this.jobsService.getJobs();
  }
}
