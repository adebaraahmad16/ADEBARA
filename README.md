# Adebara Ahmad — Personal Portfolio

**Frontend Developer | Technology Instructor | Digital Educator**

A premium, modern, fully responsive personal portfolio website built with React and Tailwind CSS.

> "I don't just build websites. I build experiences, teach technology, and turn ideas into digital solutions."
>
> **BUILD. TEACH. INNOVATE.**

---

## Overview

This portfolio presents my work as a frontend developer and technology instructor. It showcases my professional experience, personal and collaborative projects, teaching and mentorship work, student achievements, technical skills, and certifications.

The design direction is **Luxury + Technology + Professional + Modern + Creative**, built around a deep black background with dark green accents, gold highlights, and light typography.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React | Component architecture and UI logic |
| Tailwind CSS | All styling and responsive layout |
| JavaScript (ES6+) | Interactivity and animations |
| HTML5 | Semantic markup within JSX |

### Styling Rule

**No external CSS stylesheets are used in this project.**

There is no `style.css`, `App.css`, or any other separate stylesheet. All styling is handled through:

- Tailwind CSS utility classes written directly in JSX
- Inline or component-scoped CSS only where absolutely necessary (e.g. keyframe animations)

---

## Features

- Animated hero section with rotating typing text
- Scroll reveal and fade-in animations
- Smooth hover and transition effects
- Responsive navigation with an animated mobile hamburger menu
- Timeline-style professional experience section
- Project showcase with hover interactions
- Dedicated teaching and mentorship section
- Student achievements and competition results
- Contact form (Name, Email, Subject, Message)
- Back-to-top button
- Fully responsive across mobile, tablet, laptop, and desktop

---

## Sections

1. **Hero** — Name, title, intro, typing animation, CTA buttons, availability status
2. **About** — Background across technology, education, agriculture, entrepreneurship, and digital innovation
3. **Services** — Frontend Development, UI Development, Technology Education, Digital Product Development
4. **Experience** — KidsTech Africa, Flora School, Kwara Coding & Digital Literacy Programme (2024 and 2026)
5. **Projects** — PoultryPro, TradeHub, Free Learning Hub, NOBELLE
6. **Teaching & Mentorship** — Training and student mentorship experience
7. **Achievements** — Student competition results and programme outcomes
8. **Student Projects** — Virtual Doctor Bot, Rural Health Map (mentorship experience)
9. **Skills** — Frontend and professional skills
10. **Certifications** — Frontend Web Development (2022), Web Development Using React and Tailwind CSS (2026)
11. **Contact** — Professional contact section and form
12. **Footer** — Brand summary, links, copyright

---

## Component Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Teaching.jsx
│   ├── Achievements.jsx
│   ├── Skills.jsx
│   ├── Certifications.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.jsx
└── main.jsx
```

Components are kept reusable, organised, and easy to maintain.

---

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repository-url>

# Move into the project directory
cd <project-folder>

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

The site will run locally at the address shown in your terminal.

### Production Build

```bash
npm run build
```

### Preview the Build

```bash
npm run preview
```

---

## Customisation

Contact details, professional links (GitHub, LinkedIn), and the CV download file use placeholders. Replace them with real values before deploying:

- Email address
- WhatsApp number
- GitHub profile URL
- LinkedIn profile URL
- CV file path

---

## Deployment

The project builds to static files and can be deployed to any static host, including:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

---

## Author

**Adebara Ahmad**
Frontend Developer | Technology Instructor | Digital Educator

Languages: English, Yoruba, Hausa

---

## License

© 2026 Adebara Ahmad. All Rights Reserved.
