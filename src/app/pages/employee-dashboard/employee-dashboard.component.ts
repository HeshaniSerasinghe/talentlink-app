import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Course {
  title: string;
  dueDate: string;
  progress: number;
}

interface CareerStage {
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-employee-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements AfterViewInit {
  loaded = false;
  employeeName = 'Nuwan Perera';
  today = new Date();

  mandatoryCourses: Course[] = [
    { title: 'GMP Compliance Training', dueDate: '2025-12-01', progress: 70 },
    { title: 'Good Storage Practices (GSP)', dueDate: '2025-12-15', progress: 30 },
    { title: '21 CFR Part 11 Compliance', dueDate: '2025-11-15', progress: 100 }
  ];

  careerPath: CareerStage[] = [
    { title: 'CSV Analyst', completed: true },
    { title: 'Validation Engineer', completed: true },
    { title: 'Senior CSV Specialist', completed: false },
    { title: 'QA Systems Lead', completed: false }
  ];

  announcements = [
    { message: 'System maintenance scheduled for Nov 10th, 9–11 AM', type: 'info' },
    { message: 'New module released: Pharmacovigilance Basics', type: 'success' },
    { message: 'Review Data Integrity (ALCOA+) policy updates by Nov 30th', type: 'warning' }
  ];

  get overallProgress(): number {
    const total = this.mandatoryCourses.reduce((acc, c) => acc + c.progress, 0);
    return Math.round(total / this.mandatoryCourses.length);
  }

  ngAfterViewInit(): void {
    // Trigger transitions after initial render
    setTimeout(() => (this.loaded = true), 0);
  }
}
