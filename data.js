export const profile = {
  name: 'Humberto Fernández',
  headline: 'Senior Software Engineer | AI Engineer | Full-Stack Architect',
  shortTitle: 'Senior Software Engineer & AI Engineer',
  location: 'Venezuela',
  yearsOfExperience: '10+ años',
  summary:
    'Ingeniero de Software Senior con más de 10 años de experiencia construyendo soluciones web, móviles, SaaS, APIs, sistemas empresariales y plataformas orientadas a negocio. Mi foco actual está en AI Engineering, GenAI, RAG y automatización inteligente, manteniendo una base sólida en arquitectura y desarrollo Full-Stack.',
  proposition:
    'Diseño y desarrollo soluciones de software escalables, aplicaciones web y móviles, plataformas SaaS e integraciones empresariales, combinando ingeniería de software, arquitectura e Inteligencia Artificial para resolver problemas reales de negocio.',
  about: [
    'He participado en el diseño, arquitectura, desarrollo e integración de soluciones completas, no solo en la implementación de funcionalidades aisladas.',
    'Mi trayectoria combina frontend, backend, mobile, data engineering y liderazgo técnico, con una evolución natural hacia AI Engineering y soluciones basadas en LLMs y RAG.',
    'Me interesa construir productos y sistemas que sean técnicamente sólidos, mantenibles y alineados a objetivos de negocio.',
  ],
  aboutHighlights: ['Software Engineering', 'Arquitectura', 'AI Engineering', 'Full-Stack', 'Data Engineering', 'Liderazgo técnico', 'Consultoría'],
  socials: [
    {
      label: 'LinkedIn',
      href: import.meta.env.VITE_LINKEDIN_URL || '',
      note: 'Perfil profesional',
    },
    {
      label: 'GitHub',
      href: import.meta.env.VITE_GITHUB_URL || '',
      note: 'Código y proyectos',
    },
    {
      label: 'WhatsApp',
      href: import.meta.env.VITE_WHATSAPP_URL || '',
      note: 'Contacto directo',
    },
    {
      label: 'Telegram',
      href: import.meta.env.VITE_TELEGRAM_URL || '',
      note: 'Contacto rápido',
    },
  ],
};

export const links = {
  quoteForm: import.meta.env.VITE_QUOTE_FORM_URL || '',
  calendly: import.meta.env.VITE_CALENDLY_URL || '',
  portfolioDrive: import.meta.env.VITE_PORTFOLIO_DRIVE_URL || '',
  demoJuztina: import.meta.env.VITE_DEMO_JUZTINA_URL || '',
  demoFogataGroup: import.meta.env.VITE_DEMO_FOGATA_GROUP_URL || '',
  demoNrby: import.meta.env.VITE_DEMO_NRBY_URL || '',
  degreeTitle: import.meta.env.VITE_DEGREE_TITLE_URL || '',
  certPythonAi: import.meta.env.VITE_CERT_PYTHON_AI_URL || '',
  certAwsFundamentals: import.meta.env.VITE_CERT_AWS_FUNDAMENTALS_URL || '',
  certScrumMaster: import.meta.env.VITE_CERT_SCRUM_MASTER_URL || '',
  cvSpanish: import.meta.env.VITE_CV_SPANISH_URL || '',
  cvEnglish: import.meta.env.VITE_CV_ENGLISH_URL || '',
  linkedin: import.meta.env.VITE_LINKEDIN_URL || '',
  github: import.meta.env.VITE_GITHUB_URL || '',
  whatsapp: import.meta.env.VITE_WHATSAPP_URL || '',
  telegram: import.meta.env.VITE_TELEGRAM_URL || '',
  email: import.meta.env.VITE_EMAIL_URL || '',
};

export const heroSnapshot = {
  rows: [
    { label: 'usuario', value: 'Humberto Fernández' },
    { label: 'rol', value: 'Senior Software & AI Engineer' },
    { label: 'enfoque', value: 'AI, SaaS, Data, Mobile' },
    { label: 'modo', value: 'Consultoría y desarrollo end-to-end' },
    { label: 'stack', value: 'React · Angular · Python · Node.js · GenAI' },
  ],
  metrics: [
    { value: '10+ años', label: 'de experiencia profesional' },
    { value: '7', label: 'servicios ofrecidos' },
    { value: '3', label: 'proyectos destacados' },
    { value: 'IA + Software', label: 'propuesta principal' },
  ],
};

