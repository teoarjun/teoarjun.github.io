export const personalInfo = {
  name: 'Arjun Teotia',
  title: 'Technical Lead',
  subtitle: 'Senior Full-Stack & Mobile Engineer',
  location: 'Pune, India',
  email: 'teo.arjun@gmail.com',
  github: 'https://github.com/teoarjun',
  linkedin: 'https://www.linkedin.com/in/arjun-teotia-51706982/',
  phone: '+91 9971-756-334',
  resumeUrl: '/portfolio/resume.pdf',
  yearsOfExperience: '10+',
  headline: 'I build distributed systems that ship fast and scale further.',
  subheadline:
    'Technical Lead specialising in high-performance web and mobile applications. Trusted by Apple, FBI, and global enterprises — with a track record of 50–80% latency gains and near-zero production defects.',
  available: true,
}

export const heroStats = [
  { value: '10+', label: 'Years Experience' },
  { value: '50–80%', label: 'API Latency Cut' },
  { value: '2000+', label: 'Platform Users' },
  { value: '500+', label: 'Institutions Served' },
]

export const credentialBadges = [
  { label: 'Turing — World Top 1%', color: 'blue' },
  { label: 'Toptal — World Top 3%', color: 'purple' },
  { label: 'Uplers — India Top 3.5%', color: 'orange' },
]

export const skills = [
  {
    category: 'Frontend',
    icon: '⬡',
    items: ['React', 'TypeScript', 'JavaScript', 'Redux', 'Tailwind CSS', 'HTML5 / CSS3'],
  },
  {
    category: 'Mobile',
    icon: '◈',
    items: ['React Native', 'iOS (Xcode)', 'Android (Java)', 'App Store Deployment', 'Push Notifications'],
  },
  {
    category: 'Backend',
    icon: '⬡',
    items: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'Socket.io', 'Laravel / PHP'],
  },
  {
    category: 'Cloud & DevOps',
    icon: '◈',
    items: ['AWS Lambda', 'AWS Cognito', 'AWS AppSync', 'AWS S3 / CDK', 'CI/CD Pipelines', 'Digital Ocean / Heroku'],
  },
  {
    category: 'Databases',
    icon: '⬡',
    items: ['PostgreSQL', 'MongoDB', 'DynamoDB', 'MySQL', 'Firebase', 'Redis'],
  },
  {
    category: 'Testing & Quality',
    icon: '◈',
    items: ['Jest', 'Unit Testing', 'Code Reviews', 'Sonarcloud', 'TDD / BDD', 'Performance Profiling'],
  },
  {
    category: 'Architecture',
    icon: '⬡',
    items: ['System Design', 'Distributed Systems', 'Microservices', 'Performance Optimisation', 'Scalability Planning'],
  },
  {
    category: 'Tools & Platforms',
    icon: '◈',
    items: ['Git', 'JIRA', 'Slack', 'Azure Face API', 'Google Maps API', 'BigQuery'],
  },
]

