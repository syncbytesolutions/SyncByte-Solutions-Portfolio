import {
  Lightbulb,
  ShieldCheck,
  Users,
  Award,
  Globe,
  Smartphone,
  Server,
  Palette,
  MessagesSquare,
  Code2,
  Smartphone as MobileIcon,
  Paintbrush,
  GitBranch,
  BarChart3,
  PenTool,
  type LucideIcon,
} from 'lucide-react'

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Team', href: '/team' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
] as const

export type JobOpening = {
  title: string
  department: string
  location: string
  type: string
  description: string
  requirements: string[]
  icon: LucideIcon
}

export const jobOpenings: JobOpening[] = [
  {
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Colombo, Sri Lanka',
    type: 'Full-time',
    description: 'Build and scale enterprise-grade web applications using modern frameworks. You will lead technical decisions and mentor junior developers.',
    requirements: ['React / Next.js', 'Node.js / Spring Boot', '5+ years experience', 'System Design'],
    icon: Code2,
  },
  {
    title: 'Mobile App Developer',
    department: 'Engineering',
    location: 'Colombo, Sri Lanka',
    type: 'Full-time',
    description: 'Develop cross-platform mobile applications for Android and iOS using React Native and TypeScript, integrated with cloud backends.',
    requirements: ['React Native', 'TypeScript', 'REST APIs', '3+ years experience'],
    icon: MobileIcon,
  },
  {
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Remote / Colombo',
    type: 'Full-time',
    description: 'Craft intuitive, delightful user experiences from wireframes to high-fidelity prototypes. Collaborate closely with engineering teams.',
    requirements: ['Figma / Adobe XD', 'User Research', 'Prototyping', 'Design Systems'],
    icon: Paintbrush,
  },
  {
    title: 'DevOps Engineer',
    department: 'Operations',
    location: 'Colombo, Sri Lanka',
    type: 'Full-time',
    description: 'Manage CI/CD pipelines, cloud infrastructure, and system reliability. Ensure seamless deployment and high availability of all platforms.',
    requirements: ['AWS / GCP', 'Docker / Kubernetes', 'CI/CD Pipelines', 'Linux'],
    icon: GitBranch,
  },
  {
    title: 'Business Analyst',
    department: 'Business',
    location: 'Colombo, Sri Lanka',
    type: 'Full-time',
    description: 'Bridge the gap between clients and the engineering team. Gather requirements, define scope, and ensure delivery aligns with business goals.',
    requirements: ['Requirements Analysis', 'Agile / Scrum', 'Client Communication', 'Data Modelling'],
    icon: BarChart3,
  },
  {
    title: 'Technical Content Writer',
    department: 'Marketing',
    location: 'Remote',
    type: 'Part-time',
    description: 'Create high-quality technical articles, case studies, and product documentation that showcase SyncByte Solutions\' expertise.',
    requirements: ['Technical Writing', 'SEO Knowledge', 'IT Background', 'Excellent English'],
    icon: PenTool,
  },
]

export const applicationSteps = [
  {
    number: '01',
    title: 'Apply Online',
    description: 'Submit your resume and cover letter through our careers portal. All applications are reviewed by our HR team within 3 business days.',
  },
  {
    number: '02',
    title: 'Initial Screening',
    description: 'A brief 20-minute call with our HR team to understand your background, experience, and what excites you about SyncByte Solutions.',
  },
  {
    number: '03',
    title: 'Technical Interview',
    description: 'A focused 60-minute session with our senior engineers covering role-specific skills, problem solving, and a short practical task.',
  },
  {
    number: '04',
    title: 'Final Interview',
    description: 'A culture-fit and strategic discussion with the founding team. We want to make sure this is the perfect fit — for both of us.',
  },
  {
    number: '05',
    title: 'Offer & Onboarding',
    description: 'Receive your offer letter and join a structured onboarding programme designed to set you up for success from day one.',
  },
]

export type Value = { title: string; description: string; icon: LucideIcon }

export const values: Value[] = [
  {
    title: 'Innovation',
    description:
      'We push boundaries with emerging technologies to craft forward-thinking solutions.',
    icon: Lightbulb,
  },
  {
    title: 'Quality',
    description:
      'Every line of code and pixel is held to world-class engineering standards.',
    icon: Award,
  },
  {
    title: 'Teamwork',
    description:
      'We collaborate closely with our clients, building partnerships that last.',
    icon: Users,
  },
  {
    title: 'Integrity',
    description:
      'Transparency and honesty guide every decision we make for your business.',
    icon: ShieldCheck,
  },
]

export type Service = {
  title: string
  description: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    title: 'Web Application Development',
    description:
      'Scalable, high-performance web apps built with modern frameworks and clean architecture.',
    icon: Globe,
  },
  {
    title: 'Mobile App Development',
    description:
      'Native and cross-platform apps for Android & iOS that delight users everywhere.',
    icon: Smartphone,
  },
  {
    title: 'Managed IT Support & Maintenance',
    description:
      'Reliable, proactive IT support and maintenance to keep your systems secure and running smoothly.',
    icon: Server,
  },
  {
    title: 'UI/UX Design',
    description:
      'Intuitive, beautiful interfaces designed around real human behavior and accessibility.',
    icon: Palette,
  },
  {
    title: 'Software Consulting',
    description:
      'Strategic guidance to help you choose the right technology and scale with confidence.',
    icon: MessagesSquare,
  },
]

export type Member = {
  name: string
  role: string
  photo: string
  linkedin: string
}

export const team: Member[] = [
  {
    name: 'Kishalini Paheerathan',
    role: 'Co-Founder & CEO',
    photo: '/team/Kishalini.jpeg',
    linkedin: 'https://www.linkedin.com',
  },
  {
    name: 'Anthujan Kannapiran',
    role: 'Co-Founder & CTO',
    photo: '/team/Anthujan.jpeg',
    linkedin: 'https://www.linkedin.com',
  },
  {
    name: 'Kerushan Sribaskaran',
    role: 'Founding Member & CPO',
    photo: '/team/Kerushan.png',
    linkedin: 'https://www.linkedin.com',
  },
  {
    name: 'Saruka Mugunthan',
    role: 'Founding Member & CDO',
    photo: '/team/Saruka.png',
    linkedin: 'https://www.linkedin.com',
  },
  {
    name: 'Sulojan Rajkumar',
    role: 'Founding Member & CIO',
    photo: '/team/Sulojan.jpeg',
    linkedin: 'https://www.linkedin.com',
  },
]

export type Category = 'Web App' | 'Mobile App'

export type Project = {
  title: string
  category: Category
  image: string
  tech: string[]
  github: string
}

export const projects: Project[] = [
  {
    title: 'Real Estate Appointment System',
    category: 'Web App',
    image: '/projects/saas-dashboard.png',
    tech: ['Java Servlets', 'HTML/CSS', 'GitHub'],
    github: 'https://github.com',
  },
  {
    title: 'E-Shopping Store',
    category: 'Web App',
    image: '/projects/ecommerce.png',
    tech: ['Spring Boot', 'Java', 'MySQL'],
    github: 'https://github.com',
  },
  {
    title: 'Service Appointment System',
    category: 'Web App',
    image: '/projects/banking-app.png',
    tech: ['Spring Boot', 'JavaScript', 'MySQL'],
    github: 'https://github.com',
  },
  {
    title: 'Service Appointment System',
    category: 'Mobile App',
    image: '/projects/fitness-app.png',
    tech: ['React Native', 'Node.js', 'MongoDB'],
    github: 'https://github.com',
  },
]