export const navigation = [
  { label: 'Inicio', target: 'home' },
  { label: 'Sobre mí', target: 'about' },
  { label: 'Servicios', target: 'services' },
  { label: 'Experiencia', target: 'experience' },
  { label: 'Educación', target: 'education' },
  { label: 'Proyectos', target: 'projects' },
  { label: 'Tecnología', target: 'technology' },
  { label: 'Portafolio', target: 'portfolio' },
  { label: 'Contacto', target: 'contact' },
];

export const services = [
  {
    title: 'Desarrollo de Software y Aplicaciones Personalizadas',
    description:
      'Desarrollo de soluciones web, plataformas empresariales, sistemas internos, SaaS y aplicaciones personalizadas.',
    items: ['JavaScript', 'TypeScript', 'Python', 'FastAPI', 'Django', 'Node.js', 'Angular', 'React', 'Next.js', 'NestJS', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Consultoría Tecnológica',
    description:
      'Consultoría en arquitectura de software, diseño de soluciones, escalabilidad, modernización, migraciones, selección tecnológica y buenas prácticas de ingeniería.',
    items: ['Arquitectura', 'Escalabilidad', 'Modernización', 'Migraciones', 'Selección tecnológica', 'Buenas prácticas'],
  },
  {
    title: 'Integraciones y APIs',
    description:
      'Diseño e implementación de integraciones entre sistemas mediante APIs y servicios.',
    items: ['REST APIs', 'Backend integrations', 'Third-party APIs', 'Payment integrations', 'Authentication', 'Data synchronization'],
  },
  {
    title: 'Mantenimiento y Soporte de Aplicaciones',
    description:
      'Mantenimiento evolutivo y correctivo de aplicaciones web, APIs, sistemas empresariales, sitios web y plataformas existentes.',
    items: ['Bug fixing', 'Performance optimization', 'Refactoring', 'Updates', 'Technical improvements'],
  },
  {
    title: 'Aplicaciones Móviles',
    description:
      'Desarrollo de aplicaciones móviles para Android e iOS con enfoques modernos y escalables.',
    items: ['Ionic', 'Capacitor', 'React Native', 'Flutter', 'Kotlin'],
  },
  {
    title: 'Diseño y Desarrollo Web',
    description:
      'Creación de landing pages, sitios corporativos, portales, e-commerce y aplicaciones web con foco en diseño, desarrollo, responsive, performance e integración.',
    items: ['Landing Pages', 'Corporate sites', 'Portals', 'E-commerce', 'Web apps'],
  },
  {
    title: 'Inteligencia Artificial y Generative AI',
    description:
      'Diseño e implementación de soluciones basadas en Inteligencia Artificial para integrar capacidades de GenAI en productos, aplicaciones y procesos empresariales.',
    featured: true,
    items: ['LLM Integrations', 'GenAI', 'RAG', 'Vector Databases', 'AI Assistants', 'Intelligent Agents', 'AI-powered APIs', 'Document Intelligence', 'Process Automation', 'Prompt Engineering'],
    stack: ['OpenAI', 'Mistral', 'LangChain', 'Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'Qdrant'],
  },
];

export const experience = [
  {
    company: 'Juztina',
    role: 'Full Stack Developer',
    period: 'Dic 2025 - Mar 2026',
    location: 'Estados Unidos',
    summary:
      'Desarrollo de plataforma multi-tenant con frontend moderno, backend en Python y componentes orientados a negocio para un sistema legal con IA.',
    technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind', 'Supabase', 'Python', 'FastAPI', 'pgvector', 'Qdrant', 'LangChain', 'Docker', 'Vercel'],
    highlights: [
      'Construcción de una plataforma multi-tenant con autenticación, RLS y PostgreSQL.',
      'Integración de LLMs y RAG para soporte legal asistido por IA.',
      'Despliegue en Vercel y contenedores Docker.',
    ],
  },
  {
    company: 'Fogata Group',
    role: 'Mobile Developer',
    period: 'Jul 2025 - Oct 2025',
    location: 'Panamá',
    summary:
      'Desarrollo de un MVP para el Ministerio de Turismo de Panamá con arquitectura modular y foco en experiencia móvil.',
    technologies: ['Angular', 'Ionic', 'REST APIs'],
    highlights: [
      'Arquitectura modular con lazy loading y componentes reutilizables.',
      'Optimicé la navegación para un flujo más claro y una UX más ágil.',
      'Integración de APIs REST para optimizar la experiencia de usuario.',
    ],
  },
  {
    company: 'Nrby',
    role: 'Frontend / Mobile Developer',
    period: 'Ago 2024 - Jul 2025',
    location: 'Estados Unidos',
    summary:
      'Desarrollo y mantenimiento de web apps y apps móviles con enfoque mobile-first e integración de servicios geográficos y notificaciones.',
    technologies: ['React', 'TypeScript', 'Ionic', 'Google Maps API', 'Leaflet', 'Firebase', 'TanStack Query'],
    highlights: [
      'Integración de mapas, push notifications y manejo asíncrono de estado.',
      'Colaboración en equipos SCRUM y resolución de incidentes.',
    ],
  },
  {
    company: 'Litermi',
    role: 'Frontend Developer',
    period: 'Abr 2024 - Jul 2024',
    location: 'Uruguay',
    summary:
      'Desarrollo y mantenimiento de apps Angular con arquitectura frontend y optimización de rendimiento.',
    technologies: ['Angular 12+', 'TypeScript', 'Angular Universal'],
    highlights: [
      'Proyectos Greenfield y coordinación con equipos multidisciplinarios.',
      'Mejoras de arquitectura y performance en aplicaciones existentes.',
    ],
  },
  {
    company: 'Panda ID Soluciones',
    role: 'Ingeniero de Software',
    period: 'Mar 2019 - Abr 2024',
    location: 'Venezuela',
    summary:
      'Liderazgo técnico en proyectos end-to-end con arquitectura, implementación, deployment y soporte de soluciones empresariales.',
    technologies: ['Node.js', 'Python', 'Redis', 'MQTT', 'Angular', 'React', 'Ionic', 'Flutter', 'Kotlin', 'PostgreSQL', 'MongoDB', 'Devo'],
    highlights: [
      'Arquitectura e implementación de soluciones con DDD y Arquitectura Hexagonal para sistemas distribuidos y microservicios.',
      'Desarrollé soluciones de data engineering con ETL e ingesta para analítica y dashboards personalizados.',
      'Mentoría a desarrolladores junior y optimización de consultas a bases de datos.',
    ],
  },
  {
    company: 'SocialGest',
    role: 'Frontend Developer',
    period: 'Sept 2017 - Mar 2018',
    location: 'Venezuela',
    summary: 'Desarrollo de interfaces con Angular/TypeScript e integración de APIs REST.',
    technologies: ['Angular', 'TypeScript', 'REST APIs'],
    highlights: ['Colaboración en equipos Scrum y entrega de funcionalidades de producto.'],
  },
  {
    company: 'Telefónica Venezuela',
    role: 'Practicante en Desarrollo Software',
    period: 'Sept 2016 - Feb 2017',
    location: 'Venezuela',
    summary:
      'Desarrollo de soluciones internas con Python/Django y MySQL, además de interfaces web con HTML, CSS, JavaScript y Bootstrap.',
    technologies: ['Python', 'Django', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    highlights: ['Primer contacto profesional con desarrollo de software en contexto empresarial.'],
  },
];

export const education = {
  title: 'Ingeniería de Sistemas',
  institution: 'Universidad Nacional Experimental Politécnica Antonio Jose de Sucre (UNEXPO)',
  period: '2010 - 2016',
  summary: 'Trabajo de grado orientado al control de estaciones de telecomunicaciones.',
};

export const certifications = [
  {
    title: 'Fundamentos de Ingeniero IA con Python',
    issuer: 'Código Facilito',
    date: 'Ago 2026',
    href: links.certPythonAi,
  },
  {
    title: 'Fundamentos de AWS',
    issuer: 'Código Facilito',
    date: 'Jul 2026',
    href: links.certAwsFundamentals,
  },
  {
    title: 'Scrum Master',
    issuer: 'Scrum Manager',
    date: 'Ago 2022',
    href: links.certScrumMaster,
  },
];

export const projects = [
  {
    title: 'Plataforma multi-tenant con IA legal',
    status: 'Caso real · Juztina',
    context: 'Sistema SaaS para Juztina',
    description:
      'Plataforma multi-tenant orientada a un sistema legal con IA, construido con frontend moderno, backend en Python y una arquitectura lista para escalar.',
    problem: 'El reto era habilitar una base de producto multi-tenant con autenticación, separación de datos y soporte para flujos asistidos por IA.',
    solution: 'Se desarrolló una solución con frontend moderno, backend en Python, PostgreSQL y componentes de RAG para soporte legal asistido por IA.',
    technology: ['Next.js 15', 'React 19', 'TypeScript', 'Supabase', 'Python', 'FastAPI', 'pgvector', 'Qdrant', 'LangChain', 'Docker'],
    result: 'Quedó una base de producto enfocada en multi-tenancy, seguridad y despliegue moderno en Vercel y contenedores.',
    demoHref: links.demoJuztina,
  },
  {
    title: 'MVP turístico móvil',
    status: 'Caso real · Fogata Group',
    context: 'Producto móvil para Fogata Group',
    description:
      'MVP móvil desarrollado para un contexto institucional, con foco en experiencia de usuario, modularidad y consumo de APIs.',
    problem: 'Se necesitaba una implementación ágil que ayudara a validar el producto y sostuviera una experiencia mobile-first.',
    solution: 'Se trabajó una arquitectura modular con Ionic y Angular, integrando APIs REST y componentes reutilizables para acelerar la entrega.',
    technology: ['Angular', 'Ionic', 'REST APIs', 'Modular architecture'],
    result: 'El proyecto consolidó una base móvil mantenible y preparada para iterar sobre nuevas capacidades de producto.',
    demoHref: links.demoFogataGroup,
  },
  {
    title: 'Plataformas web y mobile orientadas a operación',
    status: 'Caso real · Nrby',
    context: 'Experiencia web y mobile para Nrby',
    description:
      'Producto con foco en movilidad, mapas y notificaciones, combinando desarrollo web y móvil con integración de servicios geográficos.',
    problem: 'El producto requería una experiencia consistente entre web y mobile, con mapas, estado asíncrono y notificaciones.',
    solution: 'Se desarrollaron interfaces en React e Ionic con integración de Google Maps, Leaflet, Firebase y TanStack Query.',
    technology: ['React', 'TypeScript', 'Ionic', 'Google Maps API', 'Leaflet', 'Firebase', 'TanStack Query'],
    result: 'Se reforzó la experiencia de usuario en flujos geográficos y se sostuvo la evolución del producto en varios canales.',
    demoHref: links.demoNrby,
  },
];

export const skills = {
  Lenguajes: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'Dart', 'Kotlin', 'HTML', 'CSS'],
  Frontend: ['Angular', 'React', 'Next.js', 'TailwindCSS', 'State management', 'Responsive UI'],
  Backend: ['Node.js', 'Express.js', 'NestJS', 'FastAPI', 'Django', 'Microservicios', 'REST APIs', 'Auth', 'Arquitectura limpia'],
  Mobile: ['Ionic', 'Capacitor', 'React Native', 'Flutter', 'Kotlin'],
  Data: ['ETL', 'Big Data', 'Dashboards', 'CSV / Excel', 'Limpieza de datos', 'Devo'],
  Databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite'],
  'Cloud / Platforms': ['AWS', 'Firebase', 'Vercel', 'Render', 'Supabase', 'Neon'],
  'AI / GenAI': ['OpenAI', 'Prompt Engineering', 'LangChain', 'RAG', 'pgvector', 'Qdrant', 'LLM integrations'],
  Herramientas: ['Git', 'GitHub', 'GitLab', 'Postman', 'Swagger', 'Docker', 'CI/CD', 'Vite'],
};

export const contactLinks = [
  { label: 'CV — Español', description: 'Curriculum vitae profesional en español.', href: links.cvSpanish },
  { label: 'CV — English', description: 'Resume profesional en inglés.', href: links.cvEnglish },
  { label: 'LinkedIn', description: 'Perfil profesional y red de contactos.', href: links.linkedin },
  { label: 'GitHub', description: 'Código, repositorios y trabajos técnicos.', href: links.github },
];

export const commandActions = [
  { label: 'Ir a Inicio', target: 'home', type: 'scroll' },
  { label: 'Ir a Sobre mí', target: 'about', type: 'scroll' },
  { label: 'Ver Servicios', target: 'services', type: 'scroll' },
  { label: 'Ver Experiencia', target: 'experience', type: 'scroll' },
  { label: 'Ver Educación', target: 'education', type: 'scroll' },
  { label: 'Ver Proyectos', target: 'projects', type: 'scroll' },
  { label: 'Ver Tecnología', target: 'technology', type: 'scroll' },
  { label: 'Ver Portafolio', target: 'portfolio', type: 'scroll' },
  { label: 'Ir a Contacto', target: 'contact', type: 'scroll' },
  { label: 'Solicitar cotización', href: links.quoteForm, type: 'link' },
  { label: 'Agendar consulta', href: links.calendly, type: 'link' },
  { label: 'Ver portafolio completo', href: links.portfolioDrive, type: 'link' },
  { label: 'Descargar CV — Español', href: links.cvSpanish, type: 'link' },
  { label: 'Descargar CV — English', href: links.cvEnglish, type: 'link' },
  { label: 'Abrir LinkedIn', href: links.linkedin, type: 'link' },
  { label: 'Contactar por WhatsApp', href: links.whatsapp, type: 'link' },
];
