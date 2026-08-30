import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "about_me_locales" ADD COLUMN "welcome" jsonb;
  ALTER TABLE "portfolio_documentation_locales" DROP COLUMN "content";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "portfolio_documentation_locales" ADD COLUMN "content" jsonb;
  ALTER TABLE "about_me_locales" DROP COLUMN "welcome";`)
}
