import type { CertificationSeedData } from '../interfaces/certificationSeedData';

import { CertificationSlug } from './certificationSlug';

export const certifications: CertificationSeedData[] = [
  {
    slug: CertificationSlug.NextJsSupabaseMasteryBuildFullstackApps,
    issueDate: '2026-06-25',
    url: 'https://www.udemy.com/certificate/UC-eaa0812d-ce13-4fca-afe3-0f05d4a359f1/',
    credentialID: 'UC-eaa0812d-ce13-4fca-afe3-0f05d4a359f1',

    image: 'udemy.jpg',

    skills: ['NextJS', 'ReactJS', 'PostgreSQL', 'Zod', 'TS'],

    translations: {
      pl: {
        title:
          'Next.js & Supabase - Poziom Mistrzowski: Budowa aplikacji Full-Stack',

        provider: 'Udemy - Instruktor: Piotr Jura',

        description:
          'Kurs tworzenia pełnoprawnych aplikacji full-stack z wykorzystaniem Next.js i Supabase. Obejmował architekturę aplikacji, Server Components, Server Actions, PostgreSQL, autentykację, obsługę plików, walidację formularzy z Zod, zabezpieczenia RLS, Tailwind CSS, optymalizację wydajności, SEO oraz deployment na Vercel.',
      },

      en: {
        title: 'Next.js & Supabase Mastery: Build 2 Full-Stack Apps',

        provider: 'Udemy - Instructors: Piotr Jura',

        description:
          'Course on building production-ready full-stack applications with Next.js and Supabase. Covered application architecture, Server Components, Server Actions, PostgreSQL, authentication, file storage, Zod form validation, Row Level Security, Tailwind CSS, performance optimization, SEO, and deployment on Vercel.',
      },
    },
  },

  {
    slug: CertificationSlug.NestJsMicroservicesScaleableBackend,
    issueDate: '2025-05-31',
    url: 'https://www.udemy.com/certificate/UC-9ef640b6-39b5-40b6-ac04-171756e6eebb/',
    credentialID: 'UC-9ef640b6-39b5-40b6-ac04-171756e6eebb',

    image: 'udemy.jpg',

    skills: [
      'NestJS',
      'Microservices',
      'Docker',
      'AWS',
      'GCP',
      'GRPC',
      'GraphQL',
      'MongoDB',
      'TS',
    ],

    translations: {
      pl: {
        title: 'Nest.js Mikroserwisy: Budowa i wdrażanie skalowalnego backendu',

        provider: 'Udemy - Instruktor: Michael Guay',

        description:
          'Kurs budowy skalowalnych, produkcyjnych aplikacji backendowych w architekturze mikroserwisowej z wykorzystaniem NestJS. Obejmował projektowanie i wdrażanie mikroserwisów, komunikację przez RabbitMQ i gRPC, API Gateway z GraphQL Federation, autoryzację JWT, integrację płatności, konteneryzację Docker, CI/CD oraz deployment w środowiskach chmurowych.',
      },

      en: {
        title: 'Nest.js Microservices: Build & Deploy a Scaleable Backend',

        provider: 'Udemy - Instructors: Michael Guay',

        description:
          'Course on building scalable, production-grade backend applications using NestJS microservices architecture. Covered microservice design and deployment, RabbitMQ and gRPC communication, GraphQL Federation API Gateway, JWT authentication, payment integration, Docker containerization, CI/CD pipelines, and cloud deployment.',
      },
    },
  },

  {
    slug: CertificationSlug.NestJsUltimateMasterclass,
    issueDate: '2025-04-28',
    url: 'https://www.udemy.com/certificate/UC-c7beeb38-645f-447a-910a-b8388c1bf355/',
    credentialID: 'UC-c7beeb38-645f-447a-910a-b8388c1bf355',

    image: 'udemy.jpg',

    skills: ['NestJS', 'PostgreSQL', 'Docker', 'TS'],

    translations: {
      pl: {
        title: 'Master Nest.js – Kompleksowy Kurs Mistrzowski 2025',
        provider: 'Udemy - Instruktor: Piotr Jura',

        description:
          'Kurs tworzenia i wdrażania produkcyjnych API w NestJS z wykorzystaniem TypeScript, TypeORM, PostgreSQL i Docker. Obejmował budowę REST i GraphQL API, autoryzację JWT, testy jednostkowe i E2E, walidację danych, optymalizację wydajności, logowanie aplikacji oraz przygotowanie aplikacji do wdrożenia.',
      },

      en: {
        title: 'Master Nest.js Ultimate Masterclass 2025',
        provider: 'Udemy - Instructors: Piotr Jura',

        description:
          'Course on building and deploying production-ready APIs with NestJS, TypeScript, TypeORM, PostgreSQL, and Docker. Covered REST and GraphQL API development, JWT authentication, unit and E2E testing, data validation, performance optimization, application logging, and deployment preparation.',
      },
    },
  },

  {
    slug: CertificationSlug.BlazorDeepDiveDotNet8,
    issueDate: '2025-03-27',
    url: 'https://www.udemy.com/certificate/UC-22caa334-e40c-4e8e-96b8-d4bf617b7e98/',
    credentialID: 'UC-22caa334-e40c-4e8e-96b8-d4bf617b7e98',

    image: 'udemy.jpg',

    skills: ['Blazor', 'CSharp', 'DotNet'],

    translations: {
      pl: {
        title:
          'Blazor Deep Dive – Od początkującego do zaawansowanego w .NET 9',

        provider: 'Udemy - Instruktor: Frank Liu',

        description:
          'Kurs zaawansowanego tworzenia aplikacji webowych w technologii Blazor na platformie .NET 9. Obejmował komponenty Razor, modele renderowania SSR i WebAssembly, routing, zarządzanie stanem, obsługę formularzy, walidację, komunikację z API, Entity Framework Core, uwierzytelnianie i autoryzację.',
      },

      en: {
        title: 'Blazor Deep Dive - From Beginner to Advanced in .NET 9',

        provider: 'Udemy - Instructors: Frank Liu',

        description:
          'Advanced course on building web applications with Blazor in .NET 9. Covered Razor components, SSR and WebAssembly rendering models, routing, state management, forms and validation, API communication, Entity Framework Core, authentication, and authorization.',
      },
    },
  },

  {
    slug: CertificationSlug.DeployNodeJsOnVps,
    issueDate: '2025-02-06',
    url: 'https://www.udemy.com/certificate/UC-9ca9ca52-cf3b-4dfa-b192-7767788e60b2/',
    credentialID: 'UC-9ca9ca52-cf3b-4dfa-b192-7767788e60b2',

    image: 'udemy.jpg',

    skills: ['TS', 'NodeJS', 'Docker', 'VPS'],

    translations: {
      pl: {
        title: 'Wdrażanie aplikacji Node.js na serwerze VPS',
        provider: 'Udemy - Instruktor: Adrian Bienias',

        description:
          'Kurs wdrażania aplikacji Node.js na serwerach VPS z systemem Linux Ubuntu. Obejmował konfigurację środowiska serwerowego, zarządzanie wersjami Node.js przez NVM, pracę z GitHub, konfigurację domen i certyfikatów SSL/TLS, wykorzystanie Nginx Proxy Manager oraz podstawy Dockera.',
      },

      en: {
        title: 'Deploying a Node.js Application on a VPS Server',

        provider: 'Udemy - Instructors: Adrian Bienias',

        description:
          'Course on deploying Node.js applications to VPS servers running Linux Ubuntu. Covered server environment configuration, Node.js version management with NVM, GitHub repository workflows, domain and SSL/TLS certificate setup, Nginx Proxy Manager, and Docker fundamentals.',
      },
    },
  },

  {
    slug: CertificationSlug.PostgreSqlDatabaseDesign,
    issueDate: '2025-01-06',
    url: 'https://ude.my/UC-68bca8f0-67ad-437d-803b-2e34de5e33a4',
    credentialID: 'UC-68bca8f0-67ad-437d-803b2e34de5e33a4',

    image: 'udemy.jpg',

    skills: ['PostgreSQL'],

    translations: {
      pl: {
        title: 'PostgreSQL – Projektowanie baz danych',
        provider: 'Udemy - Instruktor: Rafał Mobilo',

        description:
          'Kurs projektowania logicznej warstwy baz danych w PostgreSQL. Obejmował modelowanie tabel i relacji, projektowanie constraints, widoków, indeksów, funkcji, procedur i triggerów oraz zagadnienia optymalizacji, refaktoryzacji i migracji baz danych.',
      },

      en: {
        title: 'PostgreSQL - Database Design',
        provider: 'Udemy - Instructors: Rafał Mobilo',

        description:
          'Course on logical database design in PostgreSQL. Covered data modeling, table relationships, constraints, views, indexes, functions, procedures, triggers, as well as database optimization, refactoring, and migration concepts.',
      },
    },
  },

  {
    slug: CertificationSlug.NodeJsCompleteCourse,
    issueDate: '2022-02-02',
    credentialID: 'CERT61FAEFFB86876',

    image: 'ts.jpg',

    skills: ['NodeJS'],

    translations: {
      pl: {
        title: 'Node.js – Kompletny kurs',
        provider: 'TS Code Sp. z o.o.',

        description:
          'Kurs tworzenia aplikacji backendowych w Node.js z wykorzystaniem Express i MongoDB. Obejmował budowę REST API, autoryzację, pracę z formularzami, obsługę plików, bezpieczeństwo aplikacji, konfigurację serwera HTTPS oraz deployment.',
      },

      en: {
        title: 'Node.js – Complete Course',
        provider: 'TS Code Sp. z o.o.',

        description:
          'Course on backend development with Node.js using Express and MongoDB. Covered REST API development, authentication, form handling, file management, application security, HTTPS server configuration, and deployment.',
      },
    },
  },

  {
    slug: CertificationSlug.ReactJsCompleteCourse,
    issueDate: '2021-09-26',
    credentialID: 'CERT6150D21240D7D',

    image: 'ts.jpg',

    skills: ['ReactJS'],

    translations: {
      pl: {
        title: 'React.js – Kompletny kurs',
        provider: 'TS Code Sp. z o.o.',

        description:
          'Kurs tworzenia aplikacji frontendowych w React 19. Obejmował architekturę komponentów, zarządzanie stanem, hooki, routing, formularze, autentykację, integrację z backendem, debugowanie oraz wdrażanie aplikacji.',
      },

      en: {
        title: 'React.js – Complete Course',
        provider: 'TS Code Sp. z o.o.',

        description:
          'Course on frontend development with React 19. Covered component architecture, state management, hooks, routing, forms, authentication, backend integration, debugging, and application deployment.',
      },
    },
  },

  {
    slug: CertificationSlug.SiemensS71500Advanced,
    issueDate: '2020-05-07',
    credentialID: '47155',

    image: 'emtSystems.jpg',

    skills: ['PLCProgramming', 'TiaPortal', 'SCL', 'STL', 'LAD'],

    translations: {
      pl: {
        title: 'Kurs zaawansowany programowania Siemens Simatic S7-1500',

        provider: 'EMT-Systems Centrum Szkoleń Inżynierskich',

        description:
          'Zaawansowany kurs programowania sterowników PLC Siemens S7-1500 z wykorzystaniem środowiska TIA Portal. Obejmował konfigurację sprzętu, pracę z blokami FB/DB/OB, diagnostykę PLC, obsługę sygnałów analogowych, przerwań, zarządzanie pamięcią, zabezpieczenia, monitorowanie zmiennych oraz zaawansowane narzędzia serwisowe i projektowe.',
      },

      en: {
        title: 'Siemens Simatic S7-1500 Programming - Advanced Course',

        provider: 'EMT-Systems Engineering Training Center',

        description:
          'Advanced course on Siemens S7-1500 PLC programming using the TIA Portal environment. Covered hardware configuration, FB/DB/OB blocks, PLC diagnostics, analog signals, interrupts, memory management, security features, variable monitoring, and advanced engineering and maintenance tools.',
      },
    },
  },

  {
    slug: CertificationSlug.ModernMethodsOfPlcProgramming,
    issueDate: '2019-04-09',

    image: 'bAndR.jpg',

    skills: ['PLCProgramming', 'SCL', 'LAD'],

    translations: {
      pl: {
        title: 'Nowoczesne metody programowania PLC',
        provider: 'B&R Industrial Automation',

        description:
          'Szkolenie z nowoczesnych metod programowania sterowników PLC w środowisku B&R Automation Studio. Obejmowało strukturę projektów PLC, projektowanie modułowego oprogramowania, wykorzystanie bibliotek technologicznych oraz integrację sterowników z zewnętrznymi narzędziami automatyki.',
      },

      en: {
        title: 'Modern Methods of PLC Programming',
        provider: 'B&R Industrial Automation',

        description:
          'Training on modern PLC programming methods using the B&R Automation Studio environment. Covered PLC project structure, modular software design, technology libraries, and integration of controllers with external automation tools.',
      },
    },
  },

  {
    slug: CertificationSlug.IqrfWirelessProgramming,
    issueDate: '2018-11-28',

    image: 'iqrf.jpg',

    skills: ['IQRF'],

    translations: {
      pl: {
        title:
          'Programowanie i sieci przy użyciu technologii bezprzewodowej IQRF',

        provider: 'IQRF Tech',

        description:
          'Kurs tworzenia i programowania bezprzewodowych sieci IoT z wykorzystaniem technologii IQRF. Obejmował konfigurację modułów DCTR-72DAT, pracę z IQRF IDE 4, programowanie urządzeń, komunikację sieciową oraz budowę i testowanie sieci bezprzewodowej z przesyłaniem danych pomiarowych.',
      },

      en: {
        title: 'Programming and Networking Using IQRF Wireless Technology',

        provider: 'IQRF Tech',

        description:
          'Course on developing and programming wireless IoT networks using IQRF technology. Covered DCTR-72DAT module configuration, IQRF IDE 4 environment, device programming, network communication, and building and testing wireless networks for sensor data transmission.',
      },
    },
  },

  {
    slug: CertificationSlug.PLCProgrammingAndDesigningProcessVisualizations,
    issueDate: '2018-04-17',

    image: 'aiut.jpg',

    skills: ['PLCProgramming', 'TiaPortal', 'STL', 'LAD'],

    translations: {
      pl: {
        title:
          'Podstawy programowania sterowników PLC rodziny SIMATIC S7 i projektowania wizualizacji procesów',

        provider: 'Aiut Sp. z o.o.',

        description:
          'Kurs programowania sterowników PLC Siemens SIMATIC S7 oraz projektowania wizualizacji procesów przemysłowych. Obejmował konfigurację sterowników S7-300/S7-1500, programowanie w języku LAD w środowiskach Step 7 i TIA Portal oraz tworzenie i obsługę wizualizacji HMI z wykorzystaniem WinCC Flexible i TIA Portal.',
      },

      en: {
        title:
          'Programming Simatic S7 PLC Controllers and Designing Process Visualizations',

        provider: 'Aiut Sp. z o.o.',

        description:
          'Course on Siemens SIMATIC S7 PLC programming and industrial process visualization design. Covered S7-300/S7-1500 controller configuration, LAD programming in Step 7 and TIA Portal environments, and creating and operating HMI visualizations using WinCC Flexible and TIA Portal.',
      },
    },
  },

  {
    slug: CertificationSlug.ProgrammingMachineToolsInMTSSystemCNC,
    issueDate: '2015-06-26',

    image: 'mts.jpg',

    skills: ['CADCAM'],

    translations: {
      pl: {
        title: 'Programowanie obrabiarek w systemie MTS - CNC CAD/CAM',

        provider: 'MTS Mathematisch Technische Software-Entwicklung GmbH',

        description:
          'Kurs programowania obrabiarek CNC z wykorzystaniem systemu MTS CAD/CAM. Obejmował obsługę symulatorów toczenia i frezowania, tworzenie programów NC, wykorzystanie cykli obróbkowych, programowanie WOP, zarządzanie narzędziami, symulację 3D oraz optymalizację ścieżek ruchu narzędzi.',
      },

      en: {
        title: 'Programming Machine Tools in MTS System – CNC CAD/CAM',

        provider: 'MTS Mathematisch Technische Software-Entwicklung GmbH',

        description:
          'Course on CNC machine programming using the MTS CAD/CAM system. Covered turning and milling simulation, NC programming, machining cycles, WOP contour programming, tool library management, 3D simulation, and optimization of tool paths.',
      },
    },
  },

  {
    slug: CertificationSlug.HowToEarnFromWebsites,
    issueDate: '2022-02-12',

    image: 'ts.jpg',

    skills: ['Documentation', 'SalesSupport'],

    translations: {
      pl: {
        title:
          'Jak zarabiać na stronach internetowych i pracować jako Freelancer',

        provider: 'TS Code Sp. z o.o.',

        description:
          'Kurs dotyczący pracy freelancera przy realizacji projektów stron internetowych. Obejmował pozyskiwanie klientów, komunikację i analizę wymagań, wycenę projektów, przygotowanie umów i ofert, organizację procesu tworzenia stron, hosting, portfolio oraz rozliczenia z klientami.',
      },

      en: {
        title: 'How to earn from websites and work as a Freelancer',

        provider: 'TS Code Sp. z o.o.',

        description:
          'Course focused on freelancing in web development projects. Covered client acquisition, requirements gathering, project estimation, contracts and proposals, website development workflow organization, hosting, portfolio preparation, and client management.',
      },
    },
  },
];
