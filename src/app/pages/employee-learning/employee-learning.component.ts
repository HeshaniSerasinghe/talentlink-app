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
    { title: 'Advanced Angular', type: 'course', status: 'in-progress', progress: 45 },
    { title: 'Data Privacy & Security', type: 'course', status: 'in-progress', progress: 20 },
  ];

  completed: LearningItem[] = [
    { title: 'Workplace Safety', type: 'course', status: 'completed' },
    { title: 'Code of Conduct', type: 'course', status: 'completed' },
  ];

  recommended: LearningItem[] = [
    { title: 'Time Management', type: 'course', status: 'recommended' },
    { title: 'Effective Communication', type: 'course', status: 'recommended' },
  ];

  ngAfterViewInit(): void {
    // Defer to next tick so initial classes render before transition
    setTimeout(() => (this.loaded = true), 0);
  }
}
