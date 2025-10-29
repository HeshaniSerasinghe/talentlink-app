import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface LearningItem {
  title: string;
  type: 'course' | 'quiz' | 'module';
  status: 'in-progress' | 'completed' | 'recommended';
  progress?: number;
}

@Component({
  selector: 'app-employee-learning',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-learning.component.html',
  styleUrls: ['./employee-learning.component.css']
})
export class EmployeeLearningComponent implements AfterViewInit {
  loaded = false;

  inProgress: LearningItem[] = [
    { title: 'GMP Compliance Training', type: 'course', status: 'in-progress', progress: 45 },
    { title: 'Good Storage Practices (GSP)', type: 'course', status: 'in-progress', progress: 20 },
  ];

  completed: LearningItem[] = [
    { title: 'Introduction to Pharmaceutical Safety', type: 'course', status: 'completed' },
    { title: '21 CFR Part 11 Compliance', type: 'course', status: 'completed' },
  ];

  recommended: LearningItem[] = [
    { title: 'Pharmacovigilance Basics', type: 'course', status: 'recommended' },
    { title: 'CSV: Computer System Validation', type: 'course', status: 'recommended' },
  ];

  ngAfterViewInit(): void {
    // Defer to next tick so initial classes render before transition
    setTimeout(() => (this.loaded = true), 0);
  }
}
