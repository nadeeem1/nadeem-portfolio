export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'HTML/CSS' | 'JavaScript' | 'React';
  tagline: string;
  problem: string;
  features: string[];
  tech: string[];
  challenges: string;
  solution: string;
  live?: string;
  github?: string;
  accent: string;
}

export const projects: Project[] = [
  {
    id: '01',
    slug: 'volt-energy',
    title: 'VOLT Energy',
    category: 'JavaScript',
    tagline: 'Product landing page for an energy-drink brand, built with vanilla JavaScript.',
    problem:
      'Beverage brands need a fast, bold landing page that sells a single product without the overhead of a framework.',
    features: [
      'Product showcase with interactive flavor switcher',
      'Scroll-triggered reveal animations written in vanilla JS',
      'Fully responsive layout, mobile-first',
      'Zero dependencies — pure HTML, CSS and JavaScript',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript (DOM APIs)'],
    challenges:
      'Keeping the interactions smooth and the bundle at zero-KB-of-framework meant hand-rolling the animation and state logic that a library would normally provide.',
    solution:
      'Built a small internal event system around data attributes, so every interactive section reads its own configuration straight from the markup.',
    live: '#',
    github: '#',
    accent: '#FF8A3D',
  },
  {
    id: '02',
    slug: 'gym-website',
    title: 'Pulse Fitness',
    category: 'JavaScript',
    tagline: 'Multi-section gym and fitness studio website with a dynamic class schedule.',
    problem:
      'Local gyms need a site that presents trainers, class schedules and pricing clearly enough to convert a visitor into a sign-up.',
    features: [
      'Class schedule rendered from a JS array of objects with .forEach',
      'Trainer roster and pricing tiers built as reusable render functions',
      'Mobile navigation with an accessible hamburger menu',
      'Smooth-scroll section navigation',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    challenges:
      'Avoiding repeated markup for trainers, classes and pricing cards while keeping the code readable without a framework.',
    solution:
      'Modeled every repeating section as an array of plain objects and a single render function per section, so adding a trainer or class is a one-line data change.',
    live: '#',
    github: '#',
    accent: '#3556FF',
  },
  {
    id: '03',
    slug: 'task-manager',
    title: 'Task Manager',
    category: 'JavaScript',
    tagline: 'A persistent to-do application with full CRUD and local storage.',
    problem:
      'Most to-do demos lose your data on refresh — this one had to actually keep it.',
    features: [
      'Create, edit, complete and delete tasks',
      'State persisted to localStorage on every change',
      'Filtering by status: all / active / completed',
      'Keyboard-friendly form and list interactions',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Web Storage API'],
    challenges:
      'Keeping the in-memory state and localStorage in sync on every action without introducing bugs on refresh or empty state.',
    solution:
      'Centralized every mutation through one save() function that always writes the full task list back to storage right after the DOM update.',
    live: '#',
    github: '#',
    accent: '#3556FF',
  },
  {
    id: '04',
    slug: 'nordic-home',
    title: 'Nordic Home',
    category: 'React',
    tagline: 'Luxury Scandinavian furniture storefront concept, built with React and TypeScript.',
    problem:
      'Furniture brands need an e-commerce front end that feels as considered as the products themselves — quiet, spacious, image-led.',
    features: [
      'Component-driven product catalog with a reusable ProductCard',
      'Animated hero and section reveals with Framer Motion',
      'Client-side routing between collections and product views',
      'Data fetching layer scaffolded with TanStack Query',
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Router', 'TanStack Query'],
    challenges:
      'Translating a print-like, generously-spaced brand feel into a componentized system without it turning generic.',
    solution:
      'Built a small set of layout primitives (Section, Grid, ProductCard) so every page composes from the same disciplined spacing scale.',
    live: '#',
    github: '#',
    accent: '#3556FF',
  },
];

export const categories = ['All', 'HTML/CSS', 'JavaScript', 'React'] as const;
