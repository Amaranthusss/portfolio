import type { PortfolioDocumentationDTO } from '@/models/portfolioDocumentationDto';
import type { Locale } from '@/i18n/locale';

export const portfolioDocumentation: {
  [locale in Locale]: PortfolioDocumentationDTO;
} = {
  pl: {
    title: 'Opis aplikacji Portfolio',

    description: {
      root: {
        type: 'root',
        format: '',
        indent: 0,
        version: 1,

        children: [
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,

            children: [
              {
                mode: 'normal',
                text: 'To portfolio to coś więcej niż osobista strona internetowa — to w pełni autorska, produkcyjna aplikacja full-stack stworzona z myślą o prezentacji mojego doświadczenia zawodowego jako Senior Full-stack TypeScript Developera. Zbudowana w oparciu o Next.js, React, TypeScript, PostgreSQL i Payload CMS, oferuje uporządkowane, oparte na danych doświadczenie zamiast zbioru statycznych, ręcznie tworzonych podstron. Doświadczenie zawodowe, wykształcenie, certyfikaty, projekty i publikacje są zarządzane jako strukturyzowane dane i połączone za pomocą wspólnego systemu metadanych.',
                type: 'text',
                style: '',
                detail: 0,
                format: 0,
                version: 1,
              },
            ],
            direction: null,
            textStyle: '',
            textFormat: 0,
          },

          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,

            children: [
              {
                mode: 'normal',
                text: 'Jednym z kluczowych elementów aplikacji jest relacyjny system oparty na technologiach i umiejętnościach. Doświadczenia zawodowe, projekty, kursy, certyfikaty i inne elementy mogą być powiązane z konkretnymi technologiami i kompetencjami, pozwalając eksplorować całe portfolio poprzez te zależności. Zdefiniowane profile umiejętności umożliwiają tworzenie wielokrotnie wykorzystywanych zestawów technologii, a zaawansowane wyszukiwanie pozwala odnaleźć wszystkie powiązane obszary mojego profilu zawodowego. Każdy projekt posiada również dedykowane Case Study zawierające szczegółowy opis oraz techniczne omówienie.',
                type: 'text',
                style: '',
                detail: 0,
                format: 0,
                version: 1,
              },
            ],
            direction: null,
            textStyle: '',
            textFormat: 0,
          },

          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,

            children: [
              {
                mode: 'normal',
                text: 'Aplikacja została zaprojektowana z naciskiem na wydajność, dostępność, łatwość utrzymania i skalowalność. Jest w pełni responsywna, niezależnie od rozmiaru i orientacji ekranu, obsługuje język polski i angielski oraz uwzględnia zasady dostępności WCAG. Wydajność i jakość techniczna są weryfikowane za pomocą Lighthouse, gdzie aplikacja osiąga ',
                type: 'text',
                style: '',
                detail: 0,
                format: 0,
                version: 1,
              },

              {
                mode: 'normal',
                text: '100/100 w Performance, Accessibility, Best Practices i SEO',
                type: 'text',
                style: '',
                detail: 0,
                format: 1,
                version: 1,
              },

              {
                mode: 'normal',
                text: ". Frontend wykorzystuje Next.js, React Compiler oraz silnie typowaną architekturę danych, a zintegrowane mechanizmy cache'owania i automatycznej rewalidacji współpracują z Payload CMS, zapewniając wysoką wydajność i aktualność treści.",
                type: 'text',
                style: '',
                detail: 0,
                format: 0,
                version: 1,
              },
            ],
            direction: null,
            textStyle: '',
            textFormat: 0,
          },
        ],
        direction: null,
      },
    },
  },

  en: {
    title: 'The Portfolio Application Description',

    description: {
      root: {
        type: 'root',
        format: '',
        indent: 0,
        version: 1,

        children: [
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,

            children: [
              {
                mode: 'normal',
                text: 'This portfolio is more than a personal website — it is a fully custom-built, production-grade full-stack application designed to showcase my professional experience as a Senior Full-stack TypeScript Developer. Built with Next.js, React, TypeScript, PostgreSQL and Payload CMS, it provides a structured, data-driven experience rather than a collection of hardcoded pages. Professional experience, education, certifications, projects and publications are all managed as structured content and connected through a common metadata system.',
                type: 'text',
                style: '',
                detail: 0,
                format: 0,
                version: 1,
              },
            ],
            direction: null,
            textStyle: '',
            textFormat: 0,
          },

          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,

            children: [
              {
                mode: 'normal',
                text: 'One of the core concepts behind the application is its skill-based relational system. Experiences, projects, courses, certifications and other entries can be associated with specific technologies and skills, allowing the entire portfolio to be explored through these relationships. Predefined skill profiles provide reusable combinations of technologies, while the advanced search can discover all relevant areas of my professional profile. Each project also includes a dedicated case study with a more detailed description and technical overview.',
                type: 'text',
                style: '',
                detail: 0,
                format: 0,
                version: 1,
              },
            ],
            direction: null,
            textStyle: '',
            textFormat: 0,
          },

          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,

            children: [
              {
                mode: 'normal',
                text: 'The application is built with a strong focus on performance, accessibility, maintainability and scalability. It is fully responsive across screen sizes and orientations, supports Polish and English, and follows WCAG accessibility principles. Performance and technical quality are validated with Lighthouse, achieving 100/100 across Performance, Accessibility, Best Practices and SEO. The frontend uses Next.js, React Compiler and a strongly typed data architecture, with caching and automatic revalidation integrated with Payload CMS to keep the application fast and the content up to date.',
                type: 'text',
                style: '',
                detail: 0,
                format: 0,
                version: 1,
              },
            ],
            direction: null,
            textStyle: '',
            textFormat: 0,
          },
        ],
        direction: null,
      },
    },
  },
};
