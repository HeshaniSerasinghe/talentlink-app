import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pathway-complete',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section class="max-w-5xl mx-auto px-4 py-8 space-y-8">
    <!-- Summary card -->
    <div class="bg-white border border-gray-100 rounded-xl p-8 shadow transform hover:scale-[1.02] transition-transform">
      <div class="flex items-start justify-between gap-4 flex-wrap">
        <div class="flex items-center gap-3">
          <div class="text-3xl">🎯</div>
          <div>
            <h2 class="text-2xl font-bold text-gray-800">Your Pathway</h2>
            <p class="text-gray-600">Track your progress across modules</p>
          </div>
        </div>
        <div class="min-w-[220px]">
          <div class="flex items-center justify-between text-sm text-gray-700 mb-1">
            <span>Overall Progress</span>
            <span class="font-semibold text-primary">{{ overallProgress }}%</span>
          </div>
          <div class="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
            <div class="h-full bg-primary rounded-full transition-all" [style.width.%]="overallProgress"></div>
          </div>
          <p class="text-xs text-gray-500 mt-2">
            {{ completedCount }} of {{ items.length }} completed
          </p>
        </div>
      </div>

      <!-- Certificate banner -->
      <div class="mt-4" *ngIf="allCompleted; else keepGoing">
        <div class="rounded-lg bg-green-50 border border-green-200 p-4 flex items-center justify-between gap-3 transition-all hover:shadow-md">
          <div class="flex items-center gap-2 text-green-700">
            <span class="text-xl">🎉</span>
            <span class="font-semibold">Pathway complete! Your certificate is ready.</span>
          </div>
          <button class="px-4 py-2 rounded bg-primary text-white hover:bg-primary-variant" (click)="downloadCertificate('Pathway Certificate')">View your certificate</button>
        </div>
      </div>
      <ng-template #keepGoing>
        <div class="rounded-lg bg-amber-50 border border-amber-200 p-4 text-amber-800 transition-all hover:shadow-md">
          Keep going — complete all modules to unlock your pathway certificate.
        </div>
      </ng-template>
    </div>

    <!-- Items list -->
    <div class="grid gap-4">
      <div *ngFor="let it of items; index as i"
           class="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex items-center justify-between gap-4 transform hover:scale-[1.01] transition-all duration-300"
           [class.animate-fade-in]="true"
           [style.animation-delay]="i * 100 + 'ms'">
        <div class="flex items-start gap-4">
          <div class="w-10 h-10 rounded-full flex items-center justify-center"
               [class]="it.status === 'completed' ? 'bg-green-100 text-green-700' : it.status === 'partial' ? 'bg-amber-100 text-amber-700' : 'bg-primary/10 text-primary'">
            <span *ngIf="it.status !== 'completed'" class="text-sm font-semibold">{{ i + 1 }}</span>
            <svg *ngIf="it.status === 'completed'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h3 class="font-semibold text-gray-800">{{ it.title }}</h3>
            <p class="text-sm text-gray-600">{{ it.description }}</p>
            <div class="mt-2 flex items-center gap-2">
              <span class="text-xs px-2 py-0.5 rounded-full"
                    [class]="it.status === 'completed' ? 'bg-green-100 text-green-700' : it.status === 'partial' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'">
                {{ it.status === 'completed' ? 'Completed' : it.status === 'partial' ? 'Partially done' : 'In progress' }} • {{ it.progress }}%
              </span>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <button *ngIf="it.status === 'completed'" class="px-4 py-2 rounded bg-primary text-white hover:bg-primary-variant transition" (click)="downloadCertificate(it.title)">View Certificate</button>
          <button *ngIf="it.status === 'completed'" class="px-4 py-2 rounded bg-primary/10 text-primary hover:bg-primary/20 transition" (click)="review(it)">Review</button>
          <button *ngIf="it.status === 'in-progress'" class="px-4 py-2 rounded bg-primary text-white hover:bg-primary-variant transition" (click)="continue(it)">Continue</button>
          <button *ngIf="it.status === 'partial'" class="px-4 py-2 rounded bg-amber-600 text-white hover:bg-amber-700 transition" (click)="continue(it)">Resume</button>
        </div>
      </div>
    </div>

    <!-- Footer actions -->
    <div class="flex flex-wrap items-center justify-center gap-3">
      <button class="px-5 py-2 rounded-lg bg-primary text-white hover:bg-primary-variant transition" (click)="back()">Back to Dashboard</button>
      <button class="px-5 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition" (click)="goToModules()">Go to Modules</button>
    </div>
  </section>
  `
})
export class PathwayCompleteComponent {
  constructor(private router: Router) {}
  // Demo data: completed, partial, and in-progress examples
  items: Array<{ title: string; description: string; status: 'completed' | 'partial' | 'in-progress'; progress: number; kind: 'module' | 'quiz' }>
    = [
      { title: 'Intro to Pharma', description: 'Overview of pharma industry', status: 'completed', progress: 100, kind: 'module' },
      { title: 'Good Storage Practices', description: 'Storage rules and regulations', status: 'partial', progress: 60, kind: 'module' },
      { title: 'Storage Quiz', description: 'Short quiz on storage', status: 'in-progress', progress: 20, kind: 'quiz' },
    ];

  get completedCount() {
    return this.items.filter((x) => x.status === 'completed').length;
  }

  get overallProgress() {
    const total = this.items.length || 1;
    const sum = this.items.reduce((acc, it) => acc + it.progress, 0);
    return Math.round(sum / total);
  }

  get allCompleted() {
    return this.items.every((x) => x.status === 'completed');
  }

  back() {
    this.router.navigate(['/applicant/dashboard']);
  }
  goToModules() {
    this.router.navigate(['/applicant/modules']);
  }
  review(it: { kind: 'module' | 'quiz' }) {
    // For demo, modules -> /modules, quiz -> /quiz
    if (it.kind === 'quiz') {
      this.router.navigate(['/applicant/quiz']);
    } else {
      this.router.navigate(['/applicant/modules']);
    }
  }
  continue(it: { kind: 'module' | 'quiz' }) {
    this.review(it);
  }
  downloadCertificate(title = 'TalentLink Certificate') {
    const blob = new Blob([
      `${title}\nName: Applicant User\nDate: ${new Date().toLocaleDateString()}`
    ], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title.replace(/\s+/g, '-')}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }
}
