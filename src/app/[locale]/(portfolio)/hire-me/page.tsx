import { ContactForm } from '@/components/contact-form/contact-form';
import { ListModule } from '@/components/list-module/list-module';
import { Title } from '@/components/title/title';
import { Card } from '@/components/card/card';

import { getTranslations } from 'next-intl/server';

export default async function HireMe(): Promise<React.ReactNode> {
  const t = await getTranslations('common.contact-form');

  return (
    <ListModule>
      <Title>{t('caption')}</Title>

      <Card>
        <ContactForm />
      </Card>
    </ListModule>
  );
}
