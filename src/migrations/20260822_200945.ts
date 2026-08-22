import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_projects_category" ADD VALUE 'Education' BEFORE 'Hobby';
  ALTER TYPE "public"."enum_links_icon" ADD VALUE 'mechatronics';
  ALTER TYPE "public"."enum_links_icon" ADD VALUE 'it';
  ALTER TYPE "public"."enum_links_icon" ADD VALUE 'github';
  ALTER TYPE "public"."enum_links_icon" ADD VALUE 'bulb';
  ALTER TYPE "public"."enum_links_icon" ADD VALUE 'hobby';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "projects" ALTER COLUMN "category" SET DATA TYPE text;
  DROP TYPE "public"."enum_projects_category";
  CREATE TYPE "public"."enum_projects_category" AS ENUM('Mechatronics', 'Hobby', 'IT');
  ALTER TABLE "projects" ALTER COLUMN "category" SET DATA TYPE "public"."enum_projects_category" USING "category"::"public"."enum_projects_category";
  ALTER TABLE "links" ALTER COLUMN "icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_links_icon";
  CREATE TYPE "public"."enum_links_icon" AS ENUM('accessibility', 'certification', 'education', 'feather', 'handshake', 'home', 'project', 'publication', 'settings', 'tech-stack', 'search', 'close', 'lock', 'unlock', 'hamburger', 'build', 'link', 'read');
  ALTER TABLE "links" ALTER COLUMN "icon" SET DATA TYPE "public"."enum_links_icon" USING "icon"::"public"."enum_links_icon";`)
}
