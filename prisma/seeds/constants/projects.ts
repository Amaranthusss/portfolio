import { getProjectContent } from './projectsContent';

import type { Prisma } from '../../../src/generated/prisma/client';

import { Category, Locale } from '../../../src/generated/prisma/client';
import { ProjectSlug } from '../slugs/projectSlug';
import { SkillKey } from '../../../src/generated/prisma/client';

export const projects: Prisma.ProjectCreateInput[] = [
  {
    slug: ProjectSlug.ProductionSystemUtilizingAGV,
    category: Category.Mechatronics,
    startDate: new Date('2018-09-01'),
    endDate: new Date('2020-01-23'),

    skills: {
      create: [
        { skill: { connect: { key: SkillKey.TiaPortal } } },
        { skill: { connect: { key: SkillKey.PLCProgramming } } },
        { skill: { connect: { key: SkillKey.AGV } } },
        { skill: { connect: { key: SkillKey.CommunicationTCPIP } } },
        { skill: { connect: { key: SkillKey.ModbusProtocol } } },
      ],
    },

    translations: {
      create: [
        {
          locale: Locale.pl,
          name: 'System Automatyzacji Linii Produkcyjnej z Wykorzystaniem AGV',
          content: getProjectContent(
            ProjectSlug.ProductionSystemUtilizingAGV,
            Locale.pl
          ),
        },
        {
          locale: Locale.en,
          name: 'Production Line Automation System Using AGV',
          content: getProjectContent(
            ProjectSlug.ProductionSystemUtilizingAGV,
            Locale.en
          ),
        },
      ],
    },
  },

  {
    slug: ProjectSlug.AmaranthusAGVPlatform,
    category: Category.Mechatronics,
    startDate: new Date('2019-12-07'),
    endDate: new Date('2021-07-18'),

    skills: {
      create: [
        { skill: { connect: { key: SkillKey.ReactJS } } },
        { skill: { connect: { key: SkillKey.CRA } } },
        { skill: { connect: { key: SkillKey.Print3D } } },
        { skill: { connect: { key: SkillKey.TS } } },
        { skill: { connect: { key: SkillKey.J5 } } },
        { skill: { connect: { key: SkillKey.ExpressJS } } },
        { skill: { connect: { key: SkillKey.Linux } } },
        { skill: { connect: { key: SkillKey.AGV } } },
        { skill: { connect: { key: SkillKey.PLCProgramming } } },
        { skill: { connect: { key: SkillKey.TiaPortal } } },
        { skill: { connect: { key: SkillKey.LabView } } },
        { skill: { connect: { key: SkillKey.Fusion360 } } },
        { skill: { connect: { key: SkillKey.Eagle } } },
        { skill: { connect: { key: SkillKey.SCL } } },
        { skill: { connect: { key: SkillKey.STL } } },
        { skill: { connect: { key: SkillKey.LAD } } },
      ],
    },

    translations: {
      create: [
        {
          locale: Locale.pl,
          name: 'Pojazd AGV "Amaranthus" - Platforma',
          content: getProjectContent(
            ProjectSlug.AmaranthusAGVPlatform,
            Locale.pl
          ),
        },
        {
          locale: Locale.en,
          name: 'AGV vehicle "Amaranthus" - Platform',
          content: getProjectContent(
            ProjectSlug.AmaranthusAGVPlatform,
            Locale.en
          ),
        },
      ],
    },
  },

  {
    slug: ProjectSlug.ElectrohydraulicSystemControl,
    category: Category.Mechatronics,
    startDate: new Date('2019-04-01'),
    endDate: new Date('2019-11-26'),

    skills: {
      create: [{ skill: { connect: { key: SkillKey.LabView } } }],
    },

    translations: {
      create: [
        {
          locale: Locale.pl,
          name: 'Elektrohydrauliczny system sterowania obciążeniem',
          content: getProjectContent(
            ProjectSlug.ElectrohydraulicSystemControl,
            Locale.pl
          ),
        },
        {
          locale: Locale.en,
          name: 'Electro-hydraulic System Control',
          content: getProjectContent(
            ProjectSlug.ElectrohydraulicSystemControl,
            Locale.en
          ),
        },
      ],
    },
  },

  {
    slug: ProjectSlug.ControlOfAGVGestureVoice,
    category: Category.Mechatronics,
    startDate: new Date('2020-05-20'),
    endDate: new Date('2021-02-17'),

    skills: {
      create: [
        { skill: { connect: { key: SkillKey.Python } } },
        { skill: { connect: { key: SkillKey.AGV } } },
        { skill: { connect: { key: SkillKey.LabView } } },
        { skill: { connect: { key: SkillKey.AI } } },
      ],
    },

    translations: {
      create: [
        {
          locale: Locale.pl,
          name: 'Sterowanie AGV na podstawie gestów i analizy głosu',
          content: getProjectContent(
            ProjectSlug.ControlOfAGVGestureVoice,
            Locale.pl
          ),
        },
        {
          locale: Locale.en,
          name: 'AGV Control using Gesture Recognition and Voice Analysis',
          content: getProjectContent(
            ProjectSlug.ControlOfAGVGestureVoice,
            Locale.en
          ),
        },
      ],
    },
  },

  {
    slug: ProjectSlug.SmartTerrarium,
    category: Category.Mechatronics,
    startDate: new Date('2022-01-26'),
    endDate: new Date('2022-02-26'),

    skills: {
      create: [
        { skill: { connect: { key: SkillKey.Eagle } } },
        { skill: { connect: { key: SkillKey.TS } } },
        { skill: { connect: { key: SkillKey.CPlusPlus } } },
      ],
    },

    translations: {
      create: [
        {
          locale: Locale.pl,
          name: 'Inteligentne Terrarium',
          content: getProjectContent(ProjectSlug.SmartTerrarium, Locale.pl),
        },
        {
          locale: Locale.en,
          name: 'Smart Terrarium',
          content: getProjectContent(ProjectSlug.SmartTerrarium, Locale.en),
        },
      ],
    },
  },

  {
    slug: ProjectSlug.SmartRollerShutter,
    category: Category.Mechatronics,
    startDate: new Date('2022-08-22'),
    isCurrent: true,

    skills: {
      create: [
        { skill: { connect: { key: SkillKey.Fusion360 } } },
        { skill: { connect: { key: SkillKey.Eagle } } },
        { skill: { connect: { key: SkillKey.TS } } },
        { skill: { connect: { key: SkillKey.Print3D } } },
      ],
    },

    translations: {
      create: [
        {
          locale: Locale.pl,
          name: 'Inteligentne rolety',
          content: getProjectContent(ProjectSlug.SmartRollerShutter, Locale.pl),
        },
        {
          locale: Locale.en,
          name: 'Smart roller shutter',
          content: getProjectContent(ProjectSlug.SmartRollerShutter, Locale.en),
        },
      ],
    },
  },

  {
    slug: ProjectSlug.CurriculumVitaeGenerator,
    category: Category.IT,
    startDate: new Date('2025-01-17'),
    endDate: new Date('2025-11-09'),

    skills: {
      create: [
        { skill: { connect: { key: SkillKey.TS } } },
        { skill: { connect: { key: SkillKey.ReactJS } } },
        { skill: { connect: { key: SkillKey.Vite } } },
        { skill: { connect: { key: SkillKey.AntDReact } } },
        { skill: { connect: { key: SkillKey.Zustand } } },
        { skill: { connect: { key: SkillKey.PdfMake } } },
      ],
    },

    translations: {
      create: [
        {
          locale: Locale.pl,
          name: 'Generator Curriculum Vitae',
          content: getProjectContent(
            ProjectSlug.CurriculumVitaeGenerator,
            Locale.pl
          ),
        },
        {
          locale: Locale.en,
          name: 'Curriculum Vitae Generator',
          content: getProjectContent(
            ProjectSlug.CurriculumVitaeGenerator,
            Locale.en
          ),
        },
      ],
    },
  },

  {
    slug: ProjectSlug.FindingPathAI,
    category: Category.IT,
    endDate: new Date('2023-05-16'),

    skills: {
      create: [
        { skill: { connect: { key: SkillKey.TS } } },
        { skill: { connect: { key: SkillKey.ReactJS } } },
        { skill: { connect: { key: SkillKey.NextJS } } },
        { skill: { connect: { key: SkillKey.YukaJS } } },
        { skill: { connect: { key: SkillKey.ThreeJS } } },
        { skill: { connect: { key: SkillKey.AI } } },
      ],
    },

    translations: {
      create: [
        {
          locale: Locale.pl,
          name: 'Wyszukiwanie ścieżek z AI',
          content: getProjectContent(ProjectSlug.FindingPathAI, Locale.pl),
        },
        {
          locale: Locale.en,
          name: 'Pathfinding AI',
          content: getProjectContent(ProjectSlug.FindingPathAI, Locale.en),
        },
      ],
    },
  },

  {
    slug: ProjectSlug.InvoiceGeneratorV1,
    category: Category.IT,
    startDate: new Date('2021-11-12'),
    endDate: new Date('2023-03-15'),

    skills: {
      create: [
        { skill: { connect: { key: SkillKey.TS } } },
        { skill: { connect: { key: SkillKey.ReactJS } } },
        { skill: { connect: { key: SkillKey.CRA } } },
        { skill: { connect: { key: SkillKey.NestJS } } },
        { skill: { connect: { key: SkillKey.SQLite } } },
        { skill: { connect: { key: SkillKey.DevExtremeReact } } },
        { skill: { connect: { key: SkillKey.Redux } } },
      ],
    },

    translations: {
      create: [
        {
          locale: Locale.pl,
          name: 'Generator Faktur v1',
          content: getProjectContent(ProjectSlug.InvoiceGeneratorV1, Locale.pl),
        },
        {
          locale: Locale.en,
          name: 'Invoice Generator v1',
          content: getProjectContent(ProjectSlug.InvoiceGeneratorV1, Locale.en),
        },
      ],
    },
  },

  {
    slug: ProjectSlug.ApplicationBinder,
    category: Category.IT,
    endDate: new Date('2017-10-02'),

    skills: {
      create: [{ skill: { connect: { key: SkillKey.MMF2Dev } } }],
    },

    translations: {
      create: [
        {
          locale: Locale.pl,
          name: 'Aplikacja "Binder"',
          content: getProjectContent(ProjectSlug.ApplicationBinder, Locale.pl),
        },
        {
          locale: Locale.en,
          name: 'Application "Binder"',
          content: getProjectContent(ProjectSlug.ApplicationBinder, Locale.en),
        },
      ],
    },
  },

  {
    slug: ProjectSlug.LedControllerViaUSB,
    category: Category.Mechatronics,
    endDate: new Date('2020-07-23'),

    skills: {
      create: [
        { skill: { connect: { key: SkillKey.CPlusPlus } } },
        { skill: { connect: { key: SkillKey.MMF2Dev } } },
      ],
    },

    translations: {
      create: [
        {
          locale: Locale.pl,
          name: 'Kontroler USB oświetlenia LED',
          content: getProjectContent(
            ProjectSlug.LedControllerViaUSB,
            Locale.pl
          ),
        },
        {
          locale: Locale.en,
          name: 'LED Lighting Controller via USB',
          content: getProjectContent(
            ProjectSlug.LedControllerViaUSB,
            Locale.en
          ),
        },
      ],
    },
  },

  {
    slug: ProjectSlug.PilsudskiPalaceSmartHome,
    category: Category.Mechatronics,
    startDate: new Date('2022-05-05'),
    isCurrent: true,

    skills: {
      create: [
        { skill: { connect: { key: SkillKey.TS } } },
        { skill: { connect: { key: SkillKey.ReactJS } } },
        { skill: { connect: { key: SkillKey.Vite } } },
        { skill: { connect: { key: SkillKey.NestJS } } },
        { skill: { connect: { key: SkillKey.Eagle } } },
      ],
    },

    translations: {
      create: [
        {
          locale: Locale.pl,
          name: '"Pałac Piłsudskiego" – Inteligentny dom',
          content: getProjectContent(
            ProjectSlug.PilsudskiPalaceSmartHome,
            Locale.pl
          ),
        },
        {
          locale: Locale.en,
          name: '"Piłsudski Palace" – Smart Home',
          content: getProjectContent(
            ProjectSlug.PilsudskiPalaceSmartHome,
            Locale.en
          ),
        },
      ],
    },
  },

  {
    slug: ProjectSlug.PilsudskiPalaceProjectAndRealization,
    category: Category.Hobby,
    startDate: new Date('2022-03-08'),
    isCurrent: true,

    skills: {
      create: [{ skill: { connect: { key: SkillKey.Fusion360 } } }],
    },

    translations: {
      create: [
        {
          locale: Locale.pl,
          name: '"Pałac Piłsudskiego" – Projekt i realizacja',
          content: getProjectContent(
            ProjectSlug.PilsudskiPalaceProjectAndRealization,
            Locale.pl
          ),
        },
        {
          locale: Locale.en,
          name: '"Piłsudski Palace" – Project and realization',
          content: getProjectContent(
            ProjectSlug.PilsudskiPalaceProjectAndRealization,
            Locale.en
          ),
        },
      ],
    },
  },

  {
    slug: ProjectSlug.ArtisticLanguageNurseryLittleAcademy,
    category: Category.IT,
    startDate: new Date('2025-03-24'),
    endDate: new Date('2025-06-18'),

    skills: {
      create: [
        { skill: { connect: { key: SkillKey.TS } } },
        { skill: { connect: { key: SkillKey.ReactJS } } },
        { skill: { connect: { key: SkillKey.Vite } } },
        { skill: { connect: { key: SkillKey.Sanity } } },
        { skill: { connect: { key: SkillKey.Leaflet } } },
        { skill: { connect: { key: SkillKey.Zustand } } },
        { skill: { connect: { key: SkillKey.ExpressJS } } },
        { skill: { connect: { key: SkillKey.AntDReact } } },
      ],
    },

    translations: {
      create: [
        {
          locale: Locale.pl,
          name: 'Żłobek Artystyczno - Językowy "Akademia Maluszka"',
          content: getProjectContent(
            ProjectSlug.ArtisticLanguageNurseryLittleAcademy,
            Locale.pl
          ),
        },
        {
          locale: Locale.en,
          name: 'Artistic and Language Nursery "Little Academy"',
          content: getProjectContent(
            ProjectSlug.ArtisticLanguageNurseryLittleAcademy,
            Locale.en
          ),
        },
      ],
    },
  },
];
