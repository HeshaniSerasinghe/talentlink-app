import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminService } from '../../admin/services/admin.service';

@Component({
	selector: 'app-applicant-sidebar',
	standalone: true,
	imports: [CommonModule, RouterModule],
	templateUrl: './applicant-sidebar.component.html',
	styleUrl: './applicant-sidebar.component.css',
})
export class ApplicantSidebarComponent {
	@Output() sidebarToggled = new EventEmitter<boolean>();
	isSidebarCollapsed = false;
	private adminService = inject(AdminService);

	menuItems = [
		{ icon: 'home', label: 'Dashboard', route: '/applicant/dashboard', active: true },
		{ icon: 'book', label: 'Modules', route: '/applicant/modules', active: true },
		{ icon: 'quiz', label: 'Quiz', route: '/applicant/quiz', active: false },
		{ icon: 'path', label: 'Pathway', route: '/applicant/pathway', active: false },
		{ icon: 'briefcase', label: 'Jobs', route: '/applicant/jobs', active: false },
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
			book: 'M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c-1.1-.9-2-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z',
				quiz: 'M12 2a10 10 0 100 20 10 10 0 000-20zm0 15h-1v-2h2v2h-1zm1.07-7.75l-.9.92c-.5.5-.82 1.04-.97 1.83-.05.27-.08.45-.1.75H10v-.5c.03-.58.2-1.12.5-1.62.19-.31.44-.59.77-.92l1.2-1.2c.37-.37.56-.86.56-1.41 0-1.1-.9-2-2-2-1.05 0-1.91.82-2 .86l-.72-.69C8.07 3.34 9.03 2.5 10.5 2.5c1.93 0 3.5 1.57 3.5 3.5 0 .86-.34 1.64-.93 2.25z',
				path: 'M12 3c-4.97 0-9 4.03-9 9 0 3.87 2.45 7.16 5.86 8.41.43.08.59-.19.59-.42 0-.2-.01-.73-.01-1.43-2.38.52-2.88-1.02-2.88-1.02-.39-.99-.96-1.25-.96-1.25-.78-.54.06-.53.06-.53.86.06 1.32.88 1.32.88.77 1.32 2.02.94 2.51.72.08-.56.3-.94.54-1.16-1.9-.22-3.9-.95-3.9-4.24 0-.94.34-1.71.89-2.31-.09-.22-.39-1.12.08-2.33 0 0 .72-.23 2.36.88.69-.19 1.42-.29 2.15-.29s1.46.1 2.15.29c1.64-1.11 2.36-.88 2.36-.88.47 1.21.17 2.11.08 2.33.55.6.89 1.37.89 2.31 0 3.3-2 4.01-3.91 4.23.31.27.58.82.58 1.65 0 1.19-.01 2.15-.01 2.44 0 .23.15.5.6.41C18.55 19.15 21 15.87 21 12c0-4.97-4.03-9-9-9z',
				briefcase: 'M10 3h4a2 2 0 0 1 2 2v1h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2V5a2 2 0 0 1 2-2zm0 3V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4z'
		};
		return icons[icon] || icons['book'];
	}
}
