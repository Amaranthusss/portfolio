import { RichTextContent } from '@/components/rich-text-content/rich-text-content';
import { ListModule } from '@/components/list-module/list-module';
import { TechStack } from '@/components/tech-stack/tech-stack';
import { Title } from '@/components/title/title';

import { getCoreTechnologies } from '@/services/getCoreTechnology';
import { getLocale } from 'next-intl/server';

import type { CoreTechnologiesDTO } from '@/models/coreTechnologiesDto';
import type { Locale } from '@/i18n/locale';

export default async function CoreTechnologies(): Promise<React.ReactNode> {
  const locale: Locale = await getLocale();

  const coreTechnologies: CoreTechnologiesDTO =
    await getCoreTechnologies(locale);

  return (
    <ListModule>
      <Title>{coreTechnologies.title}</Title>

      <RichTextContent content={coreTechnologies.content} />

      <TechStack groups={coreTechnologies.groups} />
    </ListModule>
  );
}
