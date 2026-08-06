import type { Skill } from '../../../payload-types';

type SkillLocaleData = Pick<Skill, 'name' | 'shortName' | 'description'>;

export type SkillSeed = {
  key: Skill['key'];
  translations: {
    pl: SkillLocaleData;
    en: SkillLocaleData;
  };
};

export const skills: SkillSeed[] = [
  {
    key: 'AGV',
    translations: {
      pl: {
        name: 'Wózek samojezdny AGV',
        shortName: 'AGV',
        description:
          'Pojazd bezzałogowy sterowany za pomocą odpowiednich układów nawigacji bez potrzeby bezpośredniej obsługi operatora'
      },
      en: {
        name: 'Automated guided vehicle',
        shortName: 'AGV',
        description:
          'Portable robot that, unlike an autonomous mobile robot (AMR), follows along marked long lines or wires on the floor, or uses radio waves, vision cameras, magnets, or lasers for navigation'
      }
    }
  },
  {
    key: 'AI',
    translations: {
      pl: {
        name: 'Sztuczna inteligencja',
        shortName: 'AI'
      },
      en: {
        name: 'Artificial intelligence',
        shortName: 'AI'
      }
    }
  },
  {
    key: 'AWS',
    translations: {
      pl: {
        name: 'Amazon Web Services',
        shortName: 'AWS'
      },
      en: {
        name: 'Amazon Web Services',
        shortName: 'AWS'
      }
    }
  },
  {
    key: 'Angular',
    translations: {
      pl: {
        name: 'Angular'
      },
      en: {
        name: 'Angular'
      }
    }
  },
  {
    key: 'AntDBlazor',
    translations: {
      pl: {
        name: 'Ant Design (Blazor)',
        shortName: 'AntD Blazor'
      },
      en: {
        name: 'Ant Design (Blazor)',
        shortName: 'AntD Blazor'
      }
    }
  },
  {
    key: 'AntDReact',
    translations: {
      pl: {
        name: 'Ant Design (React)',
        shortName: 'AntD React'
      },
      en: {
        name: 'Ant Design (React)',
        shortName: 'AntD React'
      }
    }
  },
  {
    key: 'Blazor',
    translations: {
      pl: {
        name: 'Blazor'
      },
      en: {
        name: 'Blazor'
      }
    }
  },
  {
    key: 'Bootstrap',
    translations: {
      pl: {
        name: 'Bootstrap'
      },
      en: {
        name: 'Bootstrap'
      }
    }
  },
  {
    key: 'CADCAM',
    translations: {
      pl: {
        name: 'CADCAM'
      },
      en: {
        name: 'CADCAM'
      }
    }
  },
  {
    key: 'CPlusPlus',
    translations: {
      pl: {
        name: 'C++'
      },
      en: {
        name: 'C++'
      }
    }
  },
  {
    key: 'CRA',
    translations: {
      pl: {
        name: 'Create React App',
        shortName: 'CRA'
      },
      en: {
        name: 'Create React App',
        shortName: 'CRA'
      }
    }
  },
  {
    key: 'CSharp',
    translations: {
      pl: {
        name: 'C#'
      },
      en: {
        name: 'C#'
      }
    }
  },
  {
    key: 'CommunicationTCPIP',
    translations: {
      pl: {
        name: 'Model TCP/IP',
        shortName: 'TCP/IP'
      },
      en: {
        name: 'Internet protocol suite',
        shortName: 'TCP/IP'
      }
    }
  },
  {
    key: 'DevExtremeAngular',
    translations: {
      pl: {
        name: 'DevExtreme Angular',
        shortName: 'DevEx Angular'
      },
      en: {
        name: 'DevExtreme Angular',
        shortName: 'DevEx Angular'
      }
    }
  },
  {
    key: 'DevExtremeReact',
    translations: {
      pl: {
        name: 'DevExtreme React',
        shortName: 'DevEx React'
      },
      en: {
        name: 'DevExtreme React',
        shortName: 'DevEx React'
      }
    }
  },
  {
    key: 'Docker',
    translations: {
      pl: {
        name: 'Docker'
      },
      en: {
        name: 'Docker'
      }
    }
  },
  {
    key: 'DotNet',
    translations: {
      pl: {
        name: '.NET'
      },
      en: {
        name: '.NET'
      }
    }
  },
  {
    key: 'Documentation',
    translations: {
      pl: {
        name: 'Dokumentacja'
      },
      en: {
        name: 'Documentation'
      }
    }
  },
  {
    key: 'Eagle',
    translations: {
      pl: {
        name: 'Autodesk Eagle',
        shortName: 'Eagle'
      },
      en: {
        name: 'Autodesk Eagle',
        shortName: 'Eagle'
      }
    }
  },
  {
    key: 'ExpressJS',
    translations: {
      pl: {
        name: 'Express.js'
      },
      en: {
        name: 'Express.js'
      }
    }
  },
  {
    key: 'FactoryIO',
    translations: {
      pl: {
        name: 'Factory I/O',
        shortName: 'FactoryIO'
      },
      en: {
        name: 'Factory I/O',
        shortName: 'FactoryIO'
      }
    }
  },
  {
    key: 'Fanuc',
    translations: {
      pl: {
        name: 'Fanuc'
      },
      en: {
        name: 'Fanuc'
      }
    }
  },
  {
    key: 'Fusion360',
    translations: {
      pl: {
        name: 'Autodesk Fusion 360',
        shortName: 'Fusion'
      },
      en: {
        name: 'Autodesk Fusion 360',
        shortName: 'Fusion'
      }
    }
  },
  {
    key: 'GCP',
    translations: {
      pl: {
        name: 'Google Cloud Platform',
        shortName: 'GCP'
      },
      en: {
        name: 'Google Cloud Platform',
        shortName: 'GCP'
      }
    }
  },
  {
    key: 'GRPC',
    translations: {
      pl: {
        name: 'gRPC Remote Procedure Calls',
        shortName: 'gRPC'
      },
      en: {
        name: 'gRPC Remote Procedure Calls',
        shortName: 'gRPC'
      }
    }
  },
  {
    key: 'GraphQL',
    translations: {
      pl: {
        name: 'GraphQL'
      },
      en: {
        name: 'GraphQL'
      }
    }
  },
  {
    key: 'IQRF',
    translations: {
      pl: {
        name: 'IQRF'
      },
      en: {
        name: 'IQRF'
      }
    }
  },
  {
    key: 'J5',
    translations: {
      pl: {
        name: 'Johnny Five',
        shortName: 'J5'
      },
      en: {
        name: 'Johnny Five',
        shortName: 'J5'
      }
    }
  },
  {
    key: 'Java',
    translations: {
      pl: {
        name: 'Java'
      },
      en: {
        name: 'Java'
      }
    }
  },
  {
    key: 'Kuka',
    translations: {
      pl: {
        name: 'Kuka'
      },
      en: {
        name: 'Kuka'
      }
    }
  },
  {
    key: 'LAD',
    translations: {
      pl: {
        name: 'Język drabinkowy LAD',
        shortName: 'LAD'
      },
      en: {
        name: 'Ladder Logic',
        shortName: 'LAD'
      }
    }
  },
  {
    key: 'LabView',
    translations: {
      pl: {
        name: 'LabView'
      },
      en: {
        name: 'LabView'
      }
    }
  },
  {
    key: 'Leaflet',
    translations: {
      pl: {
        name: 'Leaflet'
      },
      en: {
        name: 'Leaflet'
      }
    }
  },
  {
    key: 'Linux',
    translations: {
      pl: {
        name: 'Linux'
      },
      en: {
        name: 'Linux'
      }
    }
  },
  {
    key: 'MMF2Dev',
    translations: {
      pl: {
        name: 'Multimedia Fusion Developer 2',
        shortName: 'MMF2 Dev'
      },
      en: {
        name: 'Multimedia Fusion Developer 2',
        shortName: 'MMF2 Dev'
      }
    }
  },
  {
    key: 'MaterialUI',
    translations: {
      pl: {
        name: 'Material UI'
      },
      en: {
        name: 'Material UI'
      }
    }
  },
  {
    key: 'Microservices',
    translations: {
      pl: {
        name: 'Mikroserwisy'
      },
      en: {
        name: 'Microservices'
      }
    }
  },
  {
    key: 'ModbusProtocol',
    translations: {
      pl: {
        name: 'Protokół MODBUS',
        shortName: 'MODBUS'
      },
      en: {
        name: 'MODBUS protocol',
        shortName: 'MODBUS'
      }
    }
  },
  {
    key: 'MongoDB',
    translations: {
      pl: {
        name: 'MongoDB'
      },
      en: {
        name: 'MongoDB'
      }
    }
  },
  {
    key: 'NestJS',
    translations: {
      pl: {
        name: 'Nest.js'
      },
      en: {
        name: 'Nest.js'
      }
    }
  },
  {
    key: 'NextJS',
    translations: {
      pl: {
        name: 'Next.js'
      },
      en: {
        name: 'Next.js'
      }
    }
  },
  {
    key: 'NodeJS',
    translations: {
      pl: {
        name: 'Node.js'
      },
      en: {
        name: 'Node.js'
      }
    }
  },
  {
    key: 'PLCProgramming',
    translations: {
      pl: {
        name: 'Programowanie PLC',
        shortName: 'PLC'
      },
      en: {
        name: 'PLC programming',
        shortName: 'PLC'
      }
    }
  },
  {
    key: 'PdfMake',
    translations: {
      pl: {
        name: 'PdfMake'
      },
      en: {
        name: 'PdfMake'
      }
    }
  },
  {
    key: 'PostgreSQL',
    translations: {
      pl: {
        name: 'PostgreSQL'
      },
      en: {
        name: 'PostgreSQL'
      }
    }
  },
  {
    key: 'Print3D',
    translations: {
      pl: {
        name: 'Druk 3D'
      },
      en: {
        name: '3D printing'
      }
    }
  },
  {
    key: 'Python',
    translations: {
      pl: {
        name: 'Python'
      },
      en: {
        name: 'Python'
      }
    }
  },
  {
    key: 'ReactJS',
    translations: {
      pl: {
        name: 'React.js'
      },
      en: {
        name: 'React.js'
      }
    }
  },
  {
    key: 'Redux',
    translations: {
      pl: {
        name: 'Redux'
      },
      en: {
        name: 'Redux'
      }
    }
  },
  {
    key: 'SCL',
    translations: {
      pl: {
        name: 'SCL'
      },
      en: {
        name: 'SCL'
      }
    }
  },
  {
    key: 'SQLite',
    translations: {
      pl: {
        name: 'SQLite'
      },
      en: {
        name: 'SQLite'
      }
    }
  },
  {
    key: 'STL',
    translations: {
      pl: {
        name: 'Lista stanów (STL)',
        shortName: 'STL'
      },
      en: {
        name: 'Statement List (STL)',
        shortName: 'STL'
      }
    }
  },
  {
    key: 'Sanity',
    translations: {
      pl: {
        name: 'Sanity CMS',
        shortName: 'Sanity'
      },
      en: {
        name: 'Sanity CMS',
        shortName: 'Sanity'
      }
    }
  },
  {
    key: 'SalesSupport',
    translations: {
      pl: {
        name: 'Sprzedaż'
      },
      en: {
        name: 'Sales support'
      }
    }
  },
  {
    key: 'TS',
    translations: {
      pl: {
        name: 'TypeScript',
        shortName: 'TS'
      },
      en: {
        name: 'TypeScript',
        shortName: 'TS'
      }
    }
  },
  {
    key: 'ThreeJS',
    translations: {
      pl: {
        name: 'Three.js'
      },
      en: {
        name: 'Three.js'
      }
    }
  },
  {
    key: 'TiaPortal',
    translations: {
      pl: {
        name: 'Siemens TIA Portal',
        shortName: 'TIA Portal'
      },
      en: {
        name: 'Siemens TIA Portal',
        shortName: 'TIA Portal'
      }
    }
  },
  {
    key: 'VPS',
    translations: {
      pl: {
        name: 'Prywatny wirtualny serwer (VPS)',
        shortName: 'VPS'
      },
      en: {
        name: 'Virtual private server (VPS)',
        shortName: 'VPS'
      }
    }
  },
  {
    key: 'Vite',
    translations: {
      pl: {
        name: 'Vite'
      },
      en: {
        name: 'Vite'
      }
    }
  },
  {
    key: 'YukaJS',
    translations: {
      pl: {
        name: 'Yuka.js'
      },
      en: {
        name: 'Yuka.js'
      }
    }
  },
  {
    key: 'Zod',
    translations: {
      pl: {
        name: 'Zod'
      },
      en: {
        name: 'Zod'
      }
    }
  },
  {
    key: 'Zustand',
    translations: {
      pl: {
        name: 'Zustand'
      },
      en: {
        name: 'Zustand'
      }
    }
  }
];
