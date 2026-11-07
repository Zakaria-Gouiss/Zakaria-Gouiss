import engagementLiveImage from '../assets/engagementlive.jpg'
import gradioImage from '../assets/gradio.jpg'
import lyweekImage from '../assets/lyweek.jpg'

export const profile = {
  name: 'Zakaria Gouiss',
  email: 'zgouiss15@gmail.com',
  role: 'Software and Machine Learning Engineer',
  location: 'Greater Cincinnati Metropolitan Area',
  github: 'https://github.com/Zakaria-Gouiss/',
  linkedIn: 'https://linkedin.com/in/zakariagouiss',
}

export const navigation = [
  { number: '01', label: 'About', href: '#about' },
  { number: '02', label: 'Experience', href: '#experience' },
  { number: '03', label: 'Projects', href: '#projects' },
  { number: '04', label: 'Skills', href: '#skills' },
  { number: '05', label: 'Education', href: '#education' },
  { number: '06', label: 'Contact', href: '#contact' },
]

export const experience = [
  {
    number: '01',
    company: 'GE Aerospace',
    field: 'Commercial & Military Jet Engine Manufacturer',
    role: 'Cybersecurity Intern',
    period: 'Jun 2026 — Aug 2026',
    location: 'Evendale, OH',
    summary:
      'Worked within various IT and cybersecurity teams at GE Aerospace to leverage digital technologies to create innovative solutions to solve business problems.',
    achievements: [
      'Software engineer experience in translating stakeholder feedback into working web solutions via Agile software development using React, PostgreSQL, TypeScript, and Docker',
      'Collaborated on Operational Technology (OT) initiatives by analyzing data from multiple inventory sources to support network segmentation and cybersecurity objectives',
      'Supporting digital transformation initiatives by migrating projects into new reporting softwares to improve accessibility, visibility, and reporting for high-priority cybersecurity initiatives',
      'Worked directly on lean methodology teams as part of priority and committee responsibilities to maximize customer value while minimizing waste in accordance to the GE Aerospace behaviors'
    ],
    technologies: [
      
      'React & TypeScript',
      'PostgreSQL',
      'Project Management',
      'Cybersecurity',
      'LEAN Methodology',
      'Operational Technology'
    ],
  },
  {
    number: '02',
    company: 'Medpace',
    field: 'Clinical Research Organization',
    role: 'Network Engineer Intern',
    period: 'Jan 2026 — May 2026',
    location: 'Cincinnati, OH',
    summary:
      'Supported enterprise network, security, and data center infrastructure operations across production and lab environments.',
    achievements: [
      'Contributed to Arista POC environment setup, configuration validation, and connectivity testing, supporting the selection of a solution that was 33% more cost-efficient than the existing vendor',
      'Supported switch wipe and refresh operations as part of infrastructure lifecycle management, including as part of a new India-based location',
      'Developed Guardicore microsegmentation policy and engaged in validation and rule enforcement testing to prevent lateral movement ',
      'Worked on daily ServiceNow tickets and troubleshooting for secure web access, proxy, and policy enforcement issues to maintain the Zscaler zero-trust environment '
    ],
    technologies: [
      'Cisco Hardware/Software',
      'Secure Shell (SSH)',
      'ServiceNow',
      'Microsegmentation',
      'Zscaler Zero-Trust',
      'Microsoft Office 365'
    ],
  },
  
]

export const projects = [
  {
    title: 'Engagement.live',
    category: 'NKU Hackathon',
    description:
      'Collaborated on a campus app for NKU built during the 2026 NKU Community Hackathon, and awarded first place. The project combines campus navigation, parking and rec availability, schedule planning, event discovery, and admin tooling into a single app. ',
    technologies: ['Leaflet', 'Tailwind CSS', 'React with JavaScript', 'MongoDB', 'Node & Express', 'OpenStreetMap'],
    repositoryLabel: 'Check it out',
    link: 'https://pbierley.github.io/NKU-Community-Hackathon/',
    imageLink: engagementLiveImage
    
  },
  {
    title: 'LyWeek',
    category: 'Full-Stack Web Dev',
    description:
      'A designated weekly assignment tracker for college students. Allows user to create courses and assignments for each course for a designated semester, updating them and completing them each week.',
    technologies: [
      'JavaScript',
      'React',
      'Node.js / Express',
      'PostgreSQL',
      'HTML / CSS',
      'REST APIs'
    ],
    repositoryLabel: 'Try it yourself',
    link: 'https://lyweek.vercel.app',
    imageLink: lyweekImage
  },
  
  {
    title: 'CNN Clothing Classifier',
    category: 'Deep Learning',
    description:
      'An independently designed and trained custom convolutional neural network designed to accurately classify garments of clothing. Acheived 87% accuracy on a 25GB dataset of over 44,000 high-quality images.',
    technologies: ['TensorFlow', 'Pandas', 'Python', 'NumPy', 'Jupyter Notebooks', 'Keras', 'Matplotlib'],
    imageLink: gradioImage
  },
]

export const skillGroups = [
  {
    number: '01',
    name: 'Languages',
    label: 'Core',
    skills: ['Python', 'TypeScript', 'C', 'Java', 'C++', 'SQL', 'JavaScript'],
  },
  {
    number: '02',
    name: 'Backends & Storage',
    label: 'Persistence',
    skills: [
      'REST APIs',
      'Node.js',
      'PostgreSQL',
      'SQL Server',
      'Express',
      'CORS',
    ],
  },
  {
    number: '03',
    name: 'AI & ML',
    label: 'Inference',
    skills: [
      'Numpy / Pandas',
      'TensorFlow',
      'Scikit-Learn',
      'Agentic AI / LLMs',
      'Classification',
      'Regression'
    ],
  },
  {
    number: '04',
    name: 'Frontend Engineering',
    label: 'UI / UX',
    skills: ['React', 'CSS', 'HTML5', 'Vite', 'UI Design', 'Tailwind', 'JavaScript', 'ESLint'],
  },
  {
    number: '05',
    name: 'Cloud & DevOps',
    label: 'Infra',
    skills: [
      'Docker',
      'Git / GitHub',
      'CI/CD',
      'Ubuntu Linux',
      'Deployment'
    ],
  },
  {
     number: '06',
    name: 'IT Infrastructure',
    label: 'Infra',
    skills: [
      'SSH',
      'Cybersecurity',
      'DHCP / DNS',
      'IPv4',
      'Cisco',
      'Routers & Switches',
      'Segmentation',
      'Network traffic'
    ],
  },
]

export const curriculum = [
  {
    title: 'Data Structures & Algorithms',
    description:
      'Graph theory, self-balancing trees, time complexity, key algorithms & data structures.',
  },
  {
    title: 'Object-Oriented Programming',
    description:
      'Java, C++, inheritance, polymorphism, abstraction/interfaces, GUIs with Swing and AWT, data encapsulation.',
  },
  {
    title: 'Machine Learning & AI',
    description:
      'Deep neural networks, computer vision, regression models, statistical inference.',
  },
  {
    title: 'Database Systems',
    description:
      'Relational schemas, ACID transactions, backend engineering, Oracle SQL.',
  },
]
