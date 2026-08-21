import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_links_icon" AS ENUM('accessibility', 'certification', 'education', 'feather', 'handshake', 'home', 'project', 'publication', 'settings', 'tech-stack', 'search', 'close', 'lock', 'unlock', 'hamburger', 'build', 'link', 'read');
  CREATE TABLE "links" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"icon" "enum_links_icon",
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "links_locales" (
  	"label" varchar NOT NULL,
  	"url" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  ALTER TABLE "skills" ALTER COLUMN "key" SET DATA TYPE text;
  DROP TYPE "public"."enum_skills_key";
  CREATE TYPE "public"."enum_skills_key" AS ENUM('AI', 'DB', 'Git', 'CMS', 'ORM', 'WS', 'GraphQL', 'Print3D', 'Documentation', 'SalesSupport', 'Microservices', 'LabView', 'JS', 'Python', 'CSharp', 'CPlusPlus', 'Java', 'MMF2Dev', 'ReactJS', 'CRA', 'Vite', 'NextJS', 'TS', 'DevExtremeReact', 'AntDReact', 'MaterialUI', 'Bootstrap', 'ThreeJS', 'Leaflet', 'PdfMake', 'YukaJS', 'Zustand', 'Redux', 'Lodash', 'SocketIO', 'Zod', 'SASS', 'LESS', 'Cypress', 'Jest', 'PayloadCMS', 'SanityCMS', 'Angular', 'DevExtremeAngular', 'ExpressJS', 'NestJS', 'NodeJS', 'J5', 'DotNet', 'Blazor', 'AntDBlazor', 'PostgreSQL', 'MongoDB', 'SQLite', 'MySQL', 'Drizzle', 'TypeORM', 'Prisma', 'AWS', 'GCP', 'GRPC', 'VPS', 'Docker', 'Linux', 'AGV', 'CADCAM', 'LAD', 'SCL', 'STL', 'TiaPortal', 'PLCProgramming', 'FactoryIO', 'CommunicationTCPIP', 'ModbusProtocol', 'IQRF', 'Fanuc', 'Kuka', 'Eagle', 'Fusion360');
  ALTER TABLE "skills" ALTER COLUMN "key" SET DATA TYPE "public"."enum_skills_key" USING "key"::"public"."enum_skills_key";
  ALTER TABLE "projects" ADD COLUMN "thumbnail_id" integer;
  ALTER TABLE "projects_rels" ADD COLUMN "links_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "links_id" integer;
  ALTER TABLE "links_locales" ADD CONSTRAINT "links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."links"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "links_updated_at_idx" ON "links" USING btree ("updated_at");
  CREATE INDEX "links_created_at_idx" ON "links" USING btree ("created_at");
  CREATE UNIQUE INDEX "links_locales_locale_parent_id_unique" ON "links_locales" USING btree ("_locale","_parent_id");
  ALTER TABLE "projects" ADD CONSTRAINT "projects_thumbnail_id_media_id_fk" FOREIGN KEY ("thumbnail_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_links_fk" FOREIGN KEY ("links_id") REFERENCES "public"."links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_links_fk" FOREIGN KEY ("links_id") REFERENCES "public"."links"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "projects_thumbnail_idx" ON "projects" USING btree ("thumbnail_id");
  CREATE INDEX "projects_rels_links_id_idx" ON "projects_rels" USING btree ("links_id");
  CREATE INDEX "payload_locked_documents_rels_links_id_idx" ON "payload_locked_documents_rels" USING btree ("links_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "links_locales" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "links" CASCADE;
  DROP TABLE "links_locales" CASCADE;
  ALTER TABLE "projects" DROP CONSTRAINT "projects_thumbnail_id_media_id_fk";
  
  ALTER TABLE "projects_rels" DROP CONSTRAINT "projects_rels_links_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_links_fk";
  
  ALTER TABLE "skills" ALTER COLUMN "key" SET DATA TYPE text;
  DROP TYPE "public"."enum_skills_key";
  CREATE TYPE "public"."enum_skills_key" AS ENUM('AI', 'DB', 'Git', 'CMS', 'ORM', 'WS', 'GraphQL', 'Print3D', 'Documentation', 'SalesSupport', 'Microservices', 'LabView', 'JS', 'Python', 'CSharp', 'CPlusPlus', 'Java', 'MMF2Dev', 'TS', 'SASS', 'LESS', 'Cypress', 'Jest', 'ReactJS', 'CRA', 'Vite', 'NextJS', 'DevExtremeReact', 'AntDReact', 'MaterialUI', 'Bootstrap', 'ThreeJS', 'Leaflet', 'PdfMake', 'YukaJS', 'Zustand', 'Redux', 'Lodash', 'SocketIO', 'Zod', 'PayloadCMS', 'SanityCMS', 'Angular', 'DevExtremeAngular', 'ExpressJS', 'NestJS', 'NodeJS', 'J5', 'DotNet', 'Blazor', 'AntDBlazor', 'PostgreSQL', 'MongoDB', 'SQLite', 'MySQL', 'Drizzle', 'TypeORM', 'Prisma', 'AWS', 'GCP', 'GRPC', 'VPS', 'Docker', 'Linux', 'AGV', 'CADCAM', 'LAD', 'SCL', 'STL', 'TiaPortal', 'PLCProgramming', 'FactoryIO', 'CommunicationTCPIP', 'ModbusProtocol', 'IQRF', 'Fanuc', 'Kuka', 'Eagle', 'Fusion360');
  ALTER TABLE "skills" ALTER COLUMN "key" SET DATA TYPE "public"."enum_skills_key" USING "key"::"public"."enum_skills_key";
  DROP INDEX "projects_thumbnail_idx";
  DROP INDEX "projects_rels_links_id_idx";
  DROP INDEX "payload_locked_documents_rels_links_id_idx";
  ALTER TABLE "projects" DROP COLUMN "thumbnail_id";
  ALTER TABLE "projects_rels" DROP COLUMN "links_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "links_id";
  DROP TYPE "public"."enum_links_icon";`)
}
