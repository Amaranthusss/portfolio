import type { BasePayload, PaginatedDocs, Payload } from 'payload';
import type { LinkSeedData } from '../interfaces/linkSeedData';
import type { Locale } from '@/i18n/locale';
import type { Link } from '../../../payload-types';

import { links } from '../constants/links';

function getUrl(link: LinkSeedData, locale: Locale): string {
  if (link.sharedUrl != null) return link.sharedUrl;
  return link.translations[locale].url;
}

async function seedLink(payload: Payload, link: LinkSeedData): Promise<void> {
  const result: PaginatedDocs<Link> = await payload.find({
    collection: 'links',
    where: { key: { equals: link.key } },
    depth: 0,
    limit: 1,
  });

  const existingLink: Link | undefined = result.docs[0];

  let linkId: Link['id'];

  if (existingLink == null) {
    console.log(`Creating link: ${link.key}`);

    const createdLink: Link = await payload.create({
      collection: 'links',
      locale: 'en',
      data: {
        key: link.key,
        icon: link.icon,
        isExternal: link.isExternal,
        label: link.translations.en.label,
        url: getUrl(link, 'en'),
      },
    });

    linkId = createdLink.id;
  } else {
    console.log(`Updating link: ${link.key}`);

    linkId = existingLink.id;

    await payload.update({
      collection: 'links',
      id: linkId,
      locale: 'en',
      data: {
        icon: link.icon,
        isExternal: link.isExternal,
        label: link.translations.en.label,
        url: getUrl(link, 'en'),
      },
    });
  }

  for (const locale of ['pl'] satisfies Locale[]) {
    await payload.update({
      collection: 'links',
      id: linkId,
      locale,
      data: {
        label: link.translations[locale].label,
        url: getUrl(link, locale),
      },
    });
  }
}

export async function seedLinks(payload: BasePayload): Promise<void> {
  console.log('== Seeding links ==');

  for (const link of links) {
    await seedLink(payload, link);
  }

  console.log('== Links seeded successfully ==');
}
