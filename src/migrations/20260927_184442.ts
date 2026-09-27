import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "certifications" ALTER COLUMN "image_id" SET NOT NULL;
  ALTER TABLE "certifications" ADD COLUMN "image_dark_theme_id" integer;
  ALTER TABLE "certifications" ADD CONSTRAINT "certifications_image_dark_theme_id_media_id_fk" FOREIGN KEY ("image_dark_theme_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "certifications_image_dark_theme_idx" ON "certifications" USING btree ("image_dark_theme_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "certifications" DROP CONSTRAINT "certifications_image_dark_theme_id_media_id_fk";
  
  DROP INDEX "certifications_image_dark_theme_idx";
  ALTER TABLE "certifications" ALTER COLUMN "image_id" DROP NOT NULL;
  ALTER TABLE "certifications" DROP COLUMN "image_dark_theme_id";`)
}
