// Centralized profile data for Adebara Ahmad portfolio
// Edit this file to update your personal details or profile image in one place.

export const PROFILE = {
  name: 'Adebara Ahmad',
  initials: 'AA',
  primaryRole: 'Frontend Developer',
  secondaryRole: 'Technology Instructor',
  fullRole: 'Frontend Developer | Technology Instructor',
  headline: 'Frontend Developer & Technology Instructor',
  greeting: "Hi, I'm Adebara Ahmad",
  
  // Path to your professional portrait in the public folder.
  // Place your image at public/profile.jpg to have it appear automatically!
  imageSrc: '/profile.jpg',
  
  shortBio:
    'I specialize in crafting modern, responsive web experiences with clean component architectures using React and Tailwind CSS, while empowering students and future developers through hands-on technology education.',

  description:
    'Dedicated to building high-performance, accessible web interfaces and mentoring aspiring technologists. Combining modern frontend engineering with interactive digital pedagogy.',

  cvUrl: '/docs/Adebara-Bamigbola-Ahmad-CV.docx',
  cvFileName: 'Adebara-Bamigbola-Ahmad-CV.docx',

  ctas: {
    primary: { label: 'View My Work', href: '#projects' },
    secondary: { label: 'Contact Me', href: '#contact' },
    cv: { label: 'Download CV' },
  },

  rolesList: [
    'Frontend Developer',
    'Technology Instructor',
    'Digital Educator',
    'React & UI Specialist',
  ],
};

export default PROFILE;
