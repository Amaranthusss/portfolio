import { revalidateSkillsAfterDelete } from '@/services/cache/revalidateSkills';
import { revalidateSkills } from '@/services/cache/revalidateSkills';

import type { CollectionConfig } from 'payload';

export const Skills: CollectionConfig = {
  slug: 'skills',

  admin: {
    useAsTitle: 'key',
    defaultColumns: ['key', 'name'],
  },

  hooks: {
    afterChange: [revalidateSkills],
    afterDelete: [revalidateSkillsAfterDelete],
  },

  fields: [
    {
      name: 'key',
      type: 'select',
      required: true,
      unique: true,
      options: [
        { label: 'TypeScript', value: 'TS' },
        { label: 'LabVIEW', value: 'LabView' },
        { label: 'Python', value: 'Python' },
        { label: 'C#', value: 'CSharp' },
        { label: 'C++', value: 'CPlusPlus' },
        { label: 'Java', value: 'Java' },
        { label: 'MMF2Dev', value: 'MMF2Dev' },
        { label: 'CAD/CAM', value: 'CADCAM' },
        { label: 'SCL', value: 'SCL' },
        { label: 'STL', value: 'STL' },
        { label: 'LAD', value: 'LAD' },

        { label: '.NET', value: 'DotNet' },
        { label: 'Blazor', value: 'Blazor' },

        { label: 'Angular', value: 'Angular' },
        { label: 'React', value: 'ReactJS' },
        { label: 'Create React App', value: 'CRA' },
        { label: 'Vite', value: 'Vite' },
        { label: 'Next.js', value: 'NextJS' },
        { label: 'Express.js', value: 'ExpressJS' },
        { label: 'NestJS', value: 'NestJS' },
        { label: 'Node.js', value: 'NodeJS' },

        { label: 'Leaflet', value: 'Leaflet' },
        { label: 'Sanity', value: 'Sanity' },
        { label: 'Three.js', value: 'ThreeJS' },
        { label: 'pdfMake', value: 'PdfMake' },
        { label: 'Yuka.js', value: 'YukaJS' },
        { label: 'Zustand', value: 'Zustand' },
        { label: 'Redux', value: 'Redux' },
        { label: 'J5', value: 'J5' },
        { label: 'Zod', value: 'Zod' },

        { label: 'Ant Design React', value: 'AntDReact' },
        { label: 'Ant Design Blazor', value: 'AntDBlazor' },
        { label: 'Bootstrap', value: 'Bootstrap' },
        { label: 'Material UI', value: 'MaterialUI' },
        { label: 'DevExtreme React', value: 'DevExtremeReact' },
        { label: 'DevExtreme Angular', value: 'DevExtremeAngular' },

        { label: 'PostgreSQL', value: 'PostgreSQL' },
        { label: 'MongoDB', value: 'MongoDB' },
        { label: 'SQLite', value: 'SQLite' },

        { label: 'AWS', value: 'AWS' },
        { label: 'GCP', value: 'GCP' },
        { label: 'gRPC', value: 'GRPC' },
        { label: 'GraphQL', value: 'GraphQL' },
        { label: 'VPS', value: 'VPS' },

        { label: 'Docker', value: 'Docker' },
        { label: 'Linux', value: 'Linux' },

        { label: 'TIA Portal', value: 'TiaPortal' },
        { label: 'PLC Programming', value: 'PLCProgramming' },
        { label: 'Factory I/O', value: 'FactoryIO' },

        { label: 'TCP/IP Communication', value: 'CommunicationTCPIP' },
        { label: 'Modbus Protocol', value: 'ModbusProtocol' },
        { label: 'IQRF', value: 'IQRF' },

        { label: 'Eagle', value: 'Eagle' },
        { label: 'Fusion 360', value: 'Fusion360' },
        { label: 'AGV', value: 'AGV' },
        { label: 'FANUC', value: 'Fanuc' },
        { label: 'KUKA', value: 'Kuka' },

        { label: 'AI', value: 'AI' },
        { label: '3D Printing', value: 'Print3D' },
        { label: 'Documentation', value: 'Documentation' },
        { label: 'Sales Support', value: 'SalesSupport' },
        { label: 'Microservices', value: 'Microservices' },
      ],
    },

    {
      name: 'name',
      type: 'text',
      required: true,
      localized: true,
    },

    {
      name: 'shortName',
      type: 'text',
      localized: true,
    },

    {
      name: 'description',
      type: 'textarea',
      localized: true,
    },
  ],
};
