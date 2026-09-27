import type { EducationStepSeedData } from '../interfaces/educationStepSeedData';

import { EducationStepSlug } from './educationStepSlug';

export const educationSteps: EducationStepSeedData[] = [
  {
    slug: EducationStepSlug.MasterOfScienceInEngineering,
    startDate: '2020-01-01',
    endDate: '2021-07-01',
    grade: 5,
    withHonors: true,
    image: 'icons/polsl.png',

    skills: ['TS', 'Java', 'LabView', 'AI', 'Print3D', 'Documentation'],

    translations: {
      pl: {
        institution: 'Politechnika Śląska',
        degree: 'Magister inżynier',
        fieldOfStudy: 'Mechatronika, robotyka i automatyka',
        projectTitle:
          'Opracowanie, wykonanie oraz optymalizacja systemu sterowania pojazdem AGV dla wybranych trajektorii ruchu oraz systemu diagnostyki zużycia energii elektrycznej robota',
      },

      en: {
        institution: 'The Silesian University of Technology',
        degree: 'Master of Science in Engineering',
        fieldOfStudy: 'Mechatronics, robotics and automatics',
        projectTitle:
          'Design, implementation and optimization of a control system for selected AGV movement trajectories and electric energy diagnostics',
      },
    },
  },

  {
    slug: EducationStepSlug.Engineer,
    startDate: '2016-10-01',
    endDate: '2020-01-01',
    grade: 4.5,
    withHonors: false,
    image: 'icons/polsl.png',

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
    image: 'icons/polsl.png',

    skills: ['LabView', 'Python', 'AI', 'AGV', 'Documentation'],

    translations: {
      pl: {
        institution: 'Politechnika Śląska',
        projectTitle: 'Nauczanie projektowe (PBL)',
        description:
          'Sterowanie pojazdem AGV w oparciu o rozpoznawanie gestów i analizę głosu.',
      },

      en: {
        institution: 'The Silesian University of Technology',
        projectTitle: 'Project Based Learning',
        description:
          'Control of an AGV vehicle based on gesture recognition and voice analysis.',
      },
    },
  },

  {
    slug: EducationStepSlug.PblMeasuringStation,
    startDate: '2019-02-09',
    endDate: '2019-11-26',
    image: 'icons/polsl.png',

    skills: ['LabView', 'Documentation'],

    translations: {
      pl: {
        institution: 'Politechnika Śląska',
        projectTitle: 'Nauczanie projektowe (PBL)',
        description:
          'Budowa stanowiska pomiarowego wykorzystujacego optyczny system korelacji obrazu i hydrauliczny system sterowania obciążeniem.',
      },

      en: {
        institution: 'The Silesian University of Technology',
        projectTitle: 'Project Based Learning',
        description:
          'Building a measurement setup using an optical image correlation system and a hydraulic load control system.',
      },
    },
  },

  {
    slug: EducationStepSlug.MechatronicsE19,
    startDate: '2015-08-28',
    endDate: '2016-03-30',
    image: 'icons/zstio.png',

    skills: ['PLCProgramming', 'Print3D', 'Documentation'],

    translations: {
      pl: {
        institution: 'Zespół Szkół Technicznych i Ogólnokształcących w Bytomiu',
        description:
          'Projektowanie i programowanie urządzeń i systemów mechatronicznych.',
        degree: 'Technik mechatronik: E.19.',
      },

      en: {
        institution: 'Bytom Technical and General Education School Complex',
        description:
          'Designing and programming mechatronic equipment and systems.',
        degree: 'Mechatronics technician: E.19.',
      },
    },
  },

  {
    slug: EducationStepSlug.MechatronicsE18,
    startDate: '2014-11-28',
    endDate: '2015-08-28',
    image: 'icons/zstio.png',

    skills: ['CADCAM', 'PLCProgramming', 'Documentation'],

    translations: {
      pl: {
        institution: 'Zespół Szkół Technicznych i Ogólnokształcących w Bytomiu',
        description: 'Obsługa urządzeń i systemów mechatronicznych.',
        degree: 'Technik mechatronik: E.18.',
      },

      en: {
        institution: 'Bytom Technical and General Education School Complex',
        description: 'Operating mechatronic equipment and systems.',
        degree: 'Mechatronics technician: E.18.',
      },
    },
  },

  {
    slug: EducationStepSlug.MechatronicsE3,
    startDate: '2012-09-01',
    endDate: '2014-11-28',
    image: 'icons/zstio.png',

    skills: ['CADCAM', 'Documentation'],

    translations: {
      pl: {
        institution: 'Zespół Szkół Technicznych i Ogólnokształcących w Bytomiu',
        description: 'Montaż urządzeń i systemów mechatronicznych.',
        degree: 'Technik mechatronik: E.3.',
      },

      en: {
        institution: 'Bytom Technical and General Education School Complex',
        description: 'Installing mechatronic equipment and systems.',
        degree: 'Mechatronics technician: E.3.',
      },
    },
  },
];
