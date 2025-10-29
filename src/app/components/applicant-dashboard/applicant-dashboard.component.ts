import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LearningModule } from '../../models/module.model';

@Component({
  selector: 'app-applicant-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="max-w-5xl mx-auto px-4 py-8 space-y-8">
      <!-- Hero card with gradient header -->
      <div class="rounded-xl shadow-lg overflow-hidden border border-gray-100 bg-white/90 backdrop-blur">
        <div class="bg-gradient-to-r from-primary to-primary-variant text-white p-6">
          <div class="flex items-center gap-4">
            <div class="p-3 rounded-full bg-white/20">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div>
              <h2 class="text-3xl font-extrabold tracking-tight">My Skill Pathway</h2>
              <p class="text-white/90">{{ jobTitle }}</p>
            </div>
          </div>
        </div>

        <!-- Body -->
        <div class="p-6">
          <!-- Quick actions -->
          <div class="flex flex-wrap gap-3 mb-6">
            <button class="px-4 py-2 rounded-lg text-white bg-gradient-to-r from-primary to-primary-variant shadow-sm hover:shadow transition" (click)="goToModules()">Go to Modules</button>
            <button class="px-4 py-2 rounded-lg bg-secondary text-primary hover:bg-secondary/80 transition" (click)="goToQuiz()">Take Quiz</button>
            <button class="px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition" (click)="goToPathway()">View Pathway</button>
          </div>

          <div class="mb-8">
            <div class="flex justify-between items-center mb-2">
              <span class="text-sm font-medium text-gray-700">Overall Progress</span>
              <span class="text-sm font-semibold text-primary">{{ progress() | number:'1.0-0' }}%</span>
            </div>
            <div class="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
              <div 
                class="h-full rounded-full transition-all duration-500 ease-out bg-gradient-to-r from-primary to-primary-variant"
                [style.width.%]="progress()"
                [class.animate-pulse]="progress() === 100">
              </div>
            </div>
            <p class="text-xs text-gray-500 mt-2 text-right">
              <span>{{ completedCount }} of {{ modules().length }} modules completed</span>
              <span class="text-xs px-2 py-0.5 rounded-full" [class]="progress() === 100 ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'">
                {{ progress() === 100 ? 'Completed' : 'In Progress' }}
              </span>
            </p>
          </div>

          <!-- Next up -->
          <div class="mb-2" *ngIf="nextModule as next">
            <p class="text-sm text-gray-600">Next up: <span class="font-semibold">{{ next.title }}</span></p>
          </div>

          <div class="grid gap-4">
            <div *ngFor="let m of modules(); let i = index" 
                 class="relative rounded-lg border border-gray-100 bg-white p-6 flex items-center justify-between gap-4 transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5"
                 [class.animate-fade-in]="true"
                 [style.animation-delay]="i * 100 + 'ms'">
              <!-- Accent bar -->
              <div class="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary to-primary-variant rounded-l-lg"></div>

              <div class="pl-3 flex-1">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full flex items-center justify-center"
                       [class]="m.completed ? 'bg-green-100 text-green-600' : 'bg-primary/10 text-primary'">
                    <svg *ngIf="m.completed" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span *ngIf="!m.completed">{{ i + 1 }}</span>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-800">{{ m.title }}</h3>
                    <p class="text-sm text-gray-600">{{ m.description }}</p>
                  </div>
                </div>
              </div>
              <button
                class="px-6 py-2.5 rounded-full font-medium transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary/50"
                [class]="m.completed ? 'text-primary bg-primary/10 hover:bg-primary/20' : 'text-white bg-gradient-to-r from-primary to-primary-variant shadow-md hover:shadow-lg'"
                (click)="startModule(m)">
                {{ m.completed ? 'Continue' : 'Start' }}
              </button>
            </div>
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

  get nextModule() {
    return this.modules().find((m) => !m.completed) || null;
  }

  startModule(m: LearningModule) {
    // For demo: toggle completion when clicking start/continue
    const arr = this.modules().map((mm) => (mm.id === m.id ? { ...mm, completed: true } : mm));
    this.modules.set(arr);

    // If all modules are completed, redirect to complete page
    const allDone = this.modules().every((mod) => mod.completed);
    if (allDone) {
      // small timeout to allow UI update
      setTimeout(() => this.router.navigate(['/applicant/pathway']), 300);
    }
  }

  goToModules() {
    this.router.navigate(['/applicant/modules']);
  }

  goToQuiz() {
    this.router.navigate(['/applicant/quiz']);
  }

  goToPathway() {
    this.router.navigate(['/applicant/pathway']);
  }
}