export const experience = [
  {
    company: 'Deque Systems',
    companyDesc: 'Leading digital accessibility company — clients include Apple, FBI, and US Bank.',
    role: 'Lead Software Engineer',
    period: 'May 2023 – Present',
    location: 'Hyderabad, India (Remote)',
    current: true,
    achievements: [
      'Led a team of 4 engineers building Axe Auditor — enterprise accessibility platform used by Apple, FBI, and US Bank — across React, TypeScript, Node.js, Express.js, and AWS',
      'Reduced API latency by 50–80% via PostgreSQL query optimisation; migrated ~380GB of data from RDS to S3, lowering infrastructure cost and improving data efficiency',
      'Accelerated delivery velocity by ~30% by implementing CI/CD pipelines, standardised Git workflows, and comprehensive Jest test suites',
      'Achieved near-zero production defect rate through rigorous code reviews, improved testing practices, and structured release processes',
      'Designed scalable system architecture to support high-volume accessibility testing workflows across 500+ enterprise clients',
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'AWS Lambda', 'AppSync', 'Cognito', 'Jest', 'CI/CD'],
    highlight: 'Employee of the Quarter — 3×',
  },
  {
    company: 'Infinity Works (Accenture)',
    companyDesc: 'UK-based engineering consultancy, part of Accenture. Delivered mobile platform for L\'Oreal.',
    role: 'Tech Lead / Associate Manager',
    period: 'Aug 2022 – Apr 2023',
    location: 'London, UK (Remote)',
    current: false,
    achievements: [
      'Led a squad of 4 engineers building a React Native beauty application for L\'Oreal, improving application stability and significantly reducing crash frequency across releases',
      'Resolved critical security vulnerabilities in REST APIs, lowering production risk and strengthening overall system reliability',
      'Managed cross-functional collaboration between engineering, product, and design teams across UK and India time zones',
    ],
    tech: ['React Native', 'Redux', 'TypeScript', 'Azure', 'REST APIs', 'MERN Stack'],
    highlight: 'Led L\'Oreal mobile engineering',
  },
  {
    company: 'Gnxt Systems',
    companyDesc: 'IoT and mobility startup focused on EV charging infrastructure.',
    role: 'Mobile Lead Engineer',
    period: 'Nov 2021 – Aug 2022',
    location: 'Noida, India',
    current: false,
    achievements: [
      'Built Blink2.0 EV charging app from scratch for iOS and Android — featuring real-time GPS-based station discovery with Google/Apple Maps integration',
      'Solved a critical hardware connectivity gap by implementing a custom TCP-based communication layer for direct device interaction, resolving limitations in existing libraries',
      'Contributed an open-source fix to react-native-lan-port-scanner adapted to project requirements',
      'Designed and built REST APIs for real-time EV charging data processing',
    ],
    tech: ['React Native', 'Node.js', 'Express.js', 'TCP/IP', 'Google Maps', 'Apple Maps', 'REST APIs'],
    highlight: 'Built iOS & Android app from scratch',
  },
  {
    company: 'RSystems International',
    companyDesc: 'Global IT services firm. Collaborated with DotStudioPro (USA) on OTT platform.',
    role: 'Senior Software Engineer',
    period: 'Jan 2021 – Nov 2021',
    location: 'Noida, India',
    current: false,
    achievements: [
      'Developed SportsTV — a cross-platform OTT app (mobile, tablet, TV) in React Native, collaborating directly with US-based DotStudioPro engineering team',
      'Engineered the EPG (Electronic Program Guide) screen from scratch; optimised performance with horizontal lazy loading, image caching, FlatList, and PureComponents',
      'Integrated AWS services (DynamoDB, Cognito, AppSync) to improve backend availability and response consistency under heavy load',
    ],
    tech: ['React Native', 'Redux', 'TypeScript', 'AWS DynamoDB', 'Cognito', 'AppSync', 'Jest', 'CI/CD'],
    highlight: 'Cross-platform TV & mobile OTT app',
  },
  {
    company: 'CodeKrypt Technologies',
    companyDesc: 'Software company co-founded by Arjun — built products for startups across India and Africa.',
    role: 'Co-founder / Technical Lead',
    period: 'Jan 2018 – Jan 2021',
    location: 'Noida, India',
    current: false,
    achievements: [
      'Co-founded CodeKrypt Technologies and led a team of 6 engineers building CityDrive — an Uber-like ride-hailing platform that onboarded 2,000+ drivers in Zambia',
      'Built TutMe — a school management ERP platform that scaled to 500+ schools in Delhi NCR within the first two years',
      'Designed real-time backend systems using Node.js, Socket.io, and MongoDB; maintained stable performance under high concurrent load',
      'Managed full product lifecycle: architecture, development, deployment, and post-launch iteration across multiple products simultaneously',
    ],
    tech: ['React Native', 'Node.js', 'MongoDB', 'Socket.io', 'Java', 'Laravel', 'Firebase', 'Google Maps'],
    highlight: 'Co-founder — 2000+ drivers & 500+ schools',
  },
  {
    company: 'Velocity Software',
    companyDesc: 'Product and services company with e-commerce and enterprise software clients.',
    role: 'Software Engineer',
    period: 'Aug 2015 – Jan 2018',
    location: 'Noida, India',
    current: false,
    achievements: [
      'Engineered a stock management system for e-commerce client that improved order processing efficiency by 60% and increased revenue by 40%',
      'Re-architected the checkout flow for UKSoccerShop.com with Stripe and PayPal, improving transaction reliability and conversion',
      'Delivered full projects independently from requirements through deployment',
    ],
    tech: ['PHP', 'JavaScript', 'MySQL', 'CakePHP', 'OpenCart', 'Laravel', 'Stripe', 'PayPal'],
    highlight: 'Employee of the Month 2× + Excellence Award',
  },
]

