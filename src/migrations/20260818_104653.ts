import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "core_technologies_groups_nodes" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_id" integer NOT NULL
  );
  
  CREATE TABLE "core_technologies_groups_nodes_locales" (
  	"title" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "core_technologies_groups" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"slug" varchar NOT NULL
  );
  
  CREATE TABLE "core_technologies_groups_locales" (
  	"title" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "core_technologies_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "core_technologies_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"skills_id" integer
  );
  
  ALTER TABLE "skills" ALTER COLUMN "key" SET DATA TYPE text;
  DROP TYPE "public"."enum_skills_key";
  CREATE TYPE "public"."enum_skills_key" AS ENUM('AI', 'DB', 'Git', 'CMS', 'ORM', 'WS', 'GraphQL', 'Print3D', 'Documentation', 'SalesSupport', 'Microservices', 'LabView', 'JS', 'Python', 'CSharp', 'CPlusPlus', 'Java', 'MMF2Dev', 'TS', 'SASS', 'LESS', 'Cypress', 'Jest', 'ReactJS', 'CRA', 'Vite', 'NextJS', 'DevExtremeReact', 'AntDReact', 'MaterialUI', 'Bootstrap', 'ThreeJS', 'Leaflet', 'PdfMake', 'YukaJS', 'Zustand', 'Redux', 'Lodash', 'SocketIO', 'Zod', 'PayloadCMS', 'SanityCMS', 'Angular', 'DevExtremeAngular', 'ExpressJS', 'NestJS', 'NodeJS', 'J5', 'DotNet', 'Blazor', 'AntDBlazor', 'PostgreSQL', 'MongoDB', 'SQLite', 'MySQL', 'Drizzle', 'TypeORM', 'Prisma', 'AWS', 'GCP', 'GRPC', 'VPS', 'Docker', 'Linux', 'AGV', 'CADCAM', 'LAD', 'SCL', 'STL', 'TiaPortal', 'PLCProgramming', 'FactoryIO', 'CommunicationTCPIP', 'ModbusProtocol', 'IQRF', 'Fanuc', 'Kuka', 'Eagle', 'Fusion360');
  ALTER TABLE "skills" ALTER COLUMN "key" SET DATA TYPE "public"."enum_skills_key" USING "key"::"public"."enum_skills_key";
  DROP INDEX "skills_key_idx";
  ALTER TABLE "core_technologies_groups_nodes" ADD CONSTRAINT "core_technologies_groups_nodes_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "core_technologies_groups_nodes" ADD CONSTRAINT "core_technologies_groups_nodes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."core_technologies_groups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "core_technologies_groups_nodes_locales" ADD CONSTRAINT "core_technologies_groups_nodes_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."core_technologies_groups_nodes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "core_technologies_groups" ADD CONSTRAINT "core_technologies_groups_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."core_technologies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "core_technologies_groups_locales" ADD CONSTRAINT "core_technologies_groups_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."core_technologies_groups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "core_technologies_texts" ADD CONSTRAINT "core_technologies_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."core_technologies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "core_technologies_rels" ADD CONSTRAINT "core_technologies_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."core_technologies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "core_technologies_rels" ADD CONSTRAINT "core_technologies_rels_skills_fk" FOREIGN KEY ("skills_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "core_technologies_groups_nodes_order_idx" ON "core_technologies_groups_nodes" USING btree ("_order");
  CREATE INDEX "core_technologies_groups_nodes_parent_id_idx" ON "core_technologies_groups_nodes" USING btree ("_parent_id");
  CREATE INDEX "core_technologies_groups_nodes_icon_idx" ON "core_technologies_groups_nodes" USING btree ("icon_id");
  CREATE UNIQUE INDEX "core_technologies_groups_nodes_locales_locale_parent_id_uniq" ON "core_technologies_groups_nodes_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "core_technologies_groups_order_idx" ON "core_technologies_groups" USING btree ("_order");
  CREATE INDEX "core_technologies_groups_parent_id_idx" ON "core_technologies_groups" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "core_technologies_groups_slug_idx" ON "core_technologies_groups" USING btree ("slug");
  CREATE UNIQUE INDEX "core_technologies_groups_locales_locale_parent_id_unique" ON "core_technologies_groups_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "core_technologies_texts_order_parent" ON "core_technologies_texts" USING btree ("order","parent_id");
  CREATE INDEX "core_technologies_rels_order_idx" ON "core_technologies_rels" USING btree ("order");
  CREATE INDEX "core_technologies_rels_parent_idx" ON "core_technologies_rels" USING btree ("parent_id");
  CREATE INDEX "core_technologies_rels_path_idx" ON "core_technologies_rels" USING btree ("path");
  CREATE INDEX "core_technologies_rels_skills_id_idx" ON "core_technologies_rels" USING btree ("skills_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "core_technologies_groups_nodes" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "core_technologies_groups_nodes_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "core_technologies_groups" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "core_technologies_groups_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "core_technologies_texts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "core_technologies_rels" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "core_technologies_groups_nodes" CASCADE;
  DROP TABLE "core_technologies_groups_nodes_locales" CASCADE;
  DROP TABLE "core_technologies_groups" CASCADE;
  DROP TABLE "core_technologies_groups_locales" CASCADE;
  DROP TABLE "core_technologies_texts" CASCADE;
  DROP TABLE "core_technologies_rels" CASCADE;
  ALTER TABLE "skills" ALTER COLUMN "key" SET DATA TYPE text;
  DROP TYPE "public"."enum_skills_key";
  CREATE TYPE "public"."enum_skills_key" AS ENUM('TS', 'LabView', 'Python', 'CSharp', 'CPlusPlus', 'Java', 'MMF2Dev', 'CADCAM', 'SCL', 'STL', 'LAD', 'DotNet', 'Blazor', 'Angular', 'ReactJS', 'CRA', 'Vite', 'NextJS', 'ExpressJS', 'NestJS', 'NodeJS', 'Leaflet', 'Sanity', 'ThreeJS', 'PdfMake', 'YukaJS', 'Zustand', 'Redux', 'J5', 'Zod', 'AntDReact', 'AntDBlazor', 'Bootstrap', 'MaterialUI', 'DevExtremeReact', 'DevExtremeAngular', 'PostgreSQL', 'MongoDB', 'SQLite', 'AWS', 'GCP', 'GRPC', 'GraphQL', 'VPS', 'Docker', 'Linux', 'TiaPortal', 'PLCProgramming', 'FactoryIO', 'CommunicationTCPIP', 'ModbusProtocol', 'IQRF', 'Eagle', 'Fusion360', 'AGV', 'Fanuc', 'Kuka', 'AI', 'Print3D', 'Documentation', 'SalesSupport', 'Microservices');
  ALTER TABLE "skills" ALTER COLUMN "key" SET DATA TYPE "public"."enum_skills_key" USING "key"::"public"."enum_skills_key";
  CREATE UNIQUE INDEX "skills_key_idx" ON "skills" USING btree ("key");`)
}
