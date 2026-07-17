import type { Prisma } from '../../../src/generated/prisma/client';

import { Locale, SkillKey } from '../../../src/generated/prisma/client';
import { ProfileSlug } from '../slugs/profileSlug';

const react = [
  SkillKey.ReactJS,
  SkillKey.Redux,
  SkillKey.Zustand,
  SkillKey.CRA,
  SkillKey.Vite,
  SkillKey.NextJS,
  SkillKey.AntDReact,
  SkillKey.MaterialUI,
  SkillKey.DevExtremeReact
];

const angular = [
  SkillKey.Angular,
  SkillKey.Bootstrap,
  SkillKey.DevExtremeAngular
];

const frontendJS = [
  ...react,
  ...angular,
  SkillKey.Leaflet,
  SkillKey.PdfMake,
  SkillKey.Sanity,
  SkillKey.ThreeJS,
  SkillKey.YukaJS,
  SkillKey.TS,
  SkillKey.Documentation
];

const backendJS = [
  SkillKey.NodeJS,
  SkillKey.ExpressJS,
  SkillKey.NestJS,
  SkillKey.NextJS,
  SkillKey.MongoDB,
  SkillKey.PostgreSQL,
  SkillKey.SQLite,
  SkillKey.GraphQL,
  SkillKey.GRPC,
  SkillKey.Microservices,
  SkillKey.TS,
  SkillKey.Documentation
];

const backendCSharp = [
  SkillKey.DotNet,
  SkillKey.CSharp,
  SkillKey.PostgreSQL,
  SkillKey.MongoDB,
  SkillKey.SQLite,
  SkillKey.Microservices,
  SkillKey.Documentation
];

const csharpFullstack = [
  ...backendCSharp,
  SkillKey.Blazor,
  SkillKey.AntDBlazor,
  SkillKey.Bootstrap,
  SkillKey.TS,
  SkillKey.Leaflet
];

const fullstackJS = [...frontendJS, ...backendJS];

const deploy = [
  SkillKey.Docker,
  SkillKey.Linux,
  SkillKey.AWS,
  SkillKey.GCP,
  SkillKey.VPS
];

const plcProgrammer = [
  SkillKey.TiaPortal,
  SkillKey.PLCProgramming,
  SkillKey.FactoryIO,
  SkillKey.CommunicationTCPIP,
  SkillKey.ModbusProtocol,
  SkillKey.SCL,
  SkillKey.STL,
  SkillKey.LAD
];

const mechatronics = [
  ...plcProgrammer,
  SkillKey.J5,
  SkillKey.IQRF,
  SkillKey.Eagle,
  SkillKey.Fusion360,
  SkillKey.CADCAM,
  SkillKey.AGV,
  SkillKey.Fanuc,
  SkillKey.Kuka,
  SkillKey.Print3D,
  SkillKey.Documentation
];

const profileSkills: Record<
  ProfileSlug,
  { orderNumber: number; skills: SkillKey[] }
> = {
  [ProfileSlug.FullstackJS]: { orderNumber: 0, skills: fullstackJS },
  [ProfileSlug.React]: { orderNumber: 1, skills: react },
  [ProfileSlug.FrontendJS]: { orderNumber: 2, skills: frontendJS },
  [ProfileSlug.BackendJS]: { orderNumber: 3, skills: backendJS },
  [ProfileSlug.Angular]: { orderNumber: 4, skills: angular },
  [ProfileSlug.Deploy]: { orderNumber: 5, skills: deploy },
  [ProfileSlug.BackendCSharp]: { orderNumber: 6, skills: backendCSharp },
  [ProfileSlug.CSharpFullstack]: { orderNumber: 7, skills: csharpFullstack },
  [ProfileSlug.PLCProgramming]: { orderNumber: 8, skills: plcProgrammer },
  [ProfileSlug.Mechatronics]: { orderNumber: 9, skills: mechatronics }
};

function getLabelBySlug(slug: ProfileSlug, locale: 'pl' | 'en'): string {
  const map: Record<ProfileSlug, { pl: string; en: string }> = {
    [ProfileSlug.FrontendJS]: {
      pl: 'Front-end JavaScript',
      en: 'Front-end JavaScript'
    },
    [ProfileSlug.React]: {
      pl: 'React Developer',
      en: 'React Developer'
    },
    [ProfileSlug.Angular]: {
      pl: 'Angular Developer',
      en: 'Angular Developer'
    },
    [ProfileSlug.BackendJS]: {
      pl: 'Backend JavaScript',
      en: 'Backend JavaScript'
    },
    [ProfileSlug.FullstackJS]: {
      pl: 'Full-stack JavaScript',
      en: 'Full-stack JavaScript'
    },
    [ProfileSlug.BackendCSharp]: {
      pl: 'Back-end .NET / C#',
      en: 'Back-end .NET / C#'
    },
    [ProfileSlug.CSharpFullstack]: {
      pl: 'Full-stack .NET',
      en: 'Full-stack .NET'
    },
    [ProfileSlug.Deploy]: {
      pl: 'DevOps / Deployment',
      en: 'DevOps / Deployment'
    },
    [ProfileSlug.PLCProgramming]: {
      pl: 'Programista PLC',
      en: 'PLC Programmer'
    },
    [ProfileSlug.Mechatronics]: {
      pl: 'Mechatronika / Automatyka',
      en: 'Mechatronics / Automation'
    }
  };

  return map[slug][locale];
}

export const profiles: Prisma.ProfileCreateInput[] = Object.entries(
  profileSkills
).map(
  ([slug, data]: [
    string,
    { orderNumber: number; skills: SkillKey[] }
  ]): Prisma.ProfileCreateInput => ({
    slug,
    orderNumber: data.orderNumber,

    skills: {
      create: [...new Set(data.skills)].map((key) => ({
        skill: { connect: { key } }
      }))
    },

    translations: {
      create: [
        { locale: Locale.pl, name: getLabelBySlug(slug as ProfileSlug, 'pl') },
        { locale: Locale.en, name: getLabelBySlug(slug as ProfileSlug, 'en') }
      ]
    }
  })
);
