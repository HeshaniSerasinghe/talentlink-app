import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { JobsService, Job } from '../../core/services/jobs.service';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent {
  job?: Job;

  constructor(private route: ActivatedRoute, private jobsService: JobsService) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.job = this.jobsService.getJobById(id);
  }
}
