-- CreateEnum
CREATE TYPE "Locale" AS ENUM ('pl', 'en');

-- CreateEnum
CREATE TYPE "SkillKey" AS ENUM ('TS', 'LabView', 'Python', 'CSharp', 'CPlusPlus', 'Java', 'MMF2Dev', 'CADCAM', 'SCL', 'STL', 'LAD', 'DotNet', 'Blazor', 'Angular', 'ReactJS', 'CRA', 'Vite', 'NextJS', 'ExpressJS', 'NestJS', 'NodeJS', 'Leaflet', 'Sanity', 'ThreeJS', 'PdfMake', 'YukaJS', 'Zustand', 'Redux', 'J5', 'AntDReact', 'AntDBlazor', 'Bootstrap', 'MaterialUI', 'DevExtremeReact', 'DevExtremeAngular', 'PostgreSQL', 'MongoDB', 'SQLite', 'AWS', 'GCP', 'GRPC', 'GraphQL', 'VPS', 'Docker', 'Linux', 'TiaPortal', 'PLCProgramming', 'FactoryIO', 'CommunicationTCPIP', 'ModbusProtocol', 'IQRF', 'Eagle', 'Fusion360', 'AGV', 'Fanuc', 'Kuka', 'AI', 'Print3D', 'Microservices');

-- CreateEnum
CREATE TYPE "Category" AS ENUM ('Mechatronics', 'Hobby', 'IT');

-- CreateEnum
CREATE TYPE "EmploymentType" AS ENUM ('FullTime', 'HalfTime', 'QuarterTime', 'SelfEmployed', 'Internship', 'Freelance', 'Apprenticeship');

-- CreateEnum
CREATE TYPE "LocationType" AS ENUM ('OnSite', 'Remote', 'Hybrid');

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "category" "Category" NOT NULL,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "isCurrent" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectTranslation" (
    "id" SERIAL NOT NULL,
    "projectId" INTEGER NOT NULL,
    "locale" "Locale" NOT NULL,
    "name" TEXT NOT NULL,
    "subname" TEXT,
    "description" TEXT,

    CONSTRAINT "ProjectTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" SERIAL NOT NULL,
    "key" "SkillKey" NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SkillTranslation" (
    "id" SERIAL NOT NULL,
    "skillId" INTEGER NOT NULL,
    "locale" "Locale" NOT NULL,
    "name" TEXT NOT NULL,
    "shortName" TEXT,
    "description" TEXT,

    CONSTRAINT "SkillTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectSkill" (
    "projectId" INTEGER NOT NULL,
    "skillId" INTEGER NOT NULL,

    CONSTRAINT "ProjectSkill_pkey" PRIMARY KEY ("projectId","skillId")
);

