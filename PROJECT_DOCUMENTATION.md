# TalentLink App - Learning Management System

## 🎨 Design System

### Typography
- **Font**: Nunito (Google Fonts)
- **H1**: 32pt
- **H2**: 22pt  
- **H3**: 18pt
- **Body/Input**: 14pt

### Color Palette
- **Background**: #FFFFFF (White)
- **Primary**: #222831 (Dark Gray)
- **Primary Variant**: #393E46 (Darker Gray - for hover states)
- **Secondary**: #DFD0B8 (Beige)
- **Error**: #B00020 (Red)

## 📱 Implemented Pages

### 1. Open University (Course Library)
**Route**: `/course-library`

A comprehensive course catalog where employees can browse and enroll in courses.

**Features**:
- **Search Bar**: Search courses by title or description
- **Filters**: 
  - Filter by Skill (Programming, Design, Management, Marketing, Data Science)
  - Filter by Division (Engineering, HR, Sales, Operations, Finance)
- **Course Cards Grid**: Displays courses with:
  - Course image
  - Title and description
  - Skill tags, Division tags, Duration
  - Enroll button
- **Results Counter**: Shows number of courses found
- **Reset Filters**: Clear all filters with one click
- **Responsive Design**: Works on mobile, tablet, and desktop

### 2. My Learning Page
**Route**: `/my-learning`

Track and manage all enrolled courses with progress monitoring.

**Features**:
- **Two Tabs**:
  - **In Progress**: Shows active courses with progress bars
  - **Completed**: Shows finished courses with completion dates
- **Course Information**:
  - Course image and title
  - Instructor name
  - Progress percentage
  - Color-coded progress bars (red < 30%, yellow 30-70%, green > 70%)
  - Next lesson information
  - Enrollment and completion dates
- **Actions**:
  - Continue Learning button
  - View Details button
  - View Certificate button (for completed courses)
- **Empty States**: Helpful messages when no courses are found

### 3. Applicant Login
**Route**: `/applicant-login`

Secure login page for job applicants.

**Features**:
- Email and Password fields with validation
- Password visibility toggle
- Remember me checkbox
- Forgot Password link
- Link to Employee Login
- Sign up link
- Terms of Service and Privacy Policy links
- Error message display
- Form validation

### 4. Employee Login
**Route**: `/employee-login`

Secure login page for existing employees.

**Features**:
- Work Email and Password fields with validation
- Password visibility toggle
- Remember me checkbox
- Forgot Password link
- Link to Applicant Login
- Contact IT Support link
- Quick access information box
- Error message display
- Form validation

## 🧭 Navigation

A responsive navigation bar is included on all pages with:
- TalentLink branding/logo
- Links to Open University and My Learning
- Links to Applicant and Employee Login
- Mobile-responsive hamburger menu
- Active route highlighting

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open your browser and navigate to:
```
http://localhost:4200
```

### Available Routes

- `/` - Redirects to Employee Login (default)
- `/course-library` - Open University (Course Catalog)
- `/my-learning` - My Learning (Course Progress Tracking)
- `/applicant-login` - Applicant Login Page
- `/employee-login` - Employee Login Page

## 🛠️ Technology Stack

- **Framework**: Angular 20.3.0
- **Styling**: Tailwind CSS 3.4.4
- **Font**: Nunito (Google Fonts)
- **Language**: TypeScript 5.9.2
- **Build Tool**: Angular CLI with Vite

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   └── navbar/              # Navigation component
│   ├── pages/
│   │   ├── course-library/      # Open University page
│   │   ├── my-learning/         # My Learning page
│   │   ├── applicant-login/     # Applicant login page
│   │   └── employee-login/      # Employee login page
│   ├── app.ts                   # Main app component
│   ├── app.html                 # Main app template
│   ├── app.routes.ts            # Route configuration
│   └── app.config.ts            # App configuration
├── styles.css                   # Global styles with Nunito font
└── index.html                   # Main HTML file
```

## 🎯 Features Overview

### Course Library Features
- 6 sample courses with diverse topics
- Dynamic search and filtering
- Responsive grid layout
- Enroll functionality (placeholder for backend integration)

### My Learning Features
- 3 in-progress courses with varying completion percentages
- 2 completed courses
- Progress tracking with visual indicators
- Continue learning functionality

### Login Features
- Separate login flows for applicants and employees
- Email validation
- Password visibility toggle
- Remember me functionality
- Forgot password support

## 🔧 Customization

### Adding More Courses

Edit the `courses` array in `src/app/pages/course-library/course-library.component.ts`:

```typescript
courses: Course[] = [
  {
    id: 7,
    title: 'Your Course Title',
    description: 'Your course description',
    skill: 'Programming',
    division: 'Engineering',
    duration: '4 weeks',
    image: 'https://your-image-url.com/image.jpg'
  },
  // ... more courses
];
```

### Updating Color Scheme

Colors are defined in `tailwind.config.js`. Update the `colors` object:

```javascript
colors: {
  'primary': '#222831',
  'primary-variant': '#393E46',
  'secondary': '#DFD0B8',
  'background': '#FFFFFF',
  'error': '#B00020',
}
```

## 📝 Next Steps

To complete the implementation, you'll need to:

1. **Backend Integration**:
   - Connect login forms to authentication API
   - Implement actual course enrollment
   - Store and retrieve user progress

2. **Additional Features**:
   - User profile management
   - Course content viewer
   - Certificate generation
   - Email notifications
   - User dashboard

3. **Testing**:
   - Unit tests for components
   - Integration tests
   - E2E tests

4. **Deployment**:
   - Build for production: `npm run build`
   - Deploy to hosting service

## 📄 License

This project is part of the TalentLink Learning Management System.

---

**Note**: This implementation includes sample data. For production use, connect to a real backend API and database.
