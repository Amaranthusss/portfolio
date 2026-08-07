import { ListModule } from '@/components/list-module/list-module';
import { Title } from '@/components/title/title';

import { getTranslations } from 'next-intl/server';

export default async function CodeStyle(): Promise<React.ReactNode> {
  const t = await getTranslations('code-style');

  return (
    <ListModule>
      <Title>{t('header')}</Title>
    </ListModule>
  );
}
