import type { ProjectSeedData } from '../interfaces/projectSeedData';

import { controllingAgvUsingGestureRecognitionAndVoiceAnalysisContentEn } from './projectContents';
import { controllingAgvUsingGestureRecognitionAndVoiceAnalysisContentPl } from './projectContents';
import { automatisationOfProductionSystemsWithUsageOfAgvContentEn } from './projectContents';
import { automatisationOfProductionSystemsWithUsageOfAgvContentPl } from './projectContents';
import { curriculumVitaeGeneratorContentEn } from './projectContents';
import { curriculumVitaeGeneratorContentPl } from './projectContents';
import { fullStackNurseryWebAppContentEn } from './projectContents';
import { fullStackNurseryWebAppContentPl } from './projectContents';
import { portfolioApplicationContentEn } from './projectContents';
import { portfolioApplicationContentPl } from './projectContents';
import { binderApplicationContentEn } from './projectContents';
import { binderApplicationContentPl } from './projectContents';
import { invoiceGeneratorV1ContentEn } from './projectContents';
import { invoiceGeneratorV1ContentPl } from './projectContents';
import { findingPathAiContentEn } from './projectContents';
import { findingPathAiContentPl } from './projectContents';
import { amaranthusAgvContentEn } from './projectContents';
import { amaranthusAgvContentPl } from './projectContents';
import { ProjectSlug } from './projectSlug';
import { LinkKey } from './linkKey';

