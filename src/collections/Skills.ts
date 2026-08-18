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
      options: [
        // * General IT
        { label: 'AI', value: 'AI' },
        { label: 'DB', value: 'DB' },
        { label: 'Git', value: 'Git' },
        { label: 'CMS', value: 'CMS' },
        { label: 'ORM', value: 'ORM' },
        { label: 'WebSocket', value: 'WS' },
        { label: 'GraphQL', value: 'GraphQL' },
        { label: '3D Printing', value: 'Print3D' },
        { label: 'Documentation', value: 'Documentation' },
        { label: 'Sales Support', value: 'SalesSupport' },
        { label: 'Microservices', value: 'Microservices' },

        // * Programming Languages
        { label: 'LabVIEW', value: 'LabView' },
        { label: 'JavaScript', value: 'JS' },
        { label: 'Python', value: 'Python' },
        { label: 'C#', value: 'CSharp' },
        { label: 'C++', value: 'CPlusPlus' },
        { label: 'Java', value: 'Java' },
        { label: 'MMF2Dev', value: 'MMF2Dev' },

        // * React
        { label: 'React', value: 'ReactJS' },
        { label: 'Create React App', value: 'CRA' },
        { label: 'Vite', value: 'Vite' },
        { label: 'Next.js', value: 'NextJS' },

        // * JS Libraries
        { label: 'TypeScript', value: 'TS' },
        { label: 'DevExtreme React', value: 'DevExtremeReact' },
        { label: 'Ant Design React', value: 'AntDReact' },
        { label: 'Material UI', value: 'MaterialUI' },
        { label: 'Bootstrap', value: 'Bootstrap' },
        { label: 'Three.js', value: 'ThreeJS' },
        { label: 'Leaflet', value: 'Leaflet' },
        { label: 'PdfMake', value: 'PdfMake' },
        { label: 'Yuka.js', value: 'YukaJS' },
        { label: 'Zustand', value: 'Zustand' },
        { label: 'Redux', value: 'Redux' },
        { label: 'Lodash', value: 'Lodash' },
        { label: 'Socket.io', value: 'SocketIO' },
        { label: 'Zod', value: 'Zod' },
        { label: 'SASS', value: 'SASS' },
        { label: 'LESS', value: 'LESS' },
        { label: 'Cypress', value: 'Cypress' },
        { label: 'Jest', value: 'Jest' },

        // * CMS
        { label: 'Payload CMS', value: 'PayloadCMS' },
        { label: 'Sanity CMS', value: 'SanityCMS' },

        // * Angular
        { label: 'Angular', value: 'Angular' },
        { label: 'DevExtreme Angular', value: 'DevExtremeAngular' },

        // * JS Back-end
        { label: 'Express.js', value: 'ExpressJS' },
        { label: 'NestJS', value: 'NestJS' },
        { label: 'Node.js', value: 'NodeJS' },
        { label: 'J5', value: 'J5' },

        // * C# Frameworks
        { label: '.NET', value: 'DotNet' },
        { label: 'Blazor', value: 'Blazor' },
        { label: 'Ant Design Blazor', value: 'AntDBlazor' },

        // * Databases & ORMs
        { label: 'PostgreSQL', value: 'PostgreSQL' },
        { label: 'MongoDB', value: 'MongoDB' },
        { label: 'SQLite', value: 'SQLite' },
        { label: 'MySQL', value: 'MySQL' },
        { label: 'Drizzle', value: 'Drizzle' },
        { label: 'TypeORM', value: 'TypeORM' },
        { label: 'Prisma', value: 'Prisma' },

        // * Deployments
        { label: 'AWS', value: 'AWS' },
        { label: 'GCP', value: 'GCP' },
        { label: 'gRPC', value: 'GRPC' },
        { label: 'VPS', value: 'VPS' },
        { label: 'Docker', value: 'Docker' },
        { label: 'Linux', value: 'Linux' },

        // * Mechatronics
        { label: 'AGV', value: 'AGV' },
        { label: 'CAD/CAM', value: 'CADCAM' },
        { label: 'LAD', value: 'LAD' },
        { label: 'SCL', value: 'SCL' },
        { label: 'STL', value: 'STL' },
        { label: 'TIA Portal', value: 'TiaPortal' },
        { label: 'PLC Programming', value: 'PLCProgramming' },
        { label: 'Factory I/O', value: 'FactoryIO' },
        { label: 'TCP/IP Communication', value: 'CommunicationTCPIP' },
        { label: 'Modbus Protocol', value: 'ModbusProtocol' },
        { label: 'IQRF', value: 'IQRF' },
        { label: 'FANUC', value: 'Fanuc' },
        { label: 'KUKA', value: 'Kuka' },

        // * Engineering Softwares
        { label: 'Eagle', value: 'Eagle' },
        { label: 'Fusion 360', value: 'Fusion360' },
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
