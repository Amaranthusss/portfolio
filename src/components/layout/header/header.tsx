"use client";
import { LanguageSelector } from "@/components/language-selector/language-selector";
import { Button } from "../../button/button";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { Route } from "@/constants/Route";

import styles from './header.module.scss';

export const Header = (): React.ReactNode => {
	const router: AppRouterInstance = useRouter();
	const t = useTranslations('layout');

	return (
		<header className={styles.header}>
			<Button onClick={(): void => router.push(Route.Homepage)}>{t('homepage')}</Button>
			<Button onClick={(): void => router.push(Route.ExperienceAndEducation)}>{t('experience-and-education')}</Button>
			<Button onClick={(): void => router.push(Route.CoursesAndCertifications)}>{t('courses-and-certifications')}</Button>
			<Button onClick={(): void => router.push(Route.ProjectsAndRealisations)}>{t('projects-and-realisations')}</Button>
			<Button onClick={(): void => router.push(Route.CoreTechnologies)}>{t('core-technologies')}</Button>
			<Button onClick={(): void => router.push(Route.CodeStyle)}>{t('code-style')}</Button>
			<Button onClick={(): void => router.push(Route.Publications)}>{t('publications')}</Button>
			<Button onClick={(): void => router.push(Route.HireMe)} type={'primary'} style={{ textTransform: 'uppercase' }} animated>{t('hire-me')}</Button>
			<LanguageSelector />
		</header>
	);
};