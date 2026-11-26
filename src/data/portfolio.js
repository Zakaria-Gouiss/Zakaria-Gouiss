import engagementLiveImage from '../assets/engagementlive.jpg'
import gradioImage from '../assets/gradio.jpg'
import lyweekImage from '../assets/lyweek.jpg'

export const profile = {
  name: 'Zakaria Gouiss',
  email: 'zgouiss15@gmail.com',
  role: 'Software and Machine Learning Engineer',
  location: 'Cincinnati Metropolitan Area',
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
    role: 'Cybersecurity Project Management Intern',
    period: 'Jun 2026 — Aug 2026',
    location: 'Evendale, OH',
    summary:
      'Worked within various IT and cybersecurity teams at GE Aerospace to leverage digital technologies to create innovative solutions to solve business problems.',
    achievements: [
      'Contributed to a software engineering team in translating stakeholder feedback into working web solutions via Agile methodology using React, PostgreSQL, and TypeScript',
      'Collaborated on Operational Technology (OT) initiatives by analyzing data from multiple inventory sources to support network segmentation and isolation objectives',
      'Supporting digital transformation initiatives by migrating projects into a new project management software to improve accessibility and reporting for high-priority cybersecurity initiatives',
      'Worked directly on a lean methodology team as part of intern committee responsibilities to create learning opportunities on maximizing customer value while minimizing waste'
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
    role: 'Network Engineer Intern',
    period: 'Jan 2026 — May 2026',
    location: 'Cincinnati, OH',
    summary:
      'Supported enterprise network, security, and data center infrastructure operations across production and lab environments.',
    achievements: [
      'Contributed to a network proof-of-concept (POC), with environment setup, configuration validation, and connectivity testing, which supported the selection of a solution that was 33% more cost-efficient than the existing vendor',
      'Supported switch wipe and refresh operations as part of infrastructure lifecycle management, as well as part of setting up a new India-based location',
      'Developed network microsegmentation policy and engaged in validation and rule enforcement testing to prevent lateral movement across the enterprise network',
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
    title: 'EngagementLive',
    category: 'NKU Hackathon',
    description:
      'Collaborated on a campus app for NKU built during the 2026 NKU Community Hackathon, and awarded first place. The project combines campus navigation, parking and rec availability, event discovery, and admin tooling into a single applications. ',
    technologies: ['Leaflet', 'Tailwind CSS', 'React with JavaScript', 'MongoDB', 'Node & Express', 'OpenStreetMap'],
    repositoryLabel: 'Check it out',
    link: 'https://pbierley.github.io/NKU-Community-Hackathon/',
    imageLink: engagementLiveImage
    
  },
  {
    title: 'LyWeek',
    category: 'Full-Stack Web Development',
    description:
      'A weekly assignment tracker for college students, which allows users to create assignments for each course for a designated semester, updating them and completing them each week.',
    technologies: [
      'JavaScript',
      'React',
      'Node.js / Express',
      'PostgreSQL',

      'REST APIs',
      'Vercel'
    ],
    repositoryLabel: 'Try it yourself',
    link: 'https://lyweek.vercel.app',
    imageLink: lyweekImage
  },
  
  {
    title: 'CNN Clothing Classifier',
    category: 'Deep Learning',
    description:
      'An independently designed and trained custom convolutional neural network (CNN) designed to accurately classify articles of clothing. Acheived 87% accuracy on a 25GB dataset of over 44,000 high-quality images.',
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
    name: 'Backend',
    label: 'Persistence',
    skills: [
      'REST APIs',
      'Node.js',
      'CORS',
      'Render',
      'Express',
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
    skills: ['React', 'CSS3', 'HTML5', 'Vite', 'UI/UX', 'Tailwind', 'JavaScript', 'ESLint'],
  },
  {
    number: '05',
    name: 'Databases',
    label: 'DB',
    skills: [
      'PostgreSQL',
      'MongoDB',
      'NoSQL',
      'Oracle SQL'
    ],
  },
  {
     number: '06',
    name: 'IT Infrastructure',
    label: 'Infra',
    skills: [
      'SSH',
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
      'Deep neural networks, computer vision, regression models,  statistical inference.',
  },
  {
    title: 'Database Systems',
    description:
      'Relational schemas, ACID transactions, backend engineering, Oracle SQL.',
  },
]
