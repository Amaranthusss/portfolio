import { RichTextContent } from '@/components/rich-text-content/rich-text-content';
import { ListModule } from '@/components/list-module/list-module';
import { Title } from '@/components/title/title';

import { getTranslations } from 'next-intl/server';
import { getCodeStyle } from '@/services/getCodeStyle';
import { getLocale } from 'next-intl/server';

import type { CodeStyleDTO } from '@/models/codeStyleDto';
import type { Locale } from '@/i18n/locale';

export default async function CodeStyle(): Promise<React.ReactNode> {
  const locale: Locale = await getLocale();
  const codeStyle: CodeStyleDTO = await getCodeStyle(locale);

  return (
    <ListModule>
      <Title>{codeStyle.title}</Title>
      <RichTextContent content={codeStyle.content} />
    </ListModule>
  );
}
