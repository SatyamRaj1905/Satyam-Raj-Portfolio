export const profile = {
  name: 'Satyam Raj',
  initials: 'SR',
  role: 'Software Developer',
  company: 'Open Limits',
  location: 'Noida, India',
  phone: '+91 8529228967',
  phoneHref: 'tel:+918529228967',
  email: 'satyamraj1905@gmail.com',
  emailHref: 'mailto:satyamraj1905@gmail.com',
  portfolio: 'https://satyam-raj-portfolio.vercel.app/',
  resume: '/Satyam_Raj.pdf',
  links: {
    linkedin: 'https://www.linkedin.com/in/satyam-raj-b59061250/',
    github: 'https://github.com/SatyamRaj1905',
    leetcode: 'https://leetcode.com/u/strange_quark/',
    cses: 'https://cses.fi/user/236427',
    codeforces: 'https://codeforces.com/profile/WORTH',
    codechef: 'https://www.codechef.com/users/ayush_gupta4'
  },
  summary:
    'Software Developer at Open Limits, focused on production web applications, Core Web Vitals, smoother interactions, and performance-first frontends. Experience includes IIT Kharagpur biomedical antenna validation, LNMIIT research work, and teaching assistance for Digital Communication Lab.'
};

export const socials = [
  {
    id: 'phone',
    label: 'Phone',
    href: profile.phoneHref,
    value: profile.phone,
    icon: 'phone',
    enabled: true
  },
  {
    id: 'email',
    label: 'Email',
    href: profile.emailHref,
    value: profile.email,
    icon: 'email',
    enabled: true
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: profile.links.linkedin,
    value: 'LinkedIn',
    icon: 'linkedin',
    enabled: true
  },
  {
    id: 'github',
    label: 'GitHub',
    href: profile.links.github,
    value: 'GitHub',
    icon: 'github',
    enabled: true
  },
  {
    id: 'leetcode',
    label: 'LeetCode',
    href: profile.links.leetcode,
    value: 'LeetCode · 960+ submissions',
    icon: 'leetcode',
    enabled: true
  },
  {
    id: 'cses',
    label: 'CSES',
    href: profile.links.cses,
    value: 'CSES · 250+ submissions',
    icon: 'cses',
    enabled: true
  },
  {
    id: 'codeforces',
    label: 'Codeforces',
    href: profile.links.codeforces,
    value: 'Codeforces',
    icon: 'codeforces',
    enabled: false
  },
  {
    id: 'codechef',
    label: 'CodeChef',
    href: profile.links.codechef,
    value: 'CodeChef',
    icon: 'codechef',
    enabled: false
  }
];

export const experiences = [
  {
    id: 'open-limits',
    title: 'Software Developer',
    organization: 'Open Limits',
    location: 'Noida, India',
    period: 'Sept 2025 - Present',
    tag: 'Production Web Applications',
    report:
      'https://drive.google.com/file/d/1bF5f7_HAD4QYuHr1cAwBFIfiFa_3bRNM/view?usp=sharing',
    points: [
      'Developed and optimized production web applications with a performance-first approach, consistently meeting Core Web Vitals standards.',
      'Implemented performance improvements that led to faster load times, smoother interactions, and lower layout shift: LCP P75 ~1.7s, INP 64ms, CLS 0.01, +665% session growth, +46% revenue growth.',
      'Collaborated with designers, marketers, and stakeholders and worked on multiple product price segment websites including luxury and professional segments.'
    ]
  },
  {
    id: 'iit-kgp',
    title: 'Research Fellow',
    organization: 'Indian Institute of Technology Kharagpur (IIT Kharagpur)',
    location: 'Kharagpur, India',
    period: 'June 2024 - July 2024',
    tag: 'Biomedical Antenna Validation',
    points: [
      'Selected for experimental validation of a biomedical antenna design at the Department of Electronics and Electrical Communication Engineering (ECE).',
      'Conducted antenna characterization using anechoic chamber and antenna test range facilities, including radiation pattern, gain, and impedance measurements.',
      'Analyzed measurement data against simulated results to evaluate real-world performance deviations and design robustness.'
    ]
  },
  {
    id: 'lnmiit-research',
    title: 'Research Intern',
    organization: 'LNMIIT, Jaipur',
    location: 'Jaipur, India',
    period: 'May 2023 - Nov 2023',
    tag: 'Biomedical Antenna Simulation',
    points: [
      'Simulated multi-band biomedical antenna for ISM 2.4/5.1 GHz and MedRadio 900 MHz using EM tools.',
      'Optimized SAR, gain, and return loss and automated visualization using Python for 5x iteration efficiency.',
      'Documented 10+ performance metric comparisons and contributed to 2 technical drafts.'
    ]
  },
  {
    id: 'lnmiit-ta',
    title: 'Teaching Assistant',
    organization: 'Digital Communication Lab, LNMIIT',
    location: 'Jaipur, India',
    period: 'Aug 2024 - Nov 2024',
    tag: 'Digital Communication Lab',
    points: [
      'Guided 80+ students with 95% lab evaluation success in modulation, line coding, and MATLAB tasks.',
      'Designed 8+ lab manuals and mini-assessment scripts aligned with Bloom’s taxonomy outcomes.'
    ]
  }
];

