import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob';
import { postgresAdapter } from '@payloadcms/db-postgres';
// import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { buildConfig } from 'payload';
import sharp from 'sharp';

import type { SharpDependency } from 'payload';

import { ExperienceSteps } from '@/collections/ExperienceSteps';
import { EducationSteps } from '@/collections/EducationSteps';
import { Certifications } from '@/collections/Certifications';
import { Publications } from '@/collections/Publications';
import { Profiles } from '@/collections/Profiles';
import { Projects } from '@/collections/Projects';
import { Persons } from '@/collections/Persons';
import { Skills } from '@/collections/Skills';
import { Media } from '@/collections/Media';
import { Users } from '@/collections/Users';

import { defaultLocale, localesAsString } from '@/i18n/locale';

export default buildConfig({
  admin: { user: Users.slug },
  // editor: lexicalEditor(),
  collections: [
    Users,
    Media,
    Skills,
    Projects,
    ExperienceSteps,
    EducationSteps,
    Certifications,
    Publications,
    Persons,
    Profiles,
  ],
  localization: { locales: localesAsString, defaultLocale, fallback: true },
  secret: process.env.PAYLOAD_SECRET || '',
  db: postgresAdapter({ pool: { connectionString: process.env.DATABASE_URL } }),
  sharp: sharp as SharpDependency,
  plugins: [
    vercelBlobStorage({
      enabled: process.env.VERCEL_BLOB_ENABLED === 'true',
      collections: { media: true },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
});
