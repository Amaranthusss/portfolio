import type { EducationStepSeedData } from '../interfaces/educationStepSeedData';

import { EducationStepSlug } from './educationStepSlug';

export const educationSteps: EducationStepSeedData[] = [
  {
    slug: EducationStepSlug.MasterOfScienceInEngineering,
    startDate: '2020-01-01',
    endDate: '2021-07-01',
    grade: 5,
    withHonors: true,

    skills: ['TS', 'Java', 'LabView', 'AI', 'Print3D', 'Documentation'],

    translations: {
      pl: {
        institution: 'Politechnika Śląska',
        degree: 'Magister inżynier',
        fieldOfStudy: 'Mechatronika, robotyka i automatyka',
        projectTitle:
          'Opracowanie, wykonanie oraz optymalizacja systemu sterowania pojazdem AGV dla wybranych trajektorii ruchu oraz systemu diagnostyki zużycia energii elektrycznej robota',
        description:
          'Praca magisterska nad systemem sterowania i diagnostyki pojazdów AGV.',
      },

      en: {
        institution: 'The Silesian University of Technology',
        degree: 'Master of Science in Engineering',
        fieldOfStudy: 'Mechatronics, robotics and automatics',
        projectTitle:
          'Design, implementation and optimization of a control system for selected AGV movement trajectories and electric energy diagnostics',
        description:
          'Master thesis focused on control and diagnostics of AGV robots.',
      },
    },
  },

  {
    slug: EducationStepSlug.Engineer,
    startDate: '2016-10-01',
    endDate: '2020-01-01',
    grade: 4.5,
    withHonors: false,

    skills: [
      'TS',
      'LabView',
      'Python',
      'CSharp',
      'CPlusPlus',
      'AGV',
      'PLCProgramming',
      'TiaPortal',
      'Eagle',
      'Fusion360',
      'Print3D',
      'Kuka',
      'Documentation',
    ],

    translations: {
      pl: {
        institution: 'Politechnika Śląska',
        degree: 'Inżynier',
        fieldOfStudy: 'Mechatronika, robotyka i automatyka',
        projectTitle:
          'Projekt i realizacja prototypowego rozwiązania automatycznego systemu realizacji zamówień podzespołów na linii produkcyjnej z zastosowaniem pojazdu AGV',
      },

      en: {
        institution: 'The Silesian University of Technology',
        degree: 'Engineer',
        fieldOfStudy: 'Mechatronics, robotics and automatics',
        projectTitle:
          'Prototype development and automatisation of production systems with usage of AGV',
      },
    },
  },

  {
    slug: EducationStepSlug.PblAgvGestureRecoginitionVoiceAnalysis,
    startDate: '2020-06-24',
    endDate: '2021-02-28',

    skills: ['LabView', 'Python', 'AI', 'AGV', 'Documentation'],

    translations: {
      pl: {
        institution: 'Politechnika Śląska',
        projectTitle:
          'Projekt PBL: Sterowanie pojazdem AGV w oparciu o rozpoznawanie gestów i analizę głosu',
      },

      en: {
        institution: 'The Silesian University of Technology',
        projectTitle:
          'Project Based Learning: Control of an AGV vehicle based on gesture recognition and voice analysis',
      },
    },
  },

  {
    slug: EducationStepSlug.PblMeasuringStation,
    startDate: '2019-02-09',
    endDate: '2019-11-26',

    skills: ['LabView', 'Documentation'],

    translations: {
      pl: {
        institution: 'Politechnika Śląska',
        projectTitle:
          'Projekt PBL: Budowa stanowiska pomiarowego wykorzystujacego optyczny system korelacji obrazu i hydrauliczny system sterowania obciążeniem',
      },

      en: {
        institution: 'The Silesian University of Technology',
        projectTitle:
          'Project Based Learning: Building a measurement setup using an optical image correlation system and a hydraulic load control system',
      },
    },
  },

  {
    slug: EducationStepSlug.MechatronicsE19,
    startDate: '2015-08-28',
    endDate: '2016-03-30',

    skills: ['PLCProgramming', 'Print3D', 'Documentation'],

    translations: {
      pl: {
        institution: 'Zespół Szkół Technicznych i Ogólnokształcących w Bytomiu',
        degree:
          'Technik mechatronik: E.19. Projektowanie i programowanie urządzeń i systemów mechatronicznych',
      },

      en: {
        institution: 'Bytom Technical and General Education School Complex',
        degree:
          'Mechatronics technician: E.19. Designing and programming mechatronic equipment and systems',
      },
    },
  },

  {
    slug: EducationStepSlug.MechatronicsE18,
    startDate: '2014-11-28',
    endDate: '2015-08-28',

    skills: ['CADCAM', 'PLCProgramming', 'Documentation'],

    translations: {
      pl: {
        institution: 'Zespół Szkół Technicznych i Ogólnokształcących w Bytomiu',
        degree:
          'Technik mechatronik: E.18. Obsługa urządzeń i systemów mechatronicznych',
      },

      en: {
        institution: 'Bytom Technical and General Education School Complex',
        degree:
          'Mechatronics technician: E.18. Operating mechatronic equipment and systems',
      },
    },
  },

  {
    slug: EducationStepSlug.MechatronicsE3,
    startDate: '2012-09-01',
    endDate: '2014-11-28',

    skills: ['CADCAM', 'Documentation'],

    translations: {
      pl: {
        institution: 'Zespół Szkół Technicznych i Ogólnokształcących w Bytomiu',
        degree:
          'Technik mechatronik: E.3. Montaż urządzeń i systemów mechatronicznych',
      },

      en: {
        institution: 'Bytom Technical and General Education School Complex',
        degree:
          'Mechatronics technician: E.3. Installing mechatronic equipment and systems',
      },
    },
  },
];
