import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pathway-complete',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="min-h-[60vh] flex items-center justify-center">
    <div class="bg-secondary/30 rounded-lg p-8 text-center max-w-xl shadow">
      <h2 class="text-3xl font-bold">🎉 Congratulations! You scored 92%</h2>
      <p class="mt-3 text-gray-700">Your application has been certified and your learning pathway is complete.</p>
      <div class="mt-6">
        <button class="px-5 py-2 rounded bg-primary text-white hover:bg-primary-variant" (click)="back()">Back to Dashboard</button>
      </div>
    </div>
  </div>
  `
})
export class PathwayCompleteComponent {
  constructor(private router: Router) {}
  back() {
    this.router.navigate(['/']);
  }
}
