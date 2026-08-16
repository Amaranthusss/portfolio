import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "about_me" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"email" varchar NOT NULL,
  	"mobile" varchar NOT NULL,
  	"linkedin" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "about_me_locales" (
  	"title" varchar NOT NULL,
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "portfolio_documentation" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "portfolio_documentation_locales" (
  	"title" varchar NOT NULL,
  	"description" jsonb,
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "core_technologies" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "core_technologies_locales" (
  	"title" varchar NOT NULL,
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "code_style" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "code_style_locales" (
  	"title" varchar NOT NULL,
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  ALTER TABLE "about_me_locales" ADD CONSTRAINT "about_me_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about_me"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "portfolio_documentation_locales" ADD CONSTRAINT "portfolio_documentation_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio_documentation"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "core_technologies_locales" ADD CONSTRAINT "core_technologies_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."core_technologies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "code_style_locales" ADD CONSTRAINT "code_style_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."code_style"("id") ON DELETE cascade ON UPDATE no action;
  CREATE UNIQUE INDEX "about_me_locales_locale_parent_id_unique" ON "about_me_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "portfolio_documentation_locales_locale_parent_id_unique" ON "portfolio_documentation_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "core_technologies_locales_locale_parent_id_unique" ON "core_technologies_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "code_style_locales_locale_parent_id_unique" ON "code_style_locales" USING btree ("_locale","_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "about_me" CASCADE;
  DROP TABLE "about_me_locales" CASCADE;
  DROP TABLE "portfolio_documentation" CASCADE;
  DROP TABLE "portfolio_documentation_locales" CASCADE;
  DROP TABLE "core_technologies" CASCADE;
  DROP TABLE "core_technologies_locales" CASCADE;
  DROP TABLE "code_style" CASCADE;
  DROP TABLE "code_style_locales" CASCADE;`)
}
