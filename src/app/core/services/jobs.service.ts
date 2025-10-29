import { Injectable } from '@angular/core';

export interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  postedOn: string; // ISO date
  description: string;
  requirements: string[];
}

@Injectable({ providedIn: 'root' })
export class JobsService {
  private jobs: Job[] = [
    {
      id: 1,
      title: 'Pharmaceutical Technician',
      department: 'Manufacturing',
      location: 'Colombo, LK',
      type: 'Full-time',
      postedOn: '2025-10-01',
      description: 'Assist in manufacturing operations adhering to GMP and safety protocols.',
      requirements: [
        'Diploma in Pharmacy or related field',
        'Knowledge of GMP and GSP',
        'Attention to detail and safety-first mindset',
      ],
    },
    {
      id: 2,
      title: 'Quality Assurance Associate',
      department: 'Quality',
      location: 'Remote',
      type: 'Contract',
      postedOn: '2025-10-12',
      description: 'Support QA activities including documentation, audits, and batch record review.',
      requirements: [
        'BSc in Chemistry/Pharmacy or equivalent',
        'Understanding of 21 CFR Part 11 and Data Integrity',
        'Excellent documentation skills',
      ],
    },
    {
      id: 3,
      title: 'CSV Engineer (Computer System Validation)',
      department: 'IT/Systems',
      location: 'Kandy, LK',
      type: 'Full-time',
      postedOn: '2025-09-28',
      description: 'Execute validation plans and ensure GxP compliance for computerized systems.',
      requirements: [
        'Experience with CSV lifecycle and risk assessments',
        'Familiar with GAMP 5 guidelines',
        'Strong collaboration and communication skills',
      ],
    },
  ];

  getJobs(): Job[] {
    return [...this.jobs];
  }

  getJobById(id: number): Job | undefined {
    return this.jobs.find((j) => j.id === id);
  }
}