export const projects: ProjectSeedData[] = [
  {
    slug: ProjectSlug.InvoiceGeneratorV1,
    category: 'IT',
    startDate: '2021-11-12T12:00:00.000Z',
    endDate: '2023-03-15T12:00:00.000Z',
    thumbnail: 'project-banners/invoice-generator-preview.png',

    skills: [
      'DevExtremeReact',
      'CRA',
      'NestJS',
      'DB',
      'Git',
      'ReactJS',
      'Docker',
      'ORM',
      'TS',
      'TypeORM',
      'SQLite',
      'Redux',
      'PdfMake',
    ],

    coreSkills: ['ReactJS', 'NestJS', 'SQLite', 'DevExtremeReact', 'PdfMake'],

    links: [LinkKey.InvoiceGeneratorV1Github],

    translations: {
      pl: {
        name: 'Generator Faktur',
        content: invoiceGeneratorV1ContentPl,
        description:
          'Invoice Generator is a web application for creating PDF invoices and protocols. It allows users to quickly generate documents based on company, client, and service data, automatically calculating taxes and gross values. The application also provides email invoice delivery, local PDF storage, and an archive module with income analysis features.',
      },

      en: {
        name: 'Invoice Generator',
        content: invoiceGeneratorV1ContentEn,
        description:
          'Invoice Generator is a web application for creating PDF invoices and protocols. It allows users to quickly generate documents based on company, client, and service data, automatically calculating taxes and gross values. The application also provides email invoice delivery, local PDF storage, and an archive module with income analysis features.',
      },
    },
  },

  {
    slug: ProjectSlug.AmaranthusAgv,
    category: 'Mechatronics',
    startDate: '2019-12-07T12:00:00.000Z',
    endDate: '2021-07-18T12:00:00.000Z',
    thumbnail: 'project-banners/amaranthus-agv.png',

    skills: [
      'AGV',
      'Documentation',
      'ExpressJS',
      'JS',
      'CRA',
      'Bootstrap',
      'ReactJS',
      'SASS',
      'WS',
      'LAD',
      'SCL',
      'Git',
      'STL',
      'PLCProgramming',
      'NodeJS',
      'J5',
      'Fusion360',
      'Eagle',
      'Print3D',
      'Linux',
      'TiaPortal',
      'LabView',
    ],

    coreSkills: ['AGV', 'ReactJS', 'ExpressJS', 'J5'],

    links: [LinkKey.AmaranthusAgvGithub],

    translations: {
      pl: {
        name: `Autonomiczny pojazd AGD “Amaranthus”`,
        content: amaranthusAgvContentPl,
        description:
          'An autonomous vehicle project developed as a part of a smart home system, including both implementation and research components. The project involved designing and building a robotic platform, developing safety systems, route recording and replay mechanisms, and creating a mathematical battery discharge model.',
      },

      en: {
        name: 'Automated Guided Vehicle “Amaranthus”',
        content: amaranthusAgvContentEn,
        description:
          'An autonomous vehicle project developed as a part of a smart home system, including both implementation and research components. The project involved designing and building a robotic platform, developing safety systems, route recording and replay mechanisms, and creating a mathematical battery discharge model.',
      },
    },
  },

  {
    slug: ProjectSlug.PortfolioApplication,
    category: 'IT',
    startDate: '2026-07-01T12:00:00.000Z',
    isCurrent: true,
    thumbnail: 'project-banners/portfolio-preview.png',

    skills: [
      'DB',
      'Git',
      'Docker',
      'Drizzle',
      'VPS',
      'NextJS',
      'ORM',
      'PayloadCMS',
      'PostgreSQL',
      'ReactJS',
      'SASS',
      'TS',
    ],

    coreSkills: ['NextJS', 'PostgreSQL', 'PayloadCMS'],

    links: [LinkKey.PortfolioApplicationGithub],

    translations: {
      pl: {
        name: `Aplikacja Portfolio`,
        content: portfolioApplicationContentPl,
        description:
          'A full-stack personal portfolio built with Next.js, React, Payload CMS, and PostgreSQL. Developed entirely from scratch without external libraries, including a fully integrated CMS and database-driven content. It showcases my experience, education, courses, certifications, and projects, with contact information and a functional contact form. The application achieves 100/100 Lighthouse scores across all categories.',
      },

      en: {
        name: 'Portfolio Application',
        content: portfolioApplicationContentEn,
        description:
          'A full-stack personal portfolio built with Next.js, React, Payload CMS, and PostgreSQL. Developed entirely from scratch without external libraries, including a fully integrated CMS and database-driven content. It showcases my experience, education, courses, certifications, and projects, with contact information and a functional contact form. The application achieves 100/100 Lighthouse scores across all categories.',
      },
    },
  },

  {
    slug: ProjectSlug.FindingPathAi,
    category: 'IT',
    startDate: '2023-05-16T12:00:00.000Z',
    endDate: '2023-05-16T12:00:00.000Z',
    thumbnail: 'project-banners/finding-path-ai-preview.jpg',

    skills: ['AI', 'TS', 'ReactJS', 'NextJS', 'YukaJS', 'ThreeJS'],

    coreSkills: ['NextJS', 'YukaJS', 'ThreeJS'],

    links: [LinkKey.FindingPathAiGithub],

    translations: {
      pl: {
        name: 'AI wyszukiwania ścieżki',
        content: findingPathAiContentPl,
        description:
          'Prototype of the movement engine, including a movement system with pathfinding. The Yuka.js library is used to calculate the shortest paths utilizing a navigation mesh.',
      },

      en: {
        name: 'Finding Path AI',
        content: findingPathAiContentEn,
        description:
          'Prototype of the movement engine, including a movement system with pathfinding. The Yuka.js library is used to calculate the shortest paths utilizing a navigation mesh.',
      },
    },
  },

  {
    slug: ProjectSlug.CurriculumVitaeGenerator,
    category: 'IT',
    startDate: '2025-01-17T12:00:00.000Z',
    endDate: '2025-11-09T12:00:00.000Z',
    thumbnail: 'project-banners/cv-generator-preview.png',

    skills: ['AntDReact', 'TS', 'ReactJS', 'Vite', 'Zustand', 'PdfMake', 'Git'],

    coreSkills: ['AntDReact', 'PdfMake', 'Zustand'],

    links: [
      LinkKey.CurriculumVitaeGenerator,
      LinkKey.CurriculumVitaeGeneratorGithub,
    ],

    translations: {
      pl: {
        name: 'Generator Curriculum Vitae',
        content: curriculumVitaeGeneratorContentPl,
        description:
          'A web application for creating and generating personalized CVs as downloadable PDF files. It features a real-time PDF preview, customizable colors and layouts, and local configuration storage, allowing users to safely save and continue their work without storing any personal data.',
      },

      en: {
        name: 'Curriculum Vitae Generator',
        content: curriculumVitaeGeneratorContentEn,
        description:
          'A web application for creating and generating personalized CVs as downloadable PDF files. It features a real-time PDF preview, customizable colors and layouts, and local configuration storage, allowing users to safely save and continue their work without storing any personal data.',
      },
    },
  },

  {
    slug: ProjectSlug.FullStackNurseryWebApp,
    category: 'IT',
    startDate: '2025-03-24T12:00:00.000Z',
    endDate: '2025-06-18T12:00:00.000Z',
    thumbnail: 'project-banners/full-stack-nursery-web-app.png',

    skills: [
      'AntDReact',
      'Leaflet',
      'TS',
      'ReactJS',
      'Vite',
      'SanityCMS',
      'ExpressJS',
      'SalesSupport',
      'Git',
    ],

    coreSkills: ['ReactJS', 'AntDReact', 'SanityCMS'],

    links: [LinkKey.NurseryWebAppBuild],

    translations: {
      pl: {
        name: 'Full-stack Aplikacja Internetowa Żłobka',
        content: fullStackNurseryWebAppContentPl,
        description:
          'Full-stack web application built with React, TypeScript, Express.js, and Sanity CMS. Developed independently, including frontend, backend API, CMS integration, deployment, and system configuration, with a focus on performance, accessibility, SEO, and responsive design.',
      },

      en: {
        name: 'Full-Stack Nursery Web Application',
        content: fullStackNurseryWebAppContentEn,
        description:
          'Full-stack web application built with React, TypeScript, Express.js, and Sanity CMS. Developed independently, including frontend, backend API, CMS integration, deployment, and system configuration, with a focus on performance, accessibility, SEO, and responsive design.',
      },
    },
  },

  {
    slug: ProjectSlug.BinderApplication,
    category: 'IT',
    startDate: '2017-09-05',
    endDate: '2017-10-02',
    thumbnail: 'project-banners/binder-ad.jpg',

    skills: ['MMF2Dev'],

    coreSkills: ['MMF2Dev'],

    translations: {
      pl: {
        name: 'Aplikacja “Binder”',
        content: binderApplicationContentPl,
        description:
          'A lightweight desktop automation application for recording and replaying keyboard and mouse actions. It captures precise mouse coordinates, keyboard input, configurable delays, loops, clipboard operations, and window controls, while providing an editable text-based automation format. Designed to automate repetitive workflows and execute predefined sequences reliably, with a simple and flexible command system that can be extended to support various use cases.',
      },

      en: {
        name: '“Binder” Application',
        content: binderApplicationContentEn,
        description:
          'A lightweight desktop automation application for recording and replaying keyboard and mouse actions. It captures precise mouse coordinates, keyboard input, configurable delays, loops, clipboard operations, and window controls, while providing an editable text-based automation format. Designed to automate repetitive workflows and execute predefined sequences reliably, with a simple and flexible command system that can be extended to support various use cases.',
      },
    },
  },

  {
    slug: ProjectSlug.ControllingAgvUsingGestureRecognitionAndVoiceAnalysis,
    category: 'Education',
    startDate: '2020-05-20',
    endDate: '2021-02-17',
    thumbnail:
      'project-banners/controlling-agv-using-gesture-recognition-and-voice-analysis-ad.jpg',

    skills: ['Python', 'AGV', 'LabView', 'Git', 'Documentation', 'AI'],

    coreSkills: ['AI', 'AGV', 'Python'],

    links: [LinkKey.UsingGestureRecognitionForAgvControlPublication],

    translations: {
      pl: {
        name: 'Sterowanie AGV za pomocą gestów oraz przetwarzania mowy',
        content: controllingAgvUsingGestureRecognitionAndVoiceAnalysisContentPl,
        description:
          'Developed an intelligent AGV control system integrating 2D/3D gesture and voice recognition with autonomous vehicle control. Worked with Python, C#, LabVIEW, OpenCV, TensorFlow, Adaptive Vision Studio, and neural networks, covering data acquisition, preprocessing, classification, model training, and system integration. Implemented communication between vision, speech, and control modules and integrated the solutions with the AGV platform, including its motor control and operator interface.',
      },

      en: {
        name: 'Controlling an AGV using gesture recognition and voice analysis',
        content: controllingAgvUsingGestureRecognitionAndVoiceAnalysisContentEn,
        description:
          'Developed an intelligent AGV control system integrating 2D/3D gesture and voice recognition with autonomous vehicle control. Worked with Python, C#, LabVIEW, OpenCV, TensorFlow, Adaptive Vision Studio, and neural networks, covering data acquisition, preprocessing, classification, model training, and system integration. Implemented communication between vision, speech, and control modules and integrated the solutions with the AGV platform, including its motor control and operator interface.',
      },
    },
  },

  {
    slug: ProjectSlug.AutomatisationOfProductionSystemsWithUsageOfAgv,
    category: 'Education',
    startDate: '2018-09-01',
    endDate: '2020-01-23',
    thumbnail:
      'project-banners/automatisation-of-production-systems-with-usage-of-agv-banner.jpg',

    skills: [
      'AGV',
      'ModbusProtocol',
      'CommunicationTCPIP',
      'Documentation',
      'TiaPortal',
      'SCL',
      'STL',
      'LAD',
    ],

    coreSkills: ['AGV', 'TiaPortal'],

    links: [
      LinkKey.AutomatisationOfProductionSystemsWithUsageOfAgvRelatedExperience,
    ],

    translations: {
      pl: {
        name: 'System automatyzacji linii produkcyjnych z wykorzystaniem AGV',
        content: automatisationOfProductionSystemsWithUsageOfAgvContentPl,
        description:
          "Prototyped an automatic detail order system utilizing automated guided vehicles (AGVs) on the assembly line. The solution enhances safety on the production line by reducing the number of employees required. The project includes an analysis of communication methods between programmable logic controllers (PLCs). This analysis enabled the adaptation of methodologies to the system's operating principles in accordance with the designated design assumptions.",
      },

      en: {
        name: 'Automatisation of production systems with usage of AGV',
        content: automatisationOfProductionSystemsWithUsageOfAgvContentEn,
        description:
          "Prototyped an automatic detail order system utilizing automated guided vehicles (AGVs) on the assembly line. The solution enhances safety on the production line by reducing the number of employees required. The project includes an analysis of communication methods between programmable logic controllers (PLCs). This analysis enabled the adaptation of methodologies to the system's operating principles in accordance with the designated design assumptions.",
      },
    },
  },
];
