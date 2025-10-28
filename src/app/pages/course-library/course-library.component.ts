import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Course {
  id: number;
  title: string;
  description: string;
  skill: string;
  division: string;
  duration: string;
  image: string;
}

@Component({
  selector: 'app-course-library',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './course-library.component.html',
  styleUrls: ['./course-library.component.css']
})
export class CourseLibraryComponent {
  searchQuery: string = '';
  selectedSkill: string = 'all';
  selectedDivision: string = 'all';

  skills: string[] = ['All', 'Programming', 'Design', 'Management', 'Marketing', 'Data Science'];
  divisions: string[] = ['All', 'Engineering', 'Human Resources', 'Sales', 'Operations', 'Finance'];

  courses: Course[] = [
    {
      id: 1,
      title: 'Advanced Angular Development',
      description: 'Master Angular framework with hands-on projects and real-world applications.',
      skill: 'Programming',
      division: 'Engineering',
      duration: '6 weeks',
      image: 'https://via.placeholder.com/300x200/222831/DFD0B8?text=Angular'
    },
    {
      id: 2,
      title: 'UI/UX Design Fundamentals',
      description: 'Learn the principles of user interface and user experience design.',
      skill: 'Design',
      division: 'Engineering',
      duration: '4 weeks',
      image: 'https://via.placeholder.com/300x200/222831/DFD0B8?text=UI/UX'
    },
    {
      id: 3,
      title: 'Project Management Essentials',
      description: 'Develop essential project management skills for leading successful teams.',
      skill: 'Management',
      division: 'Operations',
      duration: '5 weeks',
      image: 'https://via.placeholder.com/300x200/222831/DFD0B8?text=PM'
    },
    {
      id: 4,
      title: 'Digital Marketing Strategy',
      description: 'Create and execute effective digital marketing campaigns.',
      skill: 'Marketing',
      division: 'Sales',
      duration: '4 weeks',
      image: 'https://via.placeholder.com/300x200/222831/DFD0B8?text=Marketing'
    },
    {
      id: 5,
      title: 'Data Analysis with Python',
      description: 'Learn data analysis techniques using Python and popular libraries.',
      skill: 'Data Science',
      division: 'Engineering',
      duration: '8 weeks',
      image: 'https://via.placeholder.com/300x200/222831/DFD0B8?text=Python'
    },
    {
      id: 6,
      title: 'Leadership Skills Development',
      description: 'Enhance your leadership capabilities and team management skills.',
      skill: 'Management',
      division: 'Human Resources',
      duration: '6 weeks',
      image: 'https://via.placeholder.com/300x200/222831/DFD0B8?text=Leadership'
    }
  ];

  get filteredCourses(): Course[] {
    return this.courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesSkill = this.selectedSkill === 'all' || course.skill === this.selectedSkill;
      const matchesDivision = this.selectedDivision === 'all' || course.division === this.selectedDivision;
      
      return matchesSearch && matchesSkill && matchesDivision;
    });
  }

  enrollCourse(courseId: number) {
    console.log('Enrolling in course:', courseId);
    // Implement enrollment logic here
    alert('Successfully enrolled in the course!');
  }

  resetFilters() {
    this.searchQuery = '';
    this.selectedSkill = 'all';
    this.selectedDivision = 'all';
  }
}
