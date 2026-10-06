import { CoreTechnologiesGraph } from '@/components/core-technologies-graph/core-technologies-graph';
import { RichTextContent } from '@/components/rich-text-content/rich-text-content';
import { ListModule } from '@/components/list-module/list-module';
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

      <CoreTechnologiesGraph groups={coreTechnologies.groups} />

      <RichTextContent content={coreTechnologies.content} />
    </ListModule>
  );
}
