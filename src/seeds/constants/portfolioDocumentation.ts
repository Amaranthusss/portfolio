import { createEmptyEditorState } from '@/utils/createEmptyEditorState';

import type { PortfolioDocumentationDTO } from '@/models/portfolioDocumentationDto';
import type { Locale } from '@/i18n/locale';

export const portfolioDocumentation: {
  [locale in Locale]: PortfolioDocumentationDTO;
} = {
  pl: {
    title: 'Opis aplikacji Portfolio',

    description: createEmptyEditorState(),
    content: createEmptyEditorState(),
  },

  en: {
    title: 'The Portfolio Application Description',

    description: createEmptyEditorState(),
    content: createEmptyEditorState(),
  },
};