export const projects = [
  {
    name: 'Axe Auditor',
    tagline: 'Enterprise accessibility testing platform',
    description:
      'Led development of the flagship accessibility auditing platform at Deque Systems. Used by Apple, FBI, and US Bank to ensure digital products meet WCAG compliance standards at scale.',
    impact: 'Trusted by Apple, FBI & US Bank',
    metric: '50–80% latency reduction',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS Lambda', 'AppSync', 'Cognito'],
    period: '2023 – Present',
    type: 'Enterprise SaaS',
    featured: true,
  },
  {
    name: 'Blink2.0',
    tagline: 'EV charging mobile app with hardware connectivity',
    description:
      'Built from scratch — iOS and Android app for EV station discovery and hardware interaction. Unique TCP-based communication layer enables direct connectivity with charging hardware, solving a gap no existing library addressed.',
    impact: 'Novel hardware-to-mobile TCP bridge',
    metric: 'iOS & Android — built from scratch',
    tech: ['React Native', 'Node.js', 'TCP/IP', 'Google Maps', 'Apple Maps', 'REST APIs'],
    period: '2021 – 2022',
    type: 'Mobile · IoT',
    featured: true,
    link: 'https://github.com/teoarjun/react-native-lan-port-scanner',
  },
  {
    name: 'SportsTV',
    tagline: 'Cross-platform OTT streaming app',
    description:
      'Developed a full OTT streaming platform for mobile, tablet, and TV (iOS and Android). Engineered the EPG screen from scratch with advanced performance techniques — lazy loading, image caching, FlatList, and PureComponents.',
    impact: 'Mobile + Tablet + TV deployment',
    metric: 'EPG optimised for zero jank',
    tech: ['React Native', 'Redux', 'TypeScript', 'AWS DynamoDB', 'Cognito', 'AppSync', 'Jest'],
    period: '2021',
    type: 'Mobile · OTT',
    featured: true,
  },
  {
    name: 'CityDrive',
    tagline: 'Uber-like ride-hailing platform',
    description:
      'Co-built a ride-hailing platform from scratch for a Zambia-based startup. Led a team of 6 across iOS (React Native), Android (Java), and backend (Node.js + Socket.io). Onboarded 2,000+ drivers after launch.',
    impact: '2,000+ drivers onboarded',
    metric: 'Full-stack from scratch',
    tech: ['React Native', 'Java', 'Node.js', 'Socket.io', 'Laravel', 'Firebase', 'Google Maps'],
    period: '2018 – 2021',
    type: 'Mobile · Marketplace',
    featured: true,
  },
  {
    name: 'TutMe',
    tagline: 'School management ERP system',
    description:
      'Built a comprehensive mobile-first ERP for school management. Handled admissions, attendance, fees, communication, and more. Scaled to 500+ schools in Delhi NCR within two years of launch.',
    impact: '500+ schools in 2 years',
    metric: 'Full school ERP from zero',
    tech: ['React Native', 'Java', 'CakePHP', 'Firebase', 'MSG91 SMS', 'Google Firebase'],
    period: '2018 – 2021',
    type: 'Mobile · EdTech',
    featured: false,
  },
  {
    name: 'BeautyApp (L\'Oreal)',
    tagline: 'Consumer beauty mobile app via Accenture',
    description:
      'Led React Native development for L\'Oreal\'s beauty app at Infinity Works (Accenture). Significantly improved application stability, reduced crash frequency, and resolved critical REST API security vulnerabilities.',
    impact: 'Dramatically reduced crash rate',
    metric: 'Global consumer app',
    tech: ['React Native', 'Redux', 'TypeScript', 'Azure', 'REST APIs', 'MERN Stack'],
    period: '2022 – 2023',
    type: 'Mobile · Consumer',
    featured: false,
  },
]

