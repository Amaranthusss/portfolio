import { createEmptyEditorState } from '@/utils/createEmptyEditorState';

import type { CodeStyleDTO } from '@/models/codeStyleDto';
import type { Locale } from '@/i18n/locale';

export const codeStyle: { [locale in Locale]: CodeStyleDTO } = {
  pl: {
    title: 'Styl prowadzenia kodu',

    content: createEmptyEditorState(),
  },

  en: {
    title: 'Code Style',

    content: createEmptyEditorState(),
  },
};