export const education = [
  {
    id: 'lnmiit-btech',
    institution: 'LNMIIT, Jaipur',
    degree: 'B.Tech, Electronics and Communication Engineering',
    period: 'Jan 2022 - June 2025',
    location: 'Jaipur, India'
  }
];

export const projects = [
  {
    id: 'doodle-chat',
    title: 'Doodle Chat',
    stack: ['React', 'Node.js', 'Socket.IO', 'Express'],
    live: 'https://multiplayerdrawingandchatwebsite.onrender.com/',
    github: 'https://github.com/SatyamRaj1905/Doodle-Chat',
    points: [
      'Real-time drawing + chat app with 100ms latency WebSocket communication.',
      'Implemented dynamic room system with 10+ concurrent user handling.'
    ]
  },
  {
    id: 'lecture-hall-management-system',
    title: 'Lecture Hall Management System',
    stack: ['MERN Stack'],
    live: 'https://lt-management-frontend.onrender.com/',
    github: 'https://github.com/SatyamRaj1905/Lecture-hall-management-system',
    points: [
      'Role-based booking flow handling 4 user roles and 12+ endpoint APIs.',
      'Enabled auto-updating UI for booking statuses using Redux and WebSocket hooks.'
    ]
  },
  {
    id: 'parking-lot-system',
    title: 'Parking Lot System',
    stack: ['Java', 'LLD'],
    live: '',
    github: 'https://github.com/SatyamRaj1905/Parking_Lot_LLD',
    points: [
      'OOP CLI system managing 3 vehicle types across 5 floors with scalable architecture.',
      'Thread-safe concurrent handling of up to 100 simulated parking operations.'
    ]
  }
];

export const skills = [
  {
    id: 'languages',
    label: 'Languages',
    items: ['C/C++', 'HTML', 'CSS', 'Javascript', 'Typescript', 'Liquid', 'Java', 'Python (Micro)']
  },
  {
    id: 'frontend',
    label: 'Frontend',
    items: ['React.js', 'Recoil', 'Redux', 'Next.js', 'Tailwind CSS', 'npm']
  },
  {
    id: 'backend',
    label: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'Git', 'GitHub']
  },
  {
    id: 'database',
    label: 'Database',
    items: ['MongoDB', 'Mongoose', 'MySQL', 'PostgresSQL', 'Prisma']
  },
  {
    id: 'fundamentals',
    label: 'Fundamentals',
    items: ['DSA (500+ problems)', 'OOPS', 'DBMS', 'OS', 'CN']
  },
  {
    id: 'devops',
    label: 'DevOps',
    items: ['AWS', 'Docker', 'Cloudflare']
  }
];

export const achievements = [
  'Among the top 30 candidates whose project got approved at IIT KGP for practical scenario testing.',
  'Secured INR 27k+ in 10+ inter-college sketch/photography events including IIT-KGP, IIT-D, and St. Stephen’s.',
  'Earned INR 13k+ via 4+ commissioned sketches.'
];

export const artworkLink =
  'https://drive.google.com/file/d/146VvynP7Tuus7F2X70Zjw8CAonx3ctAr/view?usp=sharing';

export const desktopApps = [
  {
    id: 'profile',
    label: 'profile',
    title: 'Profile',
    path: 'C:\\SATYAM\\profile',
    icon: 'profile',
    type: 'shortcut',
    window: { width: 540, estimateHeight: 390 }
  },
  {
    id: 'experience',
    label: 'works',
    title: 'Experience',
    path: 'C:\\SATYAM\\works',
    icon: 'works',
    type: 'folder',
    window: { width: 660, estimateHeight: 620 }
  },
  {
    id: 'projects',
    label: 'projects',
    title: 'Projects',
    path: 'C:\\SATYAM\\projects',
    icon: 'projects',
    type: 'folder',
    window: { width: 650, estimateHeight: 560 }
  },
  {
    id: 'skills',
    label: 'tools',
    title: 'Skills & Tools',
    path: 'C:\\SATYAM\\tools',
    icon: 'tools',
    type: 'folder',
    window: { width: 640, estimateHeight: 470 }
  },
  {
    id: 'education',
    label: 'education',
    title: 'Education',
    path: 'C:\\SATYAM\\education',
    icon: 'education',
    type: 'folder',
    window: { width: 600, estimateHeight: 400 }
  },
  {
    id: 'achievements',
    label: 'awards',
    title: 'Achievements',
    path: 'C:\\SATYAM\\achievements',
    icon: 'awards',
    type: 'folder',
    window: { width: 600, estimateHeight: 440 }
  },
  {
    id: 'contact',
    label: 'contact',
    title: 'Contact',
    path: 'C:\\SATYAM\\contact',
    icon: 'contact',
    type: 'folder',
    window: { width: 650, estimateHeight: 650 }
  },
  {
    id: 'resume',
    label: 'resume',
    title: 'Resume',
    path: 'C:\\SATYAM\\resume',
    icon: 'resume',
    type: 'folder',
    window: { width: 620, estimateHeight: 640 }
  }
];
