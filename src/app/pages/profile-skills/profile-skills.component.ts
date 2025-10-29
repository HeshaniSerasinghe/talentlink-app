import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-skills.component.html',
  styleUrls: ['./profile-skills.component.css']
})
export class ProfileSkillsComponent implements AfterViewInit {
  loaded = false;
  employee = {
    name: 'Nuwan Perera',
    title: 'Systems Validation Engineer',
    department: 'Quality Systems',
    photo: 'https://img.icons8.com/?size=1200&id=20749&format=png',
  };

  certifications = [
    { name: 'CSV Practitioner (Computer System Validation)', issuer: 'ISPE/GAMP', badge: '💻', year: 2025 },
    { name: 'GAMP 5 Fundamentals', issuer: 'ISPE', badge: '📘', year: 2024 },
    { name: '21 CFR Part 11 Compliance', issuer: 'FDA', badge: '📜', year: 2024 },
    { name: 'Data Integrity (ALCOA+)', issuer: 'ISPE', badge: '🔐', year: 2025 },
  ];

  skills = [
    { skill: 'GAMP 5', level: 'Advanced', progress: 90 },
    { skill: '21 CFR Part 11', level: 'Advanced', progress: 85 },
    { skill: 'Data Integrity (ALCOA+)', level: 'Advanced', progress: 80 },
    { skill: 'Risk Assessment (FMEA)', level: 'Intermediate', progress: 75 },
    { skill: 'LIMS Administration', level: 'Intermediate', progress: 70 },
    { skill: 'SOP Authoring', level: 'Intermediate', progress: 65 },
  ];

  ngAfterViewInit(): void {
    setTimeout(() => (this.loaded = true), 0);
  }
}
