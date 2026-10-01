import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_core_technologies_groups_icon" AS ENUM('accessibility', 'certification', 'education', 'feather', 'handshake', 'home', 'project', 'publication', 'settings', 'tech-stack', 'search', 'close', 'lock', 'unlock', 'hamburger', 'build', 'link', 'read', 'mechatronics', 'it', 'github', 'bulb', 'hobby', 'work-station', 'software-programming', 'plc-programming', 'oszkurlat', 'frontend', 'backend');
  ALTER TYPE "public"."enum_links_icon" ADD VALUE 'frontend';
  ALTER TYPE "public"."enum_links_icon" ADD VALUE 'backend';
  ALTER TABLE "core_technologies_groups" ADD COLUMN "icon" "enum_core_technologies_groups_icon" NOT NULL;
  ALTER TABLE "core_technologies_groups" ADD COLUMN "color" varchar NOT NULL;
  ALTER TABLE "core_technologies_groups_locales" ADD COLUMN "description" varchar NOT NULL;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "links" ALTER COLUMN "icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_links_icon";
  CREATE TYPE "public"."enum_links_icon" AS ENUM('accessibility', 'certification', 'education', 'feather', 'handshake', 'home', 'project', 'publication', 'settings', 'tech-stack', 'search', 'close', 'lock', 'unlock', 'hamburger', 'build', 'link', 'read', 'mechatronics', 'it', 'github', 'bulb', 'hobby', 'work-station', 'software-programming', 'plc-programming', 'oszkurlat');
  ALTER TABLE "links" ALTER COLUMN "icon" SET DATA TYPE "public"."enum_links_icon" USING "icon"::"public"."enum_links_icon";
  ALTER TABLE "core_technologies_groups" DROP COLUMN "icon";
  ALTER TABLE "core_technologies_groups" DROP COLUMN "color";
  ALTER TABLE "core_technologies_groups_locales" DROP COLUMN "description";
  DROP TYPE "public"."enum_core_technologies_groups_icon";`)
}
