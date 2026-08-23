import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_experience_steps_icon" AS ENUM('accessibility', 'certification', 'education', 'feather', 'handshake', 'home', 'project', 'publication', 'settings', 'tech-stack', 'search', 'close', 'lock', 'unlock', 'hamburger', 'build', 'link', 'read', 'mechatronics', 'it', 'github', 'bulb', 'hobby', 'work-station', 'software-programming', 'plc-programming');
  ALTER TYPE "public"."enum_links_icon" ADD VALUE 'work-station';
  ALTER TYPE "public"."enum_links_icon" ADD VALUE 'software-programming';
  ALTER TYPE "public"."enum_links_icon" ADD VALUE 'plc-programming';
  ALTER TABLE "media" ADD COLUMN "prefix" varchar;
  ALTER TABLE "experience_steps" ADD COLUMN "icon" "enum_experience_steps_icon";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "links" ALTER COLUMN "icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_links_icon";
  CREATE TYPE "public"."enum_links_icon" AS ENUM('accessibility', 'certification', 'education', 'feather', 'handshake', 'home', 'project', 'publication', 'settings', 'tech-stack', 'search', 'close', 'lock', 'unlock', 'hamburger', 'build', 'link', 'read', 'mechatronics', 'it', 'github', 'bulb', 'hobby');
  ALTER TABLE "links" ALTER COLUMN "icon" SET DATA TYPE "public"."enum_links_icon" USING "icon"::"public"."enum_links_icon";
  ALTER TABLE "media" DROP COLUMN "prefix";
  ALTER TABLE "experience_steps" DROP COLUMN "icon";
  DROP TYPE "public"."enum_experience_steps_icon";`)
}