-- CreateTable
CREATE TABLE "EducationStep" (
    "id" SERIAL NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "grade" DOUBLE PRECISION,
    "withHonors" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "EducationStep_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EducationStepTranslation" (
    "id" SERIAL NOT NULL,
    "educationStepId" INTEGER NOT NULL,
    "locale" "Locale" NOT NULL,
    "title" TEXT NOT NULL,
    "institution" TEXT,
    "description" TEXT,

    CONSTRAINT "EducationStepTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EducationSkill" (
    "educationStepId" INTEGER NOT NULL,
    "skillId" INTEGER NOT NULL,

    CONSTRAINT "EducationSkill_pkey" PRIMARY KEY ("educationStepId","skillId")
);

-- CreateTable
CREATE TABLE "ExperienceStep" (
    "id" SERIAL NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "isCurrent" BOOLEAN NOT NULL DEFAULT false,
    "employmentType" "EmploymentType" NOT NULL,
    "locationType" "LocationType" NOT NULL,

    CONSTRAINT "ExperienceStep_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExperienceStepTranslation" (
    "id" SERIAL NOT NULL,
    "experienceStepId" INTEGER NOT NULL,
    "locale" "Locale" NOT NULL,
    "position" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "ExperienceStepTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExperienceSkill" (
    "experienceStepId" INTEGER NOT NULL,
    "skillId" INTEGER NOT NULL,

    CONSTRAINT "ExperienceSkill_pkey" PRIMARY KEY ("experienceStepId","skillId")
);

-- CreateTable
CREATE TABLE "Certification" (
    "id" SERIAL NOT NULL,
    "credentialID" TEXT,
    "issueDate" TIMESTAMP(3) NOT NULL,
    "logoUrl" TEXT NOT NULL,
    "url" TEXT,

    CONSTRAINT "Certification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CertificationTranslation" (
    "id" SERIAL NOT NULL,
    "certificationId" INTEGER NOT NULL,
    "locale" "Locale" NOT NULL,
    "title" TEXT NOT NULL,
    "provider" TEXT,

    CONSTRAINT "CertificationTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CertificationSkill" (
    "certificationId" INTEGER NOT NULL,
    "skillId" INTEGER NOT NULL,

    CONSTRAINT "CertificationSkill_pkey" PRIMARY KEY ("certificationId","skillId")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProfileTranslation" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "locale" "Locale" NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ProfileTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProfileSkill" (
    "profileId" INTEGER NOT NULL,
    "skillId" INTEGER NOT NULL,

    CONSTRAINT "ProfileSkill_pkey" PRIMARY KEY ("profileId","skillId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_slug_key" ON "Project"("slug");

-- CreateIndex
CREATE INDEX "Project_category_idx" ON "Project"("category");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectTranslation_projectId_locale_key" ON "ProjectTranslation"("projectId", "locale");

-- CreateIndex
CREATE UNIQUE INDEX "Skill_key_key" ON "Skill"("key");

-- CreateIndex
CREATE UNIQUE INDEX "SkillTranslation_skillId_locale_key" ON "SkillTranslation"("skillId", "locale");

-- CreateIndex
CREATE UNIQUE INDEX "EducationStepTranslation_educationStepId_locale_key" ON "EducationStepTranslation"("educationStepId", "locale");

-- CreateIndex
CREATE UNIQUE INDEX "ExperienceStepTranslation_experienceStepId_locale_key" ON "ExperienceStepTranslation"("experienceStepId", "locale");

-- CreateIndex
CREATE UNIQUE INDEX "CertificationTranslation_certificationId_locale_key" ON "CertificationTranslation"("certificationId", "locale");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_key_key" ON "Profile"("key");

-- CreateIndex
CREATE UNIQUE INDEX "ProfileTranslation_profileId_locale_key" ON "ProfileTranslation"("profileId", "locale");

-- AddForeignKey
ALTER TABLE "ProjectTranslation" ADD CONSTRAINT "ProjectTranslation_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillTranslation" ADD CONSTRAINT "SkillTranslation_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectSkill" ADD CONSTRAINT "ProjectSkill_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectSkill" ADD CONSTRAINT "ProjectSkill_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EducationStepTranslation" ADD CONSTRAINT "EducationStepTranslation_educationStepId_fkey" FOREIGN KEY ("educationStepId") REFERENCES "EducationStep"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EducationSkill" ADD CONSTRAINT "EducationSkill_educationStepId_fkey" FOREIGN KEY ("educationStepId") REFERENCES "EducationStep"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EducationSkill" ADD CONSTRAINT "EducationSkill_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExperienceStepTranslation" ADD CONSTRAINT "ExperienceStepTranslation_experienceStepId_fkey" FOREIGN KEY ("experienceStepId") REFERENCES "ExperienceStep"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExperienceSkill" ADD CONSTRAINT "ExperienceSkill_experienceStepId_fkey" FOREIGN KEY ("experienceStepId") REFERENCES "ExperienceStep"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExperienceSkill" ADD CONSTRAINT "ExperienceSkill_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CertificationTranslation" ADD CONSTRAINT "CertificationTranslation_certificationId_fkey" FOREIGN KEY ("certificationId") REFERENCES "Certification"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CertificationSkill" ADD CONSTRAINT "CertificationSkill_certificationId_fkey" FOREIGN KEY ("certificationId") REFERENCES "Certification"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CertificationSkill" ADD CONSTRAINT "CertificationSkill_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfileTranslation" ADD CONSTRAINT "ProfileTranslation_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfileSkill" ADD CONSTRAINT "ProfileSkill_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfileSkill" ADD CONSTRAINT "ProfileSkill_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;
