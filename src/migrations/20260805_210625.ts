import { type MigrateUpArgs, type MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."_locales" AS ENUM('pl', 'en');
  CREATE TYPE "public"."enum_skills_key" AS ENUM('TS', 'LabView', 'Python', 'CSharp', 'CPlusPlus', 'Java', 'MMF2Dev', 'CADCAM', 'SCL', 'STL', 'LAD', 'DotNet', 'Blazor', 'Angular', 'ReactJS', 'CRA', 'Vite', 'NextJS', 'ExpressJS', 'NestJS', 'NodeJS', 'Leaflet', 'Sanity', 'ThreeJS', 'PdfMake', 'YukaJS', 'Zustand', 'Redux', 'J5', 'Zod', 'AntDReact', 'AntDBlazor', 'Bootstrap', 'MaterialUI', 'DevExtremeReact', 'DevExtremeAngular', 'PostgreSQL', 'MongoDB', 'SQLite', 'AWS', 'GCP', 'GRPC', 'GraphQL', 'VPS', 'Docker', 'Linux', 'TiaPortal', 'PLCProgramming', 'FactoryIO', 'CommunicationTCPIP', 'ModbusProtocol', 'IQRF', 'Eagle', 'Fusion360', 'AGV', 'Fanuc', 'Kuka', 'AI', 'Print3D', 'Documentation', 'SalesSupport', 'Microservices');
  CREATE TYPE "public"."enum_projects_category" AS ENUM('Mechatronics', 'Hobby', 'IT');
  CREATE TYPE "public"."enum_experience_steps_employment_type" AS ENUM('FullTime', 'HalfTime', 'QuarterTime', 'SelfEmployed', 'Internship', 'Freelance', 'Apprenticeship');
  CREATE TYPE "public"."enum_experience_steps_location_type" AS ENUM('OnSite', 'Remote', 'Hybrid');
  CREATE TYPE "public"."enum_persons_academic_degree" AS ENUM('Engineer', 'MasterOfScienceInEngineering', 'DoctorInEngineering', 'HabilitatedDoctorInEngineering', 'UniversityProfessor', 'Professor');
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE "skills" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" "enum_skills_key" NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "skills_locales" (
  	"name" varchar NOT NULL,
  	"short_name" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "projects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar NOT NULL,
  	"category" "enum_projects_category" NOT NULL,
  	"start_date" timestamp(3) with time zone,
  	"end_date" timestamp(3) with time zone,
  	"is_current" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "projects_locales" (
  	"name" varchar NOT NULL,
  	"subname" varchar,
  	"description" varchar,
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "projects_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"skills_id" integer
  );
  
  CREATE TABLE "experience_steps_duties" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "experience_steps" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar NOT NULL,
  	"start_date" timestamp(3) with time zone NOT NULL,
  	"end_date" timestamp(3) with time zone,
  	"is_current" boolean DEFAULT false,
  	"employment_type" "enum_experience_steps_employment_type" NOT NULL,
  	"location_type" "enum_experience_steps_location_type" NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "experience_steps_locales" (
  	"position" varchar NOT NULL,
  	"company" varchar NOT NULL,
  	"location" varchar NOT NULL,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "experience_steps_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"skills_id" integer
  );
  
  CREATE TABLE "education_steps" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar NOT NULL,
  	"start_date" timestamp(3) with time zone NOT NULL,
  	"end_date" timestamp(3) with time zone,
  	"is_current" boolean,
  	"grade" numeric,
  	"with_honors" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "education_steps_locales" (
  	"institution" varchar NOT NULL,
  	"degree" varchar,
  	"project_title" varchar,
  	"field_of_study" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "education_steps_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"skills_id" integer
  );
  
  CREATE TABLE "certifications" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar NOT NULL,
  	"credential_i_d" varchar,
  	"issue_date" timestamp(3) with time zone NOT NULL,
  	"url" varchar,
  	"image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "certifications_locales" (
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"provider" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "certifications_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"skills_id" integer
  );
  
  CREATE TABLE "publications_keywords" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "publications" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar NOT NULL,
  	"publish_date" timestamp(3) with time zone NOT NULL,
  	"url" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "publications_locales" (
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"publisher" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "publications_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"persons_id" integer,
  	"skills_id" integer
  );
  
  CREATE TABLE "persons" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"surname" varchar NOT NULL,
  	"academic_degree" "enum_persons_academic_degree",
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "profiles" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar NOT NULL,
  	"order_number" numeric NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "profiles_locales" (
  	"name" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "profiles_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"skills_id" integer
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"media_id" integer,
  	"skills_id" integer,
  	"projects_id" integer,
  	"experience_steps_id" integer,
  	"education_steps_id" integer,
  	"certifications_id" integer,
  	"publications_id" integer,
  	"persons_id" integer,
  	"profiles_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "skills_locales" ADD CONSTRAINT "skills_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_locales" ADD CONSTRAINT "projects_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_skills_fk" FOREIGN KEY ("skills_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "experience_steps_duties" ADD CONSTRAINT "experience_steps_duties_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."experience_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "experience_steps_locales" ADD CONSTRAINT "experience_steps_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."experience_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "experience_steps_rels" ADD CONSTRAINT "experience_steps_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."experience_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "experience_steps_rels" ADD CONSTRAINT "experience_steps_rels_skills_fk" FOREIGN KEY ("skills_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "education_steps_locales" ADD CONSTRAINT "education_steps_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."education_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "education_steps_rels" ADD CONSTRAINT "education_steps_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."education_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "education_steps_rels" ADD CONSTRAINT "education_steps_rels_skills_fk" FOREIGN KEY ("skills_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "certifications" ADD CONSTRAINT "certifications_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "certifications_locales" ADD CONSTRAINT "certifications_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."certifications"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "certifications_rels" ADD CONSTRAINT "certifications_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."certifications"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "certifications_rels" ADD CONSTRAINT "certifications_rels_skills_fk" FOREIGN KEY ("skills_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "publications_keywords" ADD CONSTRAINT "publications_keywords_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."publications"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "publications_locales" ADD CONSTRAINT "publications_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."publications"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "publications_rels" ADD CONSTRAINT "publications_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."publications"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "publications_rels" ADD CONSTRAINT "publications_rels_persons_fk" FOREIGN KEY ("persons_id") REFERENCES "public"."persons"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "publications_rels" ADD CONSTRAINT "publications_rels_skills_fk" FOREIGN KEY ("skills_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "profiles_locales" ADD CONSTRAINT "profiles_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "profiles_rels" ADD CONSTRAINT "profiles_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "profiles_rels" ADD CONSTRAINT "profiles_rels_skills_fk" FOREIGN KEY ("skills_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_skills_fk" FOREIGN KEY ("skills_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_experience_steps_fk" FOREIGN KEY ("experience_steps_id") REFERENCES "public"."experience_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_education_steps_fk" FOREIGN KEY ("education_steps_id") REFERENCES "public"."education_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_certifications_fk" FOREIGN KEY ("certifications_id") REFERENCES "public"."certifications"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_publications_fk" FOREIGN KEY ("publications_id") REFERENCES "public"."publications"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_persons_fk" FOREIGN KEY ("persons_id") REFERENCES "public"."persons"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_profiles_fk" FOREIGN KEY ("profiles_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE UNIQUE INDEX "skills_key_idx" ON "skills" USING btree ("key");
  CREATE INDEX "skills_updated_at_idx" ON "skills" USING btree ("updated_at");
  CREATE INDEX "skills_created_at_idx" ON "skills" USING btree ("created_at");
  CREATE UNIQUE INDEX "skills_locales_locale_parent_id_unique" ON "skills_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "projects_slug_idx" ON "projects" USING btree ("slug");
  CREATE INDEX "projects_updated_at_idx" ON "projects" USING btree ("updated_at");
  CREATE INDEX "projects_created_at_idx" ON "projects" USING btree ("created_at");
  CREATE UNIQUE INDEX "projects_locales_locale_parent_id_unique" ON "projects_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "projects_rels_order_idx" ON "projects_rels" USING btree ("order");
  CREATE INDEX "projects_rels_parent_idx" ON "projects_rels" USING btree ("parent_id");
  CREATE INDEX "projects_rels_path_idx" ON "projects_rels" USING btree ("path");
  CREATE INDEX "projects_rels_skills_id_idx" ON "projects_rels" USING btree ("skills_id");
  CREATE INDEX "experience_steps_duties_order_idx" ON "experience_steps_duties" USING btree ("_order");
  CREATE INDEX "experience_steps_duties_parent_id_idx" ON "experience_steps_duties" USING btree ("_parent_id");
  CREATE INDEX "experience_steps_duties_locale_idx" ON "experience_steps_duties" USING btree ("_locale");
  CREATE UNIQUE INDEX "experience_steps_slug_idx" ON "experience_steps" USING btree ("slug");
  CREATE INDEX "experience_steps_updated_at_idx" ON "experience_steps" USING btree ("updated_at");
  CREATE INDEX "experience_steps_created_at_idx" ON "experience_steps" USING btree ("created_at");
  CREATE UNIQUE INDEX "experience_steps_locales_locale_parent_id_unique" ON "experience_steps_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "experience_steps_rels_order_idx" ON "experience_steps_rels" USING btree ("order");
  CREATE INDEX "experience_steps_rels_parent_idx" ON "experience_steps_rels" USING btree ("parent_id");
  CREATE INDEX "experience_steps_rels_path_idx" ON "experience_steps_rels" USING btree ("path");
  CREATE INDEX "experience_steps_rels_skills_id_idx" ON "experience_steps_rels" USING btree ("skills_id");
  CREATE UNIQUE INDEX "education_steps_slug_idx" ON "education_steps" USING btree ("slug");
  CREATE INDEX "education_steps_updated_at_idx" ON "education_steps" USING btree ("updated_at");
  CREATE INDEX "education_steps_created_at_idx" ON "education_steps" USING btree ("created_at");
  CREATE UNIQUE INDEX "education_steps_locales_locale_parent_id_unique" ON "education_steps_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "education_steps_rels_order_idx" ON "education_steps_rels" USING btree ("order");
  CREATE INDEX "education_steps_rels_parent_idx" ON "education_steps_rels" USING btree ("parent_id");
  CREATE INDEX "education_steps_rels_path_idx" ON "education_steps_rels" USING btree ("path");
  CREATE INDEX "education_steps_rels_skills_id_idx" ON "education_steps_rels" USING btree ("skills_id");
  CREATE UNIQUE INDEX "certifications_slug_idx" ON "certifications" USING btree ("slug");
  CREATE INDEX "certifications_image_idx" ON "certifications" USING btree ("image_id");
  CREATE INDEX "certifications_updated_at_idx" ON "certifications" USING btree ("updated_at");
  CREATE INDEX "certifications_created_at_idx" ON "certifications" USING btree ("created_at");
  CREATE UNIQUE INDEX "certifications_locales_locale_parent_id_unique" ON "certifications_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "certifications_rels_order_idx" ON "certifications_rels" USING btree ("order");
  CREATE INDEX "certifications_rels_parent_idx" ON "certifications_rels" USING btree ("parent_id");
  CREATE INDEX "certifications_rels_path_idx" ON "certifications_rels" USING btree ("path");
  CREATE INDEX "certifications_rels_skills_id_idx" ON "certifications_rels" USING btree ("skills_id");
  CREATE INDEX "publications_keywords_order_idx" ON "publications_keywords" USING btree ("_order");
  CREATE INDEX "publications_keywords_parent_id_idx" ON "publications_keywords" USING btree ("_parent_id");
  CREATE INDEX "publications_keywords_locale_idx" ON "publications_keywords" USING btree ("_locale");
  CREATE UNIQUE INDEX "publications_slug_idx" ON "publications" USING btree ("slug");
  CREATE INDEX "publications_updated_at_idx" ON "publications" USING btree ("updated_at");
  CREATE INDEX "publications_created_at_idx" ON "publications" USING btree ("created_at");
  CREATE UNIQUE INDEX "publications_locales_locale_parent_id_unique" ON "publications_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "publications_rels_order_idx" ON "publications_rels" USING btree ("order");
  CREATE INDEX "publications_rels_parent_idx" ON "publications_rels" USING btree ("parent_id");
  CREATE INDEX "publications_rels_path_idx" ON "publications_rels" USING btree ("path");
  CREATE INDEX "publications_rels_persons_id_idx" ON "publications_rels" USING btree ("persons_id");
  CREATE INDEX "publications_rels_skills_id_idx" ON "publications_rels" USING btree ("skills_id");
  CREATE INDEX "persons_updated_at_idx" ON "persons" USING btree ("updated_at");
  CREATE INDEX "persons_created_at_idx" ON "persons" USING btree ("created_at");
  CREATE UNIQUE INDEX "profiles_slug_idx" ON "profiles" USING btree ("slug");
  CREATE UNIQUE INDEX "profiles_order_number_idx" ON "profiles" USING btree ("order_number");
  CREATE INDEX "profiles_updated_at_idx" ON "profiles" USING btree ("updated_at");
  CREATE INDEX "profiles_created_at_idx" ON "profiles" USING btree ("created_at");
  CREATE UNIQUE INDEX "profiles_locales_locale_parent_id_unique" ON "profiles_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "profiles_rels_order_idx" ON "profiles_rels" USING btree ("order");
  CREATE INDEX "profiles_rels_parent_idx" ON "profiles_rels" USING btree ("parent_id");
  CREATE INDEX "profiles_rels_path_idx" ON "profiles_rels" USING btree ("path");
  CREATE INDEX "profiles_rels_skills_id_idx" ON "profiles_rels" USING btree ("skills_id");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_skills_id_idx" ON "payload_locked_documents_rels" USING btree ("skills_id");
  CREATE INDEX "payload_locked_documents_rels_projects_id_idx" ON "payload_locked_documents_rels" USING btree ("projects_id");
  CREATE INDEX "payload_locked_documents_rels_experience_steps_id_idx" ON "payload_locked_documents_rels" USING btree ("experience_steps_id");
  CREATE INDEX "payload_locked_documents_rels_education_steps_id_idx" ON "payload_locked_documents_rels" USING btree ("education_steps_id");
  CREATE INDEX "payload_locked_documents_rels_certifications_id_idx" ON "payload_locked_documents_rels" USING btree ("certifications_id");
  CREATE INDEX "payload_locked_documents_rels_publications_id_idx" ON "payload_locked_documents_rels" USING btree ("publications_id");
  CREATE INDEX "payload_locked_documents_rels_persons_id_idx" ON "payload_locked_documents_rels" USING btree ("persons_id");
  CREATE INDEX "payload_locked_documents_rels_profiles_id_idx" ON "payload_locked_documents_rels" USING btree ("profiles_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "skills" CASCADE;
  DROP TABLE "skills_locales" CASCADE;
  DROP TABLE "projects" CASCADE;
  DROP TABLE "projects_locales" CASCADE;
  DROP TABLE "projects_rels" CASCADE;
  DROP TABLE "experience_steps_duties" CASCADE;
  DROP TABLE "experience_steps" CASCADE;
  DROP TABLE "experience_steps_locales" CASCADE;
  DROP TABLE "experience_steps_rels" CASCADE;
  DROP TABLE "education_steps" CASCADE;
  DROP TABLE "education_steps_locales" CASCADE;
  DROP TABLE "education_steps_rels" CASCADE;
  DROP TABLE "certifications" CASCADE;
  DROP TABLE "certifications_locales" CASCADE;
  DROP TABLE "certifications_rels" CASCADE;
  DROP TABLE "publications_keywords" CASCADE;
  DROP TABLE "publications" CASCADE;
  DROP TABLE "publications_locales" CASCADE;
  DROP TABLE "publications_rels" CASCADE;
  DROP TABLE "persons" CASCADE;
  DROP TABLE "profiles" CASCADE;
  DROP TABLE "profiles_locales" CASCADE;
  DROP TABLE "profiles_rels" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TYPE "public"."_locales";
  DROP TYPE "public"."enum_skills_key";
  DROP TYPE "public"."enum_projects_category";
  DROP TYPE "public"."enum_experience_steps_employment_type";
  DROP TYPE "public"."enum_experience_steps_location_type";
  DROP TYPE "public"."enum_persons_academic_degree";`)
}