export const achievements = [
  {
    value: '50–80%',
    label: 'API Latency Reduction',
    desc: 'PostgreSQL optimisation at Deque Systems',
    color: 'emerald',
  },
  {
    value: '~30%',
    label: 'Faster Release Cycles',
    desc: 'CI/CD + testing practices',
    color: 'emerald',
  },
  {
    value: '380 GB',
    label: 'Data Migrated',
    desc: 'RDS to S3 migration at Deque',
    color: 'emerald',
  },
  {
    value: '≈ 0',
    label: 'Production Defects',
    desc: 'Near-zero defect rate achieved',
    color: 'emerald',
  },
  {
    value: '2,000+',
    label: 'Drivers Onboarded',
    desc: 'CityDrive ride-hailing platform',
    color: 'blue',
  },
  {
    value: '500+',
    label: 'Schools Served',
    desc: 'TutMe ERP — Delhi NCR',
    color: 'blue',
  },
  {
    value: '60%',
    label: 'Faster Order Processing',
    desc: 'Stock management system',
    color: 'purple',
  },
  {
    value: '40%',
    label: 'Revenue Increase',
    desc: 'E-commerce system overhaul',
    color: 'purple',
  },
]

export const awards = [
  {
    title: 'Turing Certified Talent',
    subtitle: "World's Top 1% Developer Community",
    icon: '🏆',
  },
  {
    title: 'Toptal Certified Talent',
    subtitle: "World's Top 3% Developer Community",
    icon: '⭐',
  },
  {
    title: 'Uplers Certified Talent',
    subtitle: "India's Top 3.5% Talent Network",
    icon: '✦',
  },
  {
    title: 'Employee of the Quarter × 3',
    subtitle: 'Deque Systems',
    icon: '🎖',
  },
  {
    title: 'Employee of the Month × 2',
    subtitle: 'Velocity Software Pvt Ltd',
    icon: '🎖',
  },
  {
    title: 'Excellence Award',
    subtitle: 'Single-handedly delivered full project — Velocity Software',
    icon: '✦',
  },
]

export const testimonials = [
  {
    quote:
      "Arjun consistently delivers beyond expectations. When we needed to reduce API latency across our accessibility platform, he attacked the problem systematically and achieved a 50–80% reduction in weeks. He leads by example — the team follows because they trust his technical judgment completely.",
    name: 'Priya Sharma',
    role: 'Engineering Manager',
    company: 'Deque Systems',
    initials: 'PS',
  },
  {
    quote:
      "Working with Arjun on the L'Oreal mobile app was a standout experience. He brought structure to a complex project, dramatically reduced crashes, and kept the team cohesive under pressure. He's the kind of tech lead you want on critical client delivery.",
    name: 'James Whitfield',
    role: 'Head of Mobile',
    company: 'Infinity Works (Accenture)',
    initials: 'JW',
  },
  {
    quote:
      "Arjun mentored me through some of the toughest React Native performance challenges I've faced. His approach to the EPG screen — lazy loading, pure components, smart caching — was a masterclass in mobile engineering. Every decision was intentional and well-explained.",
    name: 'Rohit Verma',
    role: 'Senior Software Engineer',
    company: 'RSystems International',
    initials: 'RV',
  },
]

export const aboutShort =
  "Technical Lead with 10+ years of experience building distributed systems and high-performance web/mobile applications. Currently leading accessibility platform development at Deque Systems — trusted by Apple, the FBI, and US Bank. I combine hands-on engineering with team leadership, delivering measurable impact through performance optimisation, scalable architecture, and tight engineering processes."

export const aboutDetailed = `Over 10 years I've led engineering across startups, enterprises, and global consultancies — from co-founding CodeKrypt Technologies to shipping enterprise-grade tools at Deque Systems. My work spans full-stack web, cross-platform mobile, cloud infrastructure, and distributed systems.\n\nAt Deque, I lead a squad of 4 engineers building accessibility tooling used by the world's most demanding organisations. I've cut API latency by 50–80%, migrated 380GB of data without disruption, and reduced production defects to near zero through disciplined testing and release practices.\n\nAs co-founder, I built two products from scratch — a ride-hailing platform that connected 2,000+ drivers in Zambia and a school ERP used by 500+ institutions. These taught me how to ship fast, iterate under pressure, and own outcomes end-to-end.\n\nI care deeply about code quality, engineering culture, and building systems that remain maintainable at scale. Recognised globally as Turing Top 1% and Toptal Top 3%, I'm available for senior remote engineering and technical leadership roles.`
