export const profile = {
  name: 'Zakaria Gouiss',
  email: 'alexander@nku.edu',
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
    company: 'Medpace',
    field: 'Clinical Trial Infrastructure',
    role: 'Software Engineering Intern',
    period: 'May 2024 — Aug 2024',
    location: 'Cincinnati, OH [HQ]',
    summary:
      'Engineered robust full-stack clinical trial web modules and high-throughput backend services supporting global pharmaceutical research and regulatory patient data capture.',
    achievements: [
      'Architected and optimized C#/.NET 8 REST validation endpoints, reducing patient data payload validation latency by 28%.',
      'Authored scalable SQL Server migration scripts and transactional stored procedures for high-concurrency electronic data capture (EDC) systems.',
      'Containerized legacy staging environments using Docker, cutting developer onboarding and local staging turnaround by 50%.',
    ],
    technologies: [
      'C# / .NET 8',
      'SQL Server',
      'Docker Containers',
      'REST Microservices',
      'CI/CD Pipeline',
    ],
  },
  {
    number: '02',
    company: 'GE Aerospace',
    field: 'Aviation Propulsion & Avionics',
    role: 'Software Engineering Intern',
    period: 'Aug 2023 — Dec 2023',
    location: 'Evendale, OH [Aviation Facility]',
    summary:
      'Contributed to flight propulsion telemetry evaluation tools used by aircraft engineers to ingest, evaluate, and visualize real-time turbofan engine performance during critical test cell operations.',
    achievements: [
      'Constructed real-time streaming data ingestion pipelines in Python to automate statistical anomaly identification across engine run cycles.',
      'Engineered interactive telemetry monitor views in React, TypeScript, and high-frequency HTML5 Canvas graphing tools for sub-millisecond dynamic updates.',
      'Implemented automated cloud integration tests via AWS (S3, Lambda) with complete coverage utilizing pytest and Playwright.',
    ],
    technologies: [
      'Python',
      'React & TypeScript',
      'AWS (S3 / Lambda)',
      'Telemetry Stream',
      'Automated Testing',
    ],
  },
]

export const projects = [
  {
    title: 'Full-Stack Assignment & Syllabus Tracker',
    category: 'Flagship system',
    status: 'In production',
    description:
      'An autonomous academic productivity engine that parses complex multi-page course syllabi (PDF/DOCX), extracts deadline milestones, and calculates priority matrices based on syllabus weighting and deadline proximity with interactive Kanban synchronization.',
    technologies: [
      'TypeScript',
      'React 18',
      'Node.js / Express',
      'PostgreSQL',
      'Redis Cache',
      'Tailwind CSS',
    ],
    repositoryLabel: 'Inspect repository',
    featured: true,
  },
  {
    title: 'Campus Navigator & Peer Connect',
    category: '1st place winner',
    subtitle: 'NKU Hackathon',
    description:
      'Geospatial university study coordinator allowing students to map live study capacity, organize ad-hoc exam reviews, and coordinate study sessions via low-latency WebSockets.',
    technologies: ['Next.js', 'FastAPI', 'Mapbox GL', 'WebSockets'],
    repositoryLabel: 'Explore code',
    metric: 'Hackathon build',
  },
  {
    title: 'Neural Vision Defect Classifier',
    category: 'Computer vision research',
    description:
      'Industrial component anomaly detection architecture trained on surface material crack benchmarks using fine-tuned ResNet-50 and Vision Transformer backbones with automated inference telemetry.',
    technologies: ['PyTorch', 'OpenCV', 'TorchVision', 'NumPy'],
    repositoryLabel: 'Inspect architecture',
    metric: 'Inference: 14ms / frame',
    score: '98.4% ROC AUC',
  },
]

export const skillGroups = [
  {
    number: '01',
    name: 'Languages',
    label: 'Core',
    skills: ['Python', 'TypeScript', 'C#', 'Java', 'C++', 'SQL', 'JavaScript'],
  },
  {
    number: '02',
    name: 'Backends & Storage',
    label: 'Persistence',
    skills: [
      'FastAPI',
      '.NET 8 / Core',
      'Node.js',
      'PostgreSQL',
      'SQL Server',
      'Redis',
      'WebSockets',
    ],
  },
  {
    number: '03',
    name: 'AI & Vision',
    label: 'Inference',
    skills: [
      'PyTorch',
      'OpenCV',
      'TorchVision',
      'TensorFlow',
      'Scikit-Learn',
      'NumPy / Pandas',
    ],
  },
  {
    number: '04',
    name: 'Frontend Engineering',
    label: 'UI / UX',
    skills: ['React 18', 'Next.js', 'Tailwind CSS', 'HTML5 Canvas', 'Vite / Webpack'],
  },
  {
    number: '05',
    name: 'Cloud & DevOps',
    label: 'Infra',
    skills: [
      'Docker',
      'AWS (S3, Lambda)',
      'GitHub Actions',
      'Linux / Bash',
      'CI/CD Automation',
    ],
  },
  {
    number: '06',
    name: 'Architecture & Quality',
    label: 'Practices',
    skills: [
      'Distributed Systems',
      'TDD (Test-Driven)',
      'Microservices',
      'Telemetry & Logging',
      'REST APIs',
    ],
  },
]

export const curriculum = [
  {
    title: 'Data Structures & Algorithms',
    description:
      'Graph theory, self-balancing trees, dynamic programming, complexity proofs.',
  },
  {
    title: 'Distributed & Operating Systems',
    description:
      'Concurrency, POSIX system calls, process scheduling, virtual memory paging.',
  },
  {
    title: 'Machine Learning & AI',
    description:
      'Deep neural networks, computer vision, regression models, statistical inference.',
  },
  {
    title: 'Database Systems',
    description:
      'Relational schemas, B-tree indexes, ACID transactions, execution planning.',
  },
]
