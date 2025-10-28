import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LearningModule } from '../../models/module.model';

@Component({
  selector: 'app-applicant-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="space-y-6">
      <div class="rounded-lg shadow p-6 bg-white">
        <h2 class="text-2xl font-semibold">My Skill Pathway for: {{ jobTitle }}</h2>
        <p class="text-sm text-gray-600 mt-1">Overall progress</p>

        <div class="mt-4">
          <div class="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div class="h-full bg-primary transition-all" [style.width.%]="progress()"></div>
          </div>
          <div class="flex justify-between text-sm mt-2">
            <span>{{ completedCount }} / {{ modules().length }} modules</span>
            <span>{{ progress() | number:'1.0-0' }}%</span>
          </div>
        </div>
      </div>

      <div class="grid gap-4">
        <div *ngFor="let m of modules()" class="rounded-lg shadow p-4 bg-white flex items-center justify-between">
          <div>
            <h3 class="font-medium">{{ m.title }}</h3>
            <p class="text-sm text-gray-600">{{ m.description }}</p>
          </div>
          <div class="flex items-center gap-3">
            <span *ngIf="m.completed" class="text-sm text-green-600">Completed</span>
            <button
              class="px-4 py-2 rounded text-white bg-primary hover:bg-primary-variant"
              (click)="startModule(m)">
              {{ m.completed ? 'Continue' : 'Start' }}
            </button>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ApplicantDashboardComponent {
  jobTitle = 'Pharmaceutical Technician';

  modules = signal<LearningModule[]>([
    { id: 'm1', title: 'Intro to Pharma', description: 'Overview of pharma industry', completed: false },
    { id: 'm2', title: 'Good Storage Practices', description: 'Storage rules and regs', completed: false },
    { id: 'm3', title: 'Storage Quiz', description: 'Short quiz on storage', completed: false }
  ]);

  constructor(private router: Router) {}

  get completedCount() {
    return this.modules().filter((m) => m.completed).length;
  }

  progress = computed(() => {
    const total = this.modules().length || 1;
    const done = this.modules().filter((m) => m.completed).length;
    return Math.round((done / total) * 100);
  });

  startModule(m: LearningModule) {
    // For demo: toggle completion when clicking start/continue
    const arr = this.modules().map((mm) => (mm.id === m.id ? { ...mm, completed: true } : mm));
    this.modules.set(arr);

    // If all modules are completed, redirect to complete page
    const allDone = this.modules().every((mod) => mod.completed);
    if (allDone) {
      // small timeout to allow UI update
      setTimeout(() => this.router.navigate(['/complete']), 300);
    }
  }
}