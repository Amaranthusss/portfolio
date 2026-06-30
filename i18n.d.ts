import type { Locale } from '@/i18n/locale';
import type enCommon from './messages/en/common.json';
import type enLayout from './messages/en/layout.json';

type Messages = {
  common: typeof enCommon;
  layout: typeof enLayout;
};

declare module 'next-intl' {
  interface AppConfig {
    Locale: Locale;
    Messages: Messages;
  }
}
