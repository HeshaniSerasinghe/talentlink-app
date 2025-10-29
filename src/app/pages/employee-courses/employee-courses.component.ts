import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Course {
  title: string;
  category: string;
  progress: number;
  due?: string;
}

@Component({
  selector: 'app-employee-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-courses.component.html',
  styleUrls: ['./employee-courses.component.css']
})
export class EmployeeCoursesComponent {
  filter = 'all';
  courses: Course[] = [
    { title: 'GMP Compliance Training', category: 'Compliance', progress: 70, due: '2025-12-01' },
    { title: 'Good Storage Practices (GSP)', category: 'Pharmaceutical', progress: 30, due: '2025-11-30' },
    { title: '21 CFR Part 11 Compliance', category: 'Compliance', progress: 100 },
    { title: 'CSV: Computer System Validation', category: 'Systems', progress: 0 },
  ];

  get filtered(): Course[] {
    const f = this.filter;
    if (f === 'all') return this.courses;
    if (f === 'in-progress') return this.courses.filter(c => c.progress > 0 && c.progress < 100);
    if (f === 'completed') return this.courses.filter(c => c.progress === 100);
    return this.courses;
  }

  setFilter(f: string) {
    this.filter = f;
  }
}
