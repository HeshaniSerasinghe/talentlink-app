import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminService } from '../../admin/services/admin.service';

@Component({
  selector: 'app-employee-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './employee-sidebar.component.html',
  styleUrl: './employee-sidebar.component.css',
})
export class EmployeeSidebarComponent {
  @Output() sidebarToggled = new EventEmitter<boolean>();
  isSidebarCollapsed = false;
  private adminService = inject(AdminService);

  menuItems = [
    { icon: 'home', label: 'Dashboard', route: '/employee/dashboard', active: true },
    { icon: 'user', label: 'Profile', route: '/employee/profile', active: false },
    { icon: 'modules', label: 'Modules', route: '/employee/modules', active: false },
    { icon: 'courses', label: 'Courses', route: '/employee/courses', active: false },
    { icon: 'learning', label: 'My Learning', route: '/employee/learning', active: false },
  ];

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
    this.sidebarToggled.emit(this.isSidebarCollapsed);
  }

  onLogout() {
    this.adminService.logout();
  }

  getIconPath(icon: string): string {
    const icons: Record<string, string> = {
      home: 'M3 10l9-7 9 7v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-5H9v5a2 2 0 0 1-2 2H3z',
      user: 'M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z',
      modules: 'M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z',
      courses: 'M4 6a2 2 0 012-2h12a2 2 0 012 2v11a1 1 0 01-1.447.894L12 15l-6.553 2.894A1 1 0 013 17V6a2 2 0 011-0z',
      learning: 'M12 3a9 9 0 100 18 9 9 0 000-18zm-1 5h2v5h-2V8zm1 8a1.5 1.5 0 110-3 1.5 1.5 0 010 3z',
    };
    return icons[icon] || icons['home'];
  }
}
