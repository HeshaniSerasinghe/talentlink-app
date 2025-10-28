import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Course {
  id: number;
  title: string;
  description: string;
  progress: number;
  instructor: string;
  nextLesson: string;
  enrolledDate: string;
  completedDate?: string;
  image: string;
}

@Component({
  selector: 'app-my-learning',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-learning.component.html',
  styleUrls: ['./my-learning.component.css']
})
export class MyLearningComponent {
  activeTab: 'in-progress' | 'completed' = 'in-progress';

  inProgressCourses: Course[] = [
    {
      id: 1,
      title: 'Advanced Angular Development',
      description: 'Master Angular framework with hands-on projects and real-world applications.',
      progress: 65,
      instructor: 'Sarah Johnson',
      nextLesson: 'Angular Services and Dependency Injection',
      enrolledDate: '2025-09-15',
      image: 'https://via.placeholder.com/300x200/222831/DFD0B8?text=Angular'
    },
    {
      id: 2,
      title: 'Data Analysis with Python',
      description: 'Learn data analysis techniques using Python and popular libraries.',
      progress: 40,
      instructor: 'Michael Chen',
      nextLesson: 'Pandas Data Manipulation',
      enrolledDate: '2025-10-01',
      image: 'https://via.placeholder.com/300x200/222831/DFD0B8?text=Python'
    },
    {
      id: 3,
      title: 'Project Management Essentials',
      description: 'Develop essential project management skills for leading successful teams.',
      progress: 80,
      instructor: 'Emily Rodriguez',
      nextLesson: 'Risk Management Strategies',
      enrolledDate: '2025-08-20',
      image: 'https://via.placeholder.com/300x200/222831/DFD0B8?text=PM'
    }
  ];

  completedCourses: Course[] = [
    {
      id: 4,
      title: 'UI/UX Design Fundamentals',
      description: 'Learn the principles of user interface and user experience design.',
      progress: 100,
      instructor: 'David Park',
      nextLesson: 'Course Completed',
      enrolledDate: '2025-07-10',
      completedDate: '2025-09-05',
      image: 'https://via.placeholder.com/300x200/222831/DFD0B8?text=UI/UX'
    },
    {
      id: 5,
      title: 'Digital Marketing Strategy',
      description: 'Create and execute effective digital marketing campaigns.',
      progress: 100,
      instructor: 'Lisa Thompson',
      nextLesson: 'Course Completed',
      enrolledDate: '2025-06-15',
      completedDate: '2025-08-20',
      image: 'https://via.placeholder.com/300x200/222831/DFD0B8?text=Marketing'
    }
  ];

  setActiveTab(tab: 'in-progress' | 'completed') {
    this.activeTab = tab;
  }

  continueCourse(courseId: number) {
    console.log('Continue course:', courseId);
    // Implement continue course logic
  }

  viewCertificate(courseId: number) {
    console.log('View certificate for course:', courseId);
    // Implement view certificate logic
    alert('Certificate viewer will open here!');
  }

  getProgressColor(progress: number): string {
    if (progress < 30) return 'bg-error';
    if (progress < 70) return 'bg-yellow-500';
    return 'bg-green-500';
  }
}
