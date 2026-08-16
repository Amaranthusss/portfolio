import { RichTextContent } from '@/components/rich-text-content/rich-text-content';
import { ListModule } from '@/components/list-module/list-module';
import Image from 'next/image';

import { getCoreTechnologies } from '@/services/getCoreTechnology';
import { getLocale } from 'next-intl/server';

import type { CoreTechnologiesDTO } from '@/models/coreTechnologiesDto';
import type { Locale } from '@/i18n/locale';

import styles from './page.module.scss';

export default async function CoreTechnologies(): Promise<React.ReactNode> {
  const locale: Locale = await getLocale();
  const coreTechnologies: CoreTechnologiesDTO = await getCoreTechnologies(locale);
  const imageWidth: number = 1000;

  return (
    <ListModule>
      <h1>{coreTechnologies.title}</h1>

      <RichTextContent content={coreTechnologies.content} />

      <Image
        className={styles.roadmap}
        src={'/images/roadmap.png'}
        alt={'Roadmap'}
        loading={'eager'}
        width={imageWidth}
        height={(imageWidth * 1) / 3 + imageWidth}
      />
    </ListModule>
  );
}
