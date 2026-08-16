import type { ExperienceStepSeedData } from '../interfaces/experienceStepSeedData';

import { ExperienceStepSlug } from './experienceStepSlug';

export const experienceSteps: ExperienceStepSeedData[] = [
  {
    slug: ExperienceStepSlug.AiutFrontendProgrammer,
    startDate: '2021-07-01',
    isCurrent: true,
    locationType: 'Hybrid',
    employmentType: 'FullTime',

    skills: [
      'ReactJS',
      'Angular',
      'Blazor',
      'DotNet',
      'CRA',
      'Vite',
      'CSharp',
      'TS',
      'AntDReact',
      'AntDBlazor',
      'MaterialUI',
      'DevExtremeReact',
      'DevExtremeAngular',
      'Leaflet',
      'PdfMake',
      'ThreeJS',
      'Redux',
      'Zustand',
      'Docker',
      'PostgreSQL',
      'Documentation',
      'SalesSupport',
    ],

    translations: {
      pl: {
        position: 'Programista Front-end',
        company: 'AIUT Sp. z o.o.',
        location: 'Gliwice, Woj. Śląskie, Polska',
        description:
          'Tworzenie aplikacji webowych z użyciem React, Angular oraz Blazor. Projektowanie API i integracja systemów przemysłowych.',
        duties: [
          'Tworzenie aplikacji webowych dla systemów przemysłowych związanych z zarządzaniem i monitoringiem urządzeń IoT.',
          'Budowanie współdzielonych bibliotek komponentów i modeli.',
          'Projektowanie struktur danych API.',
          'Konfiguracja narzędzi projektowych (TypeScript, Vite, CRA, Angular CLI, ESLint, Prettier).',
          'Code review i mentoring zespołu.',
          'Pisanie testów jednostkowych i e2e (Jest, Cypress).',
          'Udział w spotkaniach z klientami.',
          'Tworzenie dokumentacji technicznej.',
        ],
      },

      en: {
        position: 'Front-end Programmer',
        company: 'AIUT Sp. z o.o.',
        location: 'Gliwice, Silesia, Poland',
        description:
          'Developing web applications using React, Angular, and Blazor frameworks. Designing APIs and industrial system integrations.',
        duties: [
          'Developing web applications for industrial IoT management and monitoring systems.',
          'Creating shared component libraries and reusable models.',
          'Designing API data structures.',
          'Setting up project tooling (TypeScript, Vite, CRA, Angular CLI, ESLint, Prettier).',
          'Conducting code reviews and mentoring team members.',
          'Writing unit and end-to-end tests (Jest, Cypress).',
          'Participating in client meetings.',
          'Preparing technical documentation.',
        ],
      },
    },
  },

  {
    slug: ExperienceStepSlug.AiutPlcProgrammer,
    startDate: '2018-07-01',
    endDate: '2021-07-01',
    isCurrent: false,
    locationType: 'OnSite',
    employmentType: 'Freelance',

    skills: [
      'PLCProgramming',
      'SCL',
      'STL',
      'LAD',
      'Python',
      'TiaPortal',
      'FactoryIO',
      'AGV',
      'Fanuc',
      'Documentation',
    ],

    translations: {
      pl: {
        position: 'Programista PLC',
        company: 'AIUT Sp. z o.o.',
        location: 'Gliwice, Woj. Śląskie, Polska',
        description:
          'Programowanie sterowników PLC Siemens oraz systemów automatyki przemysłowej.',
        duties: [
          'Tworzenie oprogramowania PLC dla linii produkcyjnych.',
          'Symulacje projektów w środowisku Factory I/O.',
          'Programowanie AGV i robotów przemysłowych (Fanuc).',
          'Integracja systemów z pojazdami AGV.',
          'Prototypowanie rozwiązań elektronicznych IoT.',
          'Przygotowywanie dokumentacji i materiałów szkoleniowych.',
          'Szkolenie techników automatyki.',
        ],
      },

      en: {
        position: 'PLC Programmer',
        company: 'AIUT Sp. z o.o.',
        location: 'Gliwice, Silesia, Poland',
        description:
          'Developing Siemens PLC software and industrial automation systems.',
        duties: [
          'Developing PLC software for production lines.',
          'Simulating projects in Factory I/O.',
          'Programming AGVs and industrial robots (Fanuc).',
          'Integrating automation systems with AGV vehicles.',
          'Prototyping IoT electronic solutions.',
          'Preparing documentation and training materials.',
          'Training automation technicians.',
        ],
      },
    },
  },
];
