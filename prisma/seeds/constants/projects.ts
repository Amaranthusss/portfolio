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
        { skill: { connect: { key: SkillKey.ModbusProtocol } } }
      ]
    },

    translations: {
      create: [
        {
          locale: Locale.pl,
          name: 'System Automatyzacji Linii Produkcyjnej z Wykorzystaniem AGV',
          content: getProjectContent(
            ProjectSlug.ProductionSystemUtilizingAGV,
            Locale.pl
          )
        },
        {
          locale: Locale.en,
          name: 'Production Line Automation System Using AGV',
          content: getProjectContent(
            ProjectSlug.ProductionSystemUtilizingAGV,
            Locale.en
          )
        }
      ]
    }
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
        { skill: { connect: { key: SkillKey.LAD } } }
      ]
    },

    translations: {
      create: [
        {
          locale: Locale.pl,
          name: 'Pojazd AGV "Amaranthus"',
          content: getProjectContent(
            ProjectSlug.AmaranthusAGVPlatform,
            Locale.pl
          ),
          description:
            'Projekt autonomicznego pojazdu mobilnego będącego elementem inteligentnego systemu domu, ' +
            'obejmujący część implementacyjną oraz badawczą. W ramach projektu zaprojektowano i zbudowano ' +
            'platformę robota, opracowano systemy bezpieczeństwa, mechanizmy zapisu i odtwarzania tras ' +
            'oraz model matematyczny rozładowania baterii. Przeprowadzono również analizę i porównanie metod ' +
            'sterowania ruchem absolutnym oraz względnym pojazdu na podstawie badań literaturowych.'
        },
        {
          locale: Locale.en,
          name: 'AGV vehicle "Amaranthus"',
          content: getProjectContent(
            ProjectSlug.AmaranthusAGVPlatform,
            Locale.en
          ),
          description:
            'An autonomous vehicle project developed as a part of a smart home system, including both implementation ' +
            'and research components. The project involved designing and building a robotic platform, developing safety systems, ' +
            'route recording and replay mechanisms, and creating a mathematical battery discharge model. ' +
            'Additionally, different methods for controlling absolute and relative vehicle movements were analyzed ' +
            'and compared based on a literature review.'
        }
      ]
    }
  },

  {
    slug: ProjectSlug.ElectrohydraulicSystemControl,
    category: Category.Mechatronics,
    startDate: new Date('2019-04-01'),
    endDate: new Date('2019-11-26'),

    skills: {
      create: [{ skill: { connect: { key: SkillKey.LabView } } }]
    },

    translations: {
      create: [
        {
          locale: Locale.pl,
          name: 'Elektrohydrauliczny system sterowania obciążeniem',
          content: getProjectContent(
            ProjectSlug.ElectrohydraulicSystemControl,
            Locale.pl
          )
        },
        {
          locale: Locale.en,
          name: 'Electro-hydraulic System Control',
          content: getProjectContent(
            ProjectSlug.ElectrohydraulicSystemControl,
            Locale.en
          )
        }
      ]
    }
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
        { skill: { connect: { key: SkillKey.AI } } }
      ]
    },

    translations: {
      create: [
        {
          locale: Locale.pl,
          name: 'Sterowanie AGV na podstawie gestów i analizy głosu',
          content: getProjectContent(
            ProjectSlug.ControlOfAGVGestureVoice,
            Locale.pl
          )
        },
        {
          locale: Locale.en,
          name: 'AGV Control using Gesture Recognition and Voice Analysis',
          content: getProjectContent(
            ProjectSlug.ControlOfAGVGestureVoice,
            Locale.en
          )
        }
      ]
    }
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
        { skill: { connect: { key: SkillKey.CPlusPlus } } }
      ]
    },

    translations: {
      create: [
        {
          locale: Locale.pl,
          name: 'Inteligentne Terrarium',
          content: getProjectContent(ProjectSlug.SmartTerrarium, Locale.pl)
        },
        {
          locale: Locale.en,
          name: 'Smart Terrarium',
          content: getProjectContent(ProjectSlug.SmartTerrarium, Locale.en)
        }
      ]
    }
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
        { skill: { connect: { key: SkillKey.Print3D } } }
      ]
    },

    translations: {
      create: [
        {
          locale: Locale.pl,
          name: 'Inteligentne rolety',
          content: getProjectContent(ProjectSlug.SmartRollerShutter, Locale.pl)
        },
        {
          locale: Locale.en,
          name: 'Smart roller shutter',
          content: getProjectContent(ProjectSlug.SmartRollerShutter, Locale.en)
        }
      ]
    }
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
        { skill: { connect: { key: SkillKey.PdfMake } } }
      ]
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
          description:
            'Aplikacja internetowa służąca do generowania curriculum vitae (CV). ' +
            'Wystarczy wypełnić formularz, a otrzymasz gotowy do pobrania plik PDF, który możesz przesłać do potencjalnych pracodawców. ' +
            'Podgląd pliku PDF aktualizuje się w czasie rzeczywistym, w momencie edycji pól formularza. ' +
            'Możesz konfigurować kolory oraz układ do swoich preferencji - wszystko co jest potrzebne, aby stworzyć idealne CV. ' +
            'Aplikacja nie zbiera żadnych danych osobistych. ' +
            'Możesz bezpiecznie zapisać swoją konfigurację lokalnie na komputerze i wczytać na etapie, na którym zakończono.'
        },
        {
          locale: Locale.en,
          name: 'Curriculum Vitae Generator',
          content: getProjectContent(
            ProjectSlug.CurriculumVitaeGenerator,
            Locale.en
          ),
          description:
            'A web application for generating your own curriculum vitae (CV). ' +
            "Just fill out the form, and you'll get a ready-to-download PDF file you can send to potential employers. " +
            'The live PDF preview updates in real time as you edit the form. ' +
            'You can also customize the colors and layout to suit your preferences — everything you need to create the perfect CV. ' +
            'The application does not store any personal data. ' +
            'You can safely save your configuration locally on your device and reload it later to continue where you left off.'
        }
      ]
    }
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
        { skill: { connect: { key: SkillKey.AI } } }
      ]
    },

    translations: {
      create: [
        {
          locale: Locale.pl,
          name: 'Wyszukiwanie ścieżek z AI',
          content: getProjectContent(ProjectSlug.FindingPathAI, Locale.pl),
          description:
            'Prototyp silnika dla systemu ruchu z funkcją odnajdywania ścieżki ' +
            'w oparciu o bibliotekę Yuka.js służącą do obliczania najkrótszych ścieżek z wykorzystaniem siatki nawigacyjnej.'
        },
        {
          locale: Locale.en,
          name: 'Finding path AI',
          content: getProjectContent(ProjectSlug.FindingPathAI, Locale.en),
          description:
            'Prototype of the movement engine, including a movement system with pathfinding. ' +
            'The Yuka.js library is used to calculate the shortest paths utilizing a navigation mesh.'
        }
      ]
    }
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
        { skill: { connect: { key: SkillKey.Redux } } }
      ]
    },

    translations: {
      create: [
        {
          locale: Locale.pl,
          name: 'Generator Faktur',
          content: getProjectContent(ProjectSlug.InvoiceGeneratorV1, Locale.pl),
          description:
            'Aplikacja internetowa do tworzenia faktur i protokołów w formacie PDF. ' +
            'Umożliwia szybkie generowanie dokumentów na podstawie danych firmy, klientów oraz usług, ' +
            'automatycznie obliczając podatki i wartości brutto. Dodatkowo oferuje wysyłkę faktur e-mailem, ' +
            'lokalne przechowywanie plików PDF oraz moduł archiwum z analizą przychodów.'
        },
        {
          locale: Locale.en,
          name: 'Invoice Generator',
          content: getProjectContent(ProjectSlug.InvoiceGeneratorV1, Locale.en),
          description:
            'Invoice Generator is a web application for creating PDF invoices and protocols. ' +
            'It allows users to quickly generate documents based on company, client, and service data, ' +
            'automatically calculating taxes and gross values. The application also provides email invoice delivery, ' +
            'local PDF storage, and an archive module with income analysis features.'
        }
      ]
    }
  },

  {
    slug: ProjectSlug.ApplicationBinder,
    category: Category.IT,
    endDate: new Date('2017-10-02'),

    skills: {
      create: [{ skill: { connect: { key: SkillKey.MMF2Dev } } }]
    },

    translations: {
      create: [
        {
          locale: Locale.pl,
          name: 'Aplikacja "Binder"',
          content: getProjectContent(ProjectSlug.ApplicationBinder, Locale.pl)
        },
        {
          locale: Locale.en,
          name: 'Application "Binder"',
          content: getProjectContent(ProjectSlug.ApplicationBinder, Locale.en)
        }
      ]
    }
  },

  {
    slug: ProjectSlug.LedControllerViaUSB,
    category: Category.Mechatronics,
    endDate: new Date('2020-07-23'),

    skills: {
      create: [
        { skill: { connect: { key: SkillKey.CPlusPlus } } },
        { skill: { connect: { key: SkillKey.MMF2Dev } } }
      ]
    },

    translations: {
      create: [
        {
          locale: Locale.pl,
          name: 'Kontroler USB oświetlenia LED',
          content: getProjectContent(ProjectSlug.LedControllerViaUSB, Locale.pl)
        },
        {
          locale: Locale.en,
          name: 'LED Lighting Controller via USB',
          content: getProjectContent(ProjectSlug.LedControllerViaUSB, Locale.en)
        }
      ]
    }
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
        { skill: { connect: { key: SkillKey.Eagle } } }
      ]
    },

    translations: {
      create: [
        {
          locale: Locale.pl,
          name: '"Pałac Piłsudskiego" – Inteligentny dom',
          content: getProjectContent(
            ProjectSlug.PilsudskiPalaceSmartHome,
            Locale.pl
          )
        },
        {
          locale: Locale.en,
          name: '"Piłsudski Palace" – Smart Home',
          content: getProjectContent(
            ProjectSlug.PilsudskiPalaceSmartHome,
            Locale.en
          )
        }
      ]
    }
  },

  {
    slug: ProjectSlug.PilsudskiPalaceProjectAndRealization,
    category: Category.Hobby,
    startDate: new Date('2022-03-08'),
    isCurrent: true,

    skills: {
      create: [{ skill: { connect: { key: SkillKey.Fusion360 } } }]
    },

    translations: {
      create: [
        {
          locale: Locale.pl,
          name: '"Pałac Piłsudskiego" – Projekt i realizacja',
          content: getProjectContent(
            ProjectSlug.PilsudskiPalaceProjectAndRealization,
            Locale.pl
          )
        },
        {
          locale: Locale.en,
          name: '"Piłsudski Palace" – Project and realization',
          content: getProjectContent(
            ProjectSlug.PilsudskiPalaceProjectAndRealization,
            Locale.en
          )
        }
      ]
    }
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
        { skill: { connect: { key: SkillKey.AntDReact } } }
      ]
    },

    translations: {
      create: [
        {
          locale: Locale.pl,
          name: 'Full-Stack Aplikacja Internetowa dla Żłobka',
          content: getProjectContent(
            ProjectSlug.ArtisticLanguageNurseryLittleAcademy,
            Locale.pl
          ),
          description:
            'Aplikacja internetowa dla żłobka typu full-stack, stworzona z wykorzystaniem React, ' +
            'TypeScript, Express.js oraz Sanity CMS. Projekt łączy nowoczesny interfejs użytkownika, ' +
            'własne API backendowe do obsługi formularzy oraz system CMS umożliwiający samodzielne ' +
            'zarządzanie treścią przez osoby nietechniczne. Aplikacja została zoptymalizowana pod kątem wydajności, ' +
            'responsywności, bezpieczeństwa, dostępności i SEO, wraz z pełną konfiguracją oraz wdrożeniem rozwiązania.'
        },
        {
          locale: Locale.en,
          name: 'Full-Stack Nursery Web App',
          content: getProjectContent(
            ProjectSlug.ArtisticLanguageNurseryLittleAcademy,
            Locale.en
          ),
          description:
            'A full-stack nursery web application built with React, TypeScript, Express.js, and Sanity CMS. ' +
            'The project combines a modern user interface, a custom backend API for handling application forms, ' +
            'and a headless CMS that allows non-technical users to manage website content independently. ' +
            'The application was developed with a focus on performance, responsiveness, security, accessibility, ' +
            'and SEO, including complete system configuration and deployment.'
        }
      ]
    }
  }
];